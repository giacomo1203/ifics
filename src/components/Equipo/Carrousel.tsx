import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
// Asegúrate de que estas importaciones sean correctas para tu proyecto
import { TeamItem } from './Equipo'
import Modal from './ModalTeam'
import { LazyLoadImage } from 'react-lazy-load-image-component'

// --- Configuración ---
const TRANSITION_DURATION_MS = 500
const SWIPE_THRESHOLD = 50 // Píxeles mínimos de arrastre para considerarlo un swipe
const MOBILE_FIXED_WIDTH_PX = 240 // Ancho fijo en móvil
const SCROLL_LOCK_THRESHOLD = 10 // Píxeles para decidir si es scroll H o V

const slidesPerViewConfig = {
  base: 1, // Indica modo fijo
  md: 3,
  lg: 4,
}

interface CustomCarouselProps {
  team: TeamItem[]
}

// --- Helper fuera del componente para calcular layout inicial ---
const getInitialLayout = (itemCount: number) => {
  let visibleSlides = slidesPerViewConfig.lg
  let isFixedWidthMode = false
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1024

  if (screenWidth < 768) {
    visibleSlides = slidesPerViewConfig.base
    isFixedWidthMode = true
  } else if (screenWidth < 1200) {
    visibleSlides = slidesPerViewConfig.md
  }

  const needsCloning = itemCount > 0
  const baseClones = Math.max(slidesPerViewConfig.md, slidesPerViewConfig.lg)
  const clonesCount = needsCloning ? Math.min(baseClones, itemCount) : 0
  const initialIndex = needsCloning ? clonesCount : 0
  const totalExtendedItems = itemCount + clonesCount * 2

  let initialTranslate = 0
  if (isFixedWidthMode) {
    const totalPixelWidth = totalExtendedItems * MOBILE_FIXED_WIDTH_PX
    if (totalPixelWidth > 0) {
      initialTranslate =
        ((initialIndex * MOBILE_FIXED_WIDTH_PX) / totalPixelWidth) * -100
    }
  } else {
    if (visibleSlides > 0) {
      initialTranslate = initialIndex * (-100 / visibleSlides)
    }
  }

  return {
    visibleSlides,
    isFixedWidthMode,
    clonesCount,
    initialIndex,
    initialTranslate,
    totalExtendedItems,
  }
}

