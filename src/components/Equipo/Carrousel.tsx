import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { TeamItem } from './Equipo'
import Modal from './ModalTeam'

interface ArrowProps {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

const SampleNextArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '-5%', zIndex: 1 }}
      onClick={onClick}
    >
      <GoChevronRight size={24} className="text-main-blue text-lg w-8 h-8" />
      <style>{`.slick-next::before { content: ''; display: none !important; }`}</style>
    </div>
  )
}

const SamplePrevArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '-5%', zIndex: 1 }}
      onClick={onClick}
    >
      <GoChevronLeft size={24} className="text-main-blue text-lg w-8 h-8" />
      <style>{`.slick-prev::before { content: ''; display: none !important; }`}</style>
    </div>
  )
}

interface CarouselProps {
  team: TeamItem[]
}

const Carousel: React.FC<CarouselProps> = ({ team }) => {
  const [selectedMember, setSelectedMember] = useState<TeamItem | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    mobileFirst: true,
    speed: 500,
    slidesPerRow: 1,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          variableWidth: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="w-full max-w-xl-content my-0 lg:mx-auto !pl-1 md:!pl-5 lg:!px-5 xl:!px-0 !mx-auto max-h-[335px] lg:max-h-[485px]">
      <div className="lg:!-mx-3">
        <Slider {...settings}>
          {team.map((item, index) => (
            <div
              key={index}
              className="!px-3 !w-60 !box-content xl:!w-full lg:!box-border"
              onClick={() => setSelectedMember(item)}
            >
              <img
                src={item.img}
                alt={`Slide ${item.img}`}
                className="h-65 object-cover object-center xl:h-90 cursor-pointer"
              />
              <div className="!p-4 bg-main-blue text-white text-center h-20 cursor-pointer">
                <p className="!font-bold">{item.name}</p>
                <p className="!italic">{item.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Modal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  )
}

export default Carousel
