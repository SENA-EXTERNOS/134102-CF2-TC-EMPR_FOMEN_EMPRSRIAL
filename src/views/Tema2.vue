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
          p Por otro lado, se encuentra la Ley 2069 de 2020, conocida como Ley de Emprendimiento. Esta es una ley integral diseñada a la medida de todos los emprendedores, sin importar el tamaño de sus negocios.

    p Los documentos tienen características tanto externas como internas. A continuación, se conocerán cada una de ellas:

    .row.d-flex.justify-content-center.mb-5
      .col-11
        figure
          img(src='@/assets/template/tema02/t2-i1.jpg', alt='alt')

    p.mb-5 Asimismo, se puede hablar de otras normas importantes:

    .row.d-flex.justify-content-center.mb-5
      .col-11
        .cajon.color_cajon_azul.px-5.py-4
          .row
            .col-lg-2.col-4
              figure
                img(src='@/assets/template/tema02/t2-i2.svg', alt='alt')
            .col-lg-10.col-8
              h4 Normativa tributaria
              p La Ley 863 de 2003 nos dice que se establecen normas tributarias aduaneras fiscales y de control para estimular el crecimiento económico y el saneamiento de las finanzas públicas.

    .row.d-flex.justify-content-center
      .col-11
        .cajon.color_cajon_rojo.px-5.py-4
          .row
            .col-lg-2.col-4
              figure
                img(src='@/assets/template/tema02/t2-i3.svg', alt='alt')
            .col-lg-10.col-8
              h4 Normativa laboral
              p La Legislación Laboral es una rama del Derecho que impulsa, promueve y reconoce los deberes y derechos que tienen los empleados frente a las diversas situaciones de empleabilidad que se presentan en el país.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
