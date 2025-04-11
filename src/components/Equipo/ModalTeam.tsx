import { useEffect } from 'react'
import { TeamItem } from './Equipo'
import cancel from '../../assets/cancel.svg'

const Modal: React.FC<{
  member: TeamItem | null
  onClose: () => void
  isVisible: boolean
}> = ({ member, onClose, isVisible }) => {
  // const [visible, setVisible] = useState(false)

  // useEffect(() => {
  //   if (member) {
  //     setVisible(true)
  //   } else {
  //     setTimeout(() => setVisible(false), 10)
  //   }
  // }, [member])

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isVisible])

  // if (!member) return null

  useEffect(() => {}, [isVisible])

  return (
    <div
      className={`fixed inset-0 bg-[#091242]/60 z-10 flex items-center justify-center transition-opacity duration-500 ease-in-out modal-container`}
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-278 relative transition-transform duration-300 transform scale-95 !h-[calc(100vh-82px)] sm:!h-fit overflow-auto translate-y-7"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 cursor-pointer"
          src={cancel}
        />
        <div className="!px-3 !pt-12 !py-6 sm:!p-12 gap-3 flex flex-col lg:flex-row lg:gap-6 !z-9999999999">
          <div className="!mx-auto aspect-[3/4] md:min-w-[285px] overflow-hidden">
            <img
              src={member?.img}
              alt={member?.name}
              className="w-full h-full object-cover max-w-[260px]"
            />
          </div>

          <div>
            <h2 className="font-roboto-slab !text-xl !font-bold text-main-blue">
              {member?.name}
            </h2>
            <p className="text-[#3A4168] !italic">{member?.role}</p>

            <div className="!mt-4 text-main-lightgray !leading-5">
              {member?.desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