// --- Componente Principal ---
const CustomCarousel: React.FC<CustomCarouselProps> = ({ team }) => {
  const originalItemCount = team.length
  const memoizedInitialLayout = useMemo(
    () => getInitialLayout(originalItemCount),
    [originalItemCount]
  )

  // --- Estados ---
  const [currentIndex, setCurrentIndex] = useState(
    memoizedInitialLayout.initialIndex
  )
  const [visibleSlides, setVisibleSlides] = useState(
    memoizedInitialLayout.visibleSlides
  )
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isDragging, setIsDragging] = useState(false) // User is actively dragging
  const [currentTranslate, setCurrentTranslate] = useState(
    memoizedInitialLayout.initialTranslate
  )
  const [startPos, setStartPos] = useState(0) // Start X position
  const [isFixedWidthMode, setIsFixedWidthMode] = useState(
    memoizedInitialLayout.isFixedWidthMode
  )
  const [clonesCountState, setClonesCountState] = useState(
    memoizedInitialLayout.clonesCount
  )
  const [selectedMember, setSelectedMember] = useState<TeamItem | null>(null)
  const [showModal, setShowModal] = useState(false)

  // --- Referencias ---
  const trackRef = useRef<HTMLDivElement>(null)
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  // Refs para lógica de drag/scroll lock
  const startY = useRef<number>(0) // Start Y position
  const directionLock = useRef<'horizontal' | 'vertical' | null>(null) // Lock swipe direction
  const isScrollPrevented = useRef<boolean>(false) // Track if preventDefault was called

  // --- Lógica de Clonación ---
  const needsCloning = useMemo(() => originalItemCount > 0, [originalItemCount])
  const extendedTeam = useMemo(() => {
    if (!needsCloning || clonesCountState === 0) return team
    const startClones = team.slice(0, clonesCountState)
    const endClones = team.slice(-clonesCountState)
    return [...endClones, ...team, ...startClones]
  }, [team, needsCloning, clonesCountState])
  const totalExtendedItems = extendedTeam.length

  // --- Función para Aplicar Layout (en Resize) ---
  const applyLayoutOnResize = useCallback(() => {
    const {
      visibleSlides: newVisibleSlides,
      isFixedWidthMode: newFixedMode,
      clonesCount: newClonesCount,
      initialIndex: newStartIndex,
      initialTranslate: newTranslate,
    } = getInitialLayout(originalItemCount)

    // Comparar con los estados actuales para evitar re-renders innecesarios
    if (
      newVisibleSlides !== visibleSlides ||
      newFixedMode !== isFixedWidthMode
    ) {
      setVisibleSlides(newVisibleSlides)
      setIsFixedWidthMode(newFixedMode)
      setClonesCountState(newClonesCount)
      setCurrentIndex(newStartIndex)
      setCurrentTranslate(newTranslate)

      if (trackRef.current) {
        trackRef.current.style.transition = 'none'
        trackRef.current.style.transform = `translateX(${newTranslate}%)`
        requestAnimationFrame(() => {
          setTimeout(() => {
            if (trackRef.current) {
              trackRef.current.style.transition = `transform ${TRANSITION_DURATION_MS}ms ease-in-out`
            }
          }, 50)
        })
      }
      setIsTransitioning(false)
      if (transitionTimeoutRef.current)
        clearTimeout(transitionTimeoutRef.current)
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current)
    }
  }, [originalItemCount, visibleSlides, isFixedWidthMode])

  // --- Efecto de Montaje: Solo para activar transición y listener ---
  useEffect(() => {
    const enableTransitionTimeout = setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.style.transition = `transform ${TRANSITION_DURATION_MS}ms ease-in-out`
      }
    }, 50)

    const handleResize = () => {
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current)
      resizeTimeoutRef.current = setTimeout(applyLayoutOnResize, 250)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(enableTransitionTimeout)
      window.removeEventListener('resize', handleResize)
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current)
      if (transitionTimeoutRef.current)
        clearTimeout(transitionTimeoutRef.current)
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current)
    }
  }, [applyLayoutOnResize])

  // --- Salto Infinito (handleTransitionEnd) ---
  const handleTransitionEnd = useCallback(() => {
    if (!needsCloning || !trackRef.current || clonesCountState === 0) {
      setIsTransitioning(false)
      return
    }
    let newIndex = currentIndex
    let shouldJump = false
    const firstEndCloneIndex = clonesCountState + originalItemCount
    const firstOriginalIndex = clonesCountState
    if (currentIndex >= firstEndCloneIndex) {
      newIndex = currentIndex - originalItemCount
      shouldJump = true
    } else if (currentIndex < firstOriginalIndex) {
      newIndex = currentIndex + originalItemCount
      shouldJump = true
    }

    if (shouldJump) {
      trackRef.current.style.transition = 'none'
      setCurrentIndex(newIndex)
      let newTranslate = 0
      if (isFixedWidthMode) {
        const totalPixelWidth = totalExtendedItems * MOBILE_FIXED_WIDTH_PX
        if (totalPixelWidth > 0)
          newTranslate =
            ((newIndex * MOBILE_FIXED_WIDTH_PX) / totalPixelWidth) * -100
      } else {
        if (visibleSlides > 0) newTranslate = newIndex * (-100 / visibleSlides)
      }
      setCurrentTranslate(newTranslate)
      trackRef.current.style.transform = `translateX(${newTranslate}%)`
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (trackRef.current)
            trackRef.current.style.transition = `transform ${TRANSITION_DURATION_MS}ms ease-in-out`
          setIsTransitioning(false)
        }, 0)
      })
    } else {
      setIsTransitioning(false)
    }
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
  }, [
    currentIndex,
    needsCloning,
    originalItemCount,
    visibleSlides,
    clonesCountState,
    isFixedWidthMode,
    totalExtendedItems,
  ])

  // --- Navegación ---
  const setPositionByIndex = useCallback(
    (index: number, animate = true) => {
      if (!trackRef.current) return
      let newTranslate = 0
      if (isFixedWidthMode) {
        const currentTotalExtended = originalItemCount + clonesCountState * 2
        const totalPixelWidth = currentTotalExtended * MOBILE_FIXED_WIDTH_PX
        if (totalPixelWidth > 0)
          newTranslate =
            ((index * MOBILE_FIXED_WIDTH_PX) / totalPixelWidth) * -100
      } else {
        if (visibleSlides > 0) newTranslate = index * (-100 / visibleSlides)
      }
      trackRef.current.style.transition = animate
        ? `transform ${TRANSITION_DURATION_MS}ms ease-in-out`
        : 'none'
      setCurrentTranslate(newTranslate)
      trackRef.current.style.transform = `translateX(${newTranslate}%)`
      setCurrentIndex(index)
    },
    [visibleSlides, isFixedWidthMode, originalItemCount, clonesCountState]
  ) // Dependencias actualizadas

  const goTo = useCallback(
    (newLogicalIndex: number) => {
      if (isTransitioning || totalExtendedItems === 0) return
      setIsTransitioning(true)
      setPositionByIndex(newLogicalIndex, true)
      if (transitionTimeoutRef.current)
        clearTimeout(transitionTimeoutRef.current)
      transitionTimeoutRef.current = setTimeout(
        () => handleTransitionEnd(),
        TRANSITION_DURATION_MS + 100
      )
    },
    [
      isTransitioning,
      totalExtendedItems,
      handleTransitionEnd,
      setPositionByIndex,
    ]
  )

  const goToNext = useCallback(() => {
    goTo(currentIndex + 1)
  }, [goTo, currentIndex])
  const goToPrev = useCallback(() => {
    goTo(currentIndex - 1)
  }, [goTo, currentIndex])

  // --- Clic y Modal ---
  const handleItemClick = (item: TeamItem) => {
    // Prevenir click si fue un drag (isDragging se resetea en handleDragEnd)
    // o si el scroll vertical fue prevenido (indicando intento de swipe H)
    if (isTransitioning || isDragging || isScrollPrevented.current) {
      // Resetear isScrollPrevented por si acaso para el próximo click
      isScrollPrevented.current = false
      return
    }
    setSelectedMember(item);
    setTimeout(() => setShowModal(true), 10);
  }
  const handleCloseModal = () => {
    setShowModal(false)
    setTimeout(() => setSelectedMember(null), 300)
  }

  // --- Lógica de Drag/Swipe (con Scroll Lock) ---
  const getPositionX = (e: React.MouseEvent | React.TouchEvent): number => {
    return 'touches' in e ? e.touches[0].clientX : e.clientX
  }
  const getPositionY = (e: React.MouseEvent | React.TouchEvent): number => {
    return 'touches' in e ? e.touches[0].clientY : e.clientY
  }

  const handleDragStart = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (isTransitioning) return
      setStartPos(getPositionX(e))
      startY.current = getPositionY(e) // Guardar Y inicial
      setIsDragging(true) // Marcar como que el usuario ha interactuado
      directionLock.current = null // Resetear bloqueo de dirección
      isScrollPrevented.current = false // Resetear flag de prevención
      if (trackRef.current) trackRef.current.style.transition = 'none' // Quitar transición CSS
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current)
    },
    [isTransitioning]
  )

  const handleDragMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDragging || isTransitioning) return // Solo si está arrastrando activamente

      const currentX = getPositionX(e)
      const currentY = getPositionY(e)
      const diffX = currentX - startPos
      const diffY = currentY - startY.current

      // Decidir y bloquear la dirección en el primer movimiento significativo
      if (directionLock.current === null) {
        if (
          Math.abs(diffX) > SCROLL_LOCK_THRESHOLD ||
          Math.abs(diffY) > SCROLL_LOCK_THRESHOLD
        ) {
          if (Math.abs(diffX) > Math.abs(diffY)) {
            directionLock.current = 'horizontal'
          } else {
            directionLock.current = 'vertical'
          }
        } else {
          // No moverse aún si el gesto es muy pequeño
          return
        }
      }

      // Si el movimiento es horizontal, MUEVE el carrusel y PREVIENE el scroll del navegador
      if (directionLock.current === 'horizontal') {
        // Solo prevenir en eventos táctiles para evitar problemas con scroll normal del ratón
        if ('touches' in e) {
          e.preventDefault()
          isScrollPrevented.current = true // Marcar que prevenimos scroll
        }

        const trackWidth = trackRef.current?.offsetWidth ?? window.innerWidth
        const translatePercentDelta = (diffX / trackWidth) * 100
        const visualTranslate = currentTranslate + translatePercentDelta

        animationFrameRef.current = requestAnimationFrame(() => {
          if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${visualTranslate}%)`
          }
        })
      }
      // Si es vertical, no hacemos nada aquí, permitimos el scroll normal.
    },
    [isDragging, isTransitioning, startPos, currentTranslate]
  )

  const handleDragEnd = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      const wasDragging = isDragging
      const lockedDirection = directionLock.current

      // Limpiar estados de drag inmediatamente
      setIsDragging(false)
      setStartPos(0)
      startY.current = 0
      directionLock.current = null
      // No resetear isScrollPrevented aquí, se resetea en el click o al iniciar nuevo drag

      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current)

      // Solo procesar el final si estaba realmente arrastrando y no en transición
      if (!isTransitioning && wasDragging) {
        const currentX =
          'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX
        // Recalcular diffX basado en startPos (que es state)
        const diffX = currentX - startPos

        // Si el gesto fue bloqueado como horizontal
        if (lockedDirection === 'horizontal') {
          if (Math.abs(diffX) > SWIPE_THRESHOLD) {
            // Calcular slides a mover
            let slidePixelWidth = 0
            if (isFixedWidthMode) slidePixelWidth = MOBILE_FIXED_WIDTH_PX
            else {
              const viewportElement = trackRef.current?.parentElement
              const viewportWidth = viewportElement?.offsetWidth
              if (viewportWidth && visibleSlides > 0)
                slidePixelWidth = viewportWidth / visibleSlides
            }
            if (slidePixelWidth > 0) {
              let slidesToMove = Math.round(Math.abs(diffX) / slidePixelWidth)
              slidesToMove = Math.max(1, slidesToMove)
              const targetIndex =
                diffX < 0
                  ? currentIndex + slidesToMove
                  : currentIndex - slidesToMove
              goTo(targetIndex) // Mover con animación
            } else {
              // Fallback
              if (diffX < 0) {
                goToNext()
              } else {
                goToPrev()
              }
            }
          } else {
            // No fue swipe H válido, volver a la posición actual con animación
            setPositionByIndex(currentIndex, true)
          }
        } else {
          // Si fue vertical o muy corto, asegurar que vuelve a su posición si se movió un poco H accidentalmente
          if (
            trackRef.current &&
            Math.abs(diffX) > 0 &&
            Math.abs(diffX) <= SWIPE_THRESHOLD
          ) {
            setPositionByIndex(currentIndex, true)
          }
        }
      }
    },
    [
      isDragging,
      isTransitioning,
      startPos,
      currentIndex,
      visibleSlides,
      isFixedWidthMode,
      goTo,
      goToNext,
      goToPrev,
      setPositionByIndex,
    ]
  )

  // --- Renderizado ---
  const showArrows =
    originalItemCount > 0 && visibleSlides === slidesPerViewConfig.lg

  return (
    <div className="w-full max-w-xl-content my-0 mx-auto px-4 md:px-5 xl:px-0 relative">
      <div
        className={`overflow-hidden ${isFixedWidthMode ? 'cursor-grab active:cursor-grabbing' : ''}`}
        // *** Añadir touch-action: pan-y para ayudar al navegador en táctil ***
        // (Esto le indica que permita el paneo vertical por defecto)
        style={{ touchAction: 'pan-y' }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseMove={handleDragMove}
        onTouchMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd} // Terminar drag si el ratón sale
        onTouchEnd={handleDragEnd}
        onContextMenu={(e) => isDragging && e.preventDefault()}
      >
        <div
          ref={trackRef}
          className="flex !-ml-3 !-mr-4"
          style={{
            transform: `translateX(${currentTranslate}%)`,
            width: isFixedWidthMode
              ? `${totalExtendedItems * MOBILE_FIXED_WIDTH_PX}px`
              : undefined,
            // Transición se añade/quita dinámicamente
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedTeam.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 box-border select-none !px-3"
              style={{
                width: isFixedWidthMode
                  ? `${MOBILE_FIXED_WIDTH_PX}px`
                  : `calc(100% / ${visibleSlides || 1})`,
              }}
            >
              <div
                className="px-3 h-full cursor-pointer"
                onClick={() => handleItemClick(item)} // Llamar a handleItemClick
              >
                <LazyLoadImage
                  src={item.img}
                  alt="Calendar Icon"
                  className="h-64 md:h-80 lg:h-96 object-cover object-center w-full block"
                  effect="blur"
                  draggable="false"
                />
                <div className="!p-4 bg-main-blue text-white text-center min-h-28 flex flex-col justify-center">
                  <p className="!font-[500] !leading-tight">{item.name}</p>
                  <p className="!italic text-sm !leading-tight">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <button
            onClick={goToPrev}
            disabled={isTransitioning}
            className="absolute top-1/2 -translate-y-1/2 left-0 xl:-left-24 z-10 p-2 !bg-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            aria-label="Anterior"
          >
            <GoChevronLeft
              size={32}
              className="text-main-blue lg:w-12 lg:h-12"
            />
          </button>
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="absolute top-1/2 -translate-y-1/2 right-0 xl:-right-24 z-10 p-2 !bg-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            aria-label="Siguiente"
          >
            <GoChevronRight
              size={32}
              className="text-main-blue lg:w-12 lg:h-12"
            />
          </button>
        </>
      )}

      {selectedMember && (
        <Modal isVisible={showModal} member={selectedMember} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default CustomCarousel
