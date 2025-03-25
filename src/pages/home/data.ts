import areaEspecialidadImg from '../../assets/Home/areaEspecialidadImg.png';

export const dataHome = {
  ES: {
    hero: {
      title: 'Es un atributo del instituto',
      description:
        'Por tanto, seleccionamos con rigurosidad las áreas de trabajo en las que contamos con una ventaja comparativa para lograr el impacto esperado.',
      callToAction: 'Conoce más de nosotros',
      callToActionHref: '/about',
    },
    comercioInternacional: {
      title: 'Facilitamos el',
      titleTwo: 'Comercio Internacional',
      description:
        'Promovemos procesos eficientes, tecnología de vanguardia y capacitación para simplificar el comercio exterior y reducir costos empresariales.',
      items: [
        'Investigación, consultoría y capacitación en comercio exterior.',
        'Promoción del comercio sin papeles y uso de tecnología avanzada.',
        'Capacitación al sector público en gestión de riesgos y control posterior.',
        'Alineación con estándares internacionales para una integración eficiente.',
      ],
    },
    areaEspecialidad: {
      title: 'Nuestras Áreas de Especialidad',
      description:
        'Nos enfocamos en áreas estratégicas donde contamos con ventajas comparativas, asegurando resultados de alto impacto',
      items: [
        {
          description: 'Mejora de procedimientos y ventanilla única',
          image: areaEspecialidadImg,
        },
        {
          description: 'Servicio aduanero y proceso logístico',
          image: areaEspecialidadImg,
        },
        {
          description: 'Barreras no arancelarias y sistema de la calidad',
          image: areaEspecialidadImg,
        },
        {
          description: 'Zona económicas especiales',
          image: areaEspecialidadImg,
        },
      ],
    },
    servicioCalidad: {
      title: 'Servicio de Calidad para Empresas y Entidades Públicas',
      description: 'Ofrecemos soluciones diseñadas con altos estándares y metodologías basadas en las mejores prácticas internacionales.',
      items: [
        'Consultoría IFIX',
        'Análisis e Investigación',
        'Capacitación'
      ],
    },
    conectaConNosotros: {
      title: 'Conecta con nosotros',
      description: 'Descubre nuestros eventos y actividades, espacios diseñados para inspirar, aprender y crecer juntos.',
      items: [
        {
          title: 'Seminario Comercio Exterior y Competitividad – COMEX',
          description: 'El martes 13 de junio, nuestro Director Ejecutivo, participó como moderador en el...',
          image: areaEspecialidadImg,
          date: '13 Junio',
        },
        {
          title: 'Culminación del proyecto “Mejora de la eficiencia de la...',
          description: 'En Marzo del 2023, concluye un importante proyecto para mejorar el control sanitario en el...',
          image: areaEspecialidadImg,
          date: '31 Marzo',
        },
        {
          title: 'Seminario E-commerce, Comercio Internacional y Adu...',
          description: 'Alfredo Lindley-Russo, el Vicepresidente de IFCOM, participó como ponente en el evento E...',
          image: areaEspecialidadImg,
          date: '24 Enero',
        },
      ],
      callToAction: {
        text: 'Ver más eventos',
        href: '/events',
      },
      
    }
  },
  EN: {
    hero: {
      title: 'It is an attribute of the institute',
      description:
        'Thats why, we select with rigor the areas of work in which we have a comparative advantage to achieve the expected impact.',
      callToAction: 'Learn more about us',
      callToActionHref: '/about',
    },
    comercioInternacional: {
      title: 'We facilitate',
      titleTwo: 'International Trade',
      description:
        'We promote efficient processes, cutting-edge technology, and training to simplify foreign trade and reduce business costs.',
      items: [
        'Research, consulting, and training in foreign trade.',
        'Promotion of paperless trade and use of advanced technology.',
        'Training for the public sector in risk management and post-control.',
        'Alignment with international standards for efficient integration.',
      ],
    },
    areaEspecialidad: {
      title: 'Our Areas of Expertise',
      description:
        'We focus on strategic areas where we have comparative advantages, ensuring high-impact results.',
      items: [
        {
          description: 'Improvement of procedures and single window',
          image: areaEspecialidadImg,
        },
        {
          description: 'Customs service and logistics process',
          image: areaEspecialidadImg,
        },
        {
          description: 'Non-tariff barriers and quality system',
          image: areaEspecialidadImg,
        },
        {
          description: 'Special economic zones',
          image: areaEspecialidadImg,
        },
      ],
    },
    servicioCalidad: {
      title: 'Quality Service for Companies and Public Entities',
      description: 'We offer solutions designed with high standards and methodologies based on best international practices.',
      items: [
        'IFIX Consulting',
        'Analysis and Research',
        'Training'
      ],
    },
    conectaConNosotros: {
      title: 'Connect with us',
      description: 'Discover our events and activities, spaces designed to inspire, learn, and grow together.',
      items: [
        {
          title: 'Seminar on Foreign Trade and Competitiveness – COMEX',
          description: 'On Tuesday, June 13, our Executive Director participated as a moderator in the...',
          image: areaEspecialidadImg,
          date: 'June 13',
        },
        {
          title: 'Completion of the project "Improving the efficiency of the...',
          description: 'In March 2023, an important project to improve sanitary control in the...',
          image: areaEspecialidadImg,
          date: 'March 31',
        },
        {
          title: 'Seminar E-commerce, International Trade and Customs...',
          description: 'Alfredo Lindley-Russo, Vice President of IFCOM, participated as a speaker at the E...',
          image: areaEspecialidadImg,
          date: 'January 24',
        },
      ],
      callToAction: {
        text: 'See more events',
        href: '/events',
      },
      
    }
  },
}
