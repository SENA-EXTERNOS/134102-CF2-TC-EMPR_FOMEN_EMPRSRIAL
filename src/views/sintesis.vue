<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    //- .row 
    //-   .col-lg-10.col-12 
    //-     .titulo-sexto.color-institucional.mb-5
    //-       h5 Gestión del desarrollo administrativo e innovación
    //-       br
    //-       span Síntesis: Introducción a la administración
    //-   .col-lg-2.d-none.d-lg-block
    //-     img(src="@/assets/template/logo-sena-naranja.svg", height="60"  alt="alt")
        
    p.mb-5 En el siguiente mapa conceptual podrá encontrar un resumen de los contenidos temáticos del componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-lg-3
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis 

</template>

<script>
export default {
  name: 'Sintesis',
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
