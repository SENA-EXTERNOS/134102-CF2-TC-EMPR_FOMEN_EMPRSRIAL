<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.d-flex.justify-content-center.mb-5 
      .col-10.mb-3
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/introduccion/t0-i1.png")})` }'
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, que está orientado al conocimiento en donde toda empresa nace de una idea; una imagen enfocada en un emprendimiento o en una innovación de un producto o la prestación de un servicio, que permita satisfacer las necesidades de las personas, el futuro cliente. Cuando se tiene un propósito de negocio para desarrollar una actividad empresarial, ya se ha dado el primer paso para crear una empresa; cuando aún no se tiene, lo primero que se debe hacer es buscar, identificar y analizar. Pero la idea difícilmente se constituirá en una empresa si no está apoyada en una actitud personal: la ilusión; las ganas y entusiasmo por crear algo nuevo, por iniciar una aventura que para algunos durará y marcará toda su vida.


    p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .col-12.mb-5
      figure
        .video
          iframe(
            width='560',
            height='315',
            src='https://www.youtube.com/embed/bTAf54i2l4c',
            title='YouTube video player',
            frameborder='0',
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowfullscreen
          ) 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
