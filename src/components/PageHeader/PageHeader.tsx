import React from 'react'

export interface PageHeaderProps {
  bg: string
  text: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ bg, text }) => {
  return (
    <div
      className="h-[180px] lg:h-[350px]  relative bg-cover bg-center lg:!py-18"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Capa de overlay */}
      <div className="absolute inset-0 bg-[#000639]/80"></div>
      {/* Contenido centrado */}
      <div className="relative z-1 flex items-center justify-center h-full lg:items-end lg:justify-start md:!mx-8 lg:!max-w-xl-content 2xl:!mx-auto">
        <h1 className="text-white font-roboto-slab !font-bold !text-xl lg:!text-5xl">
          {text}
        </h1>
      </div>
    </div>
  )
}

export default PageHeader
