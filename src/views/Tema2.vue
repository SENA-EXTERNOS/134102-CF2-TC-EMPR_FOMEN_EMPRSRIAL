<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Normatividad colombiana: jurídica, tributaria y laboral

    p La normatividad empresarial es el conjunto de reglas que determinan el funcionamiento de la empresa, regula el comportamiento del capital humano y da a conocer reglas explícitas para convivir en un ambiente de respeto y cordialidad para que las tareas de cada persona se puedan desarrollar de la mejor manera posible.

    p.mb-5 Ahora, en cuanto a normatividad colombiana, se debe tener, principalmente como base, una norma. Se trata de la ley 344 de 1996, donde se indican las normas para las empresas con respecto a la racionalización del gasto público. Asimismo, constituye una promoción para la creación del negocio e incluye el artículo 36 que permite formar el Fondo Emprender.

    .row.d-flex.justify-content-center.mb-5
      .col-11
        .cajon.color_cajon_azul.p-4
          p.mb-0 Por otro lado, se encuentra la Ley 2069 de 2020, conocida como Ley de Emprendimiento. Esta es una ley integral diseñada a la medida de todos los emprendedores, sin importar el tamaño de sus negocios.

    p Los documentos tienen características tanto externas como internas. A continuación, se conocerán cada una de ellas:

    .row.d-flex.justify-content-center.mb-5
      .col-11 
      LineaTiempoB.color-primario.mb-5(:datos='datosLineaTiempoB')

    p.mb-5 Asimismo, se puede hablar de otras normas importantes:

    .row.d-flex.justify-content-center.mb-5
      .col-11
        .cajon.color_cajon_azul.px-5.py-4
          .row
            .col-lg-2.col-4
              figure(data-aos='zoom-in')
                img(src='@/assets/template/tema02/t2-i2.svg', alt='alt')
            .col-lg-10.col-8
              h4 Normativa tributaria
              p La Ley 863 de 2003 nos dice que se establecen normas tributarias aduaneras fiscales y de control para estimular el crecimiento económico y el saneamiento de las finanzas públicas.

    .row.d-flex.justify-content-center
      .col-11
        .cajon.color_cajon_rojo.px-5.py-4
          .row
            .col-lg-2.col-4
              figure(data-aos='zoom-in')
                img(src='@/assets/template/tema02/t2-i3.svg', alt='alt')
            .col-lg-10.col-8
              h4 Normativa laboral
              p La Legislación Laboral es una rama del Derecho que impulsa, promueve y reconoce los deberes y derechos que tienen los empleados frente a las diversas situaciones de empleabilidad que se presentan en el país.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Ley 2069 del 31 de diciembre de 2020',
        texto:
          '"Por medio de la cual se impulsa el emprendimiento en Colombia".',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: 'Ley 1955 del 25 de mayo de 2019',
        texto:
          'Por la cual se expide el Plan Nacional de Desarrollo 2018-2022. “Pacto por Colombia, Pacto por la Equidad”.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: 'Ley 1819 de 29 de diciembre 2016',
        texto:
          '"Por medio de la cual se adopta una Reforma Tributaria estructural, se fortalecen los mecanismos para la lucha contra la evasión y la elusión fiscal, y se dictan otras disposiciones".',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: 'Ley 1793 del 7 de julio de 2016',
        texto:
          '"Por medio de la cual se dictan normas en materia de costos de los servicios financieros y se dictan otras disposiciones".',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: 'Ley 1780 del 2 de mayo de 2016',
        texto:
          '"Por medio de la cual se promueve el empleo y el emprendimiento juvenil, se generan medidas para superar barreras de acceso al mercado de trabajo y se dictan otras disposiciones',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: 'Ley 1753 del 9 d junio de 2015',
        texto:
          'Por la cual se expide el Plan Nacional de Desarrollo 2014-2018 “Todos por un nuevo país”.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: 'Ley 1735 del 21 de octubre de 2014',
        texto:
          '“Por la cual se dictan medidas tendientes a promover el acceso a los servicios financieros transaccionales y se dictan otras disposiciones”.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: 'Ley 1676 del 20 de agosto de 2013',
        texto:
          '"Por la cual se promueve el acceso al crédito y se dictan normas sobre garantías mobiliarias".',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: 'Ley 1429 de 29 de diciembre de 2010',
        texto:
          '"Por la cual se expide la ley de formalización y generación de empleo".',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: 'Ley 1314 del 13 de julio de 2009',
        texto:
          '"Por la cual se regulan los principios y normas de contabilidad e información financiera y de aseguramiento de información aceptados en Colombia, se señalan las autoridades competentes, el procedimiento para su expedición y se determinan las entidades responsables de vigilar su cumplimiento".',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: 'Ley 905 del 2 de agosto de 2004',
        texto:
          '"Por medio de la cual se modifica la Ley 590 de 2000 sobre promoción del desarrollo de la micro, pequeña y mediana empresa colombiana y se dictan otras disposiciones".',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: 'Ley 590 del 10 de julio de 2000',
        texto:
          '"Por la cual se dictan disposiciones para promover el desarrollo de las micro, pequeñas y medianas empresas".',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: 'Ley 67 del 26 de diciembre de 1979',
        texto:
          '"Por el cual se dictan las normas generales a las que deberá sujetarse el presidente de la República, para fomentar las exportaciones a través de las sociedades de comercialización internacional y se dictan otras disposiciones para el fomento del comercio exterior”.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
