export default {
  global: {
    componenteFormativo: 'Requisitos y trámites de constitución de una empresa',
    descripcionCurso:
      '¿Cuáles son los beneficios de crear empresa? Los tiempos han evolucionado, la sociedad ha cambiado y la economía se mueve de forma diferente a como lo hacía antes; nadie es ajeno a esta transformación, porque son temas que se observan a diario en los medios de comunicación. En el presente componente formativo se estudiará, qué es una empresa, su clasificación, normativas, requisitos y trámites para su constitución.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Empresa',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normatividad colombiana: jurídica, tributaria y laboral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sociedad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Economía solidaria',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Normatividad colombiana: Jurídica, tributaria y laboral',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s.f.). Normatividad. Mipymes.',
      tipo: 'Sitio web',
      link: 'https://www.mipymes.gov.co/normatividad',
    },
    {
      tema: 'Clasificación de empresa',
      referencia: '(Encolombia.com and Clasificación Empresa,(s,f,) #)',
      tipo: 'Sitio web',
      link: 'https://www.mipymes.gov.co/normatividad',
    },
    {
      tema: 'Tipos de sociedades',
      referencia: '(Encolombia.com and Clasificación Empresa,(s,f,) #)',
      tipo: 'Sitio web',
      link:
        'https://www.scotiabankcolpatria.com/educacion-financiera/finanzas-maestras/tipos-de-sociedades',
    },
    {
      tema: 'Empresa',
      referencia: '(promonegocios.net and Definición de Empresa,(s,f,) #)',
      tipo: 'Sitio web',
      link:
        'https://www.promonegocios.net/mercadotecnia/empresa-definicion-concepto.html',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'examen detallado de una cosa para conocer sus características o cualidades, o su estado, y extraer conclusiones y que se realiza separando o considerando por separado, las partes que lo constituyen.',
    },
    {
      termino: 'Competitividad',
      significado: 'capacidad para competir.',
    },
    {
      termino: 'Efectividad',
      significado:
        'la efectividad significa trabajar sobre las cosas “correctas”; es decir, las cosas que aportan valor al negocio y que realmente pueden favorecer a la concreción de los objetivos.',
    },
    {
      termino: 'Estado del arte',
      significado:
        'tipo de investigación documental acerca de la forma en que diferentes autores han tratado un tema específico. En otras palabras, es la búsqueda, lectura y análisis de la bibliografía encontrada, en relación con un tema que se quiere investigar.',
    },
    {
      termino: 'Estrategia',
      significado:
        'es la manera de describir en detalle el cómo o cómo se van hacer las cosas.',
    },
    {
      termino: 'Ingeniería social',
      significado:
        'en el ámbito de la seguridad de la información; la definición de ingeniería social se refiere a conseguir que las personas divulguen datos privados en línea, como datos de acceso o información financiera.',
    },
    {
      termino: 'Innovación',
      significado:
        'herramienta creada por el ingenio humano para mejorar nuestra calidad de vida como especie. Innovación es la introducción de algo nuevo que satisface alguna necesidad y está estrechamente conectada a la ciencia y a la tecnología, siendo la ciencia el conocimiento y la tecnología su práctica.',
    },
    {
      termino: 'Trámite',
      significado:
        'Se define como cualquier solicitud o entrega de información que las personas físicas o morales del sector privado realizan ante una dependencia u organismo descentralizado, ya sea para cumplir una obligación u obtener un beneficio o servicio.',
    },
    {
      termino: 'Organización',
      significado:
        'Es una estructura ordenada donde coexisten e interactúan personas con diversos roles, responsabilidades o cargos que buscan alcanzar un objetivo particular.',
    },
    {
      termino: 'Transacción',
      significado:
        'Es un acuerdo comercial que se lleva a cabo entre dos partes, económicamente hablando es un convenio de compra y venta. Sin duda, una transacción también implica un intercambio de bienes y servicios a cambio del pago de una cantidad monetaria, denominada precio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Razeto, L. (s.f.). <em>¿Qué es la economía solidaria?</em> El portal de la economía solidaria.',
      link:
        'https://www.economiasolidaria.org/recursos/reas-red-de-redes-de-economia-alternativa-y-solidaria-biblioteca-que-es-la-economia-solidaria-por/ ',
    },
    {
      referencia:
        'Romero, R. (s.f.). <em>Marketing</em>. Editora Palmir E.I.R.L.',
      link: '',
    },
    {
      referencia:
        'Thompson, I. (s.f.). <em>Definición de Empresa</em>. PromonegocioS.net. ',
      link:
        'https://www.promonegocios.net/mercadotecnia/empresa-definicion-concepto.html#notas',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
