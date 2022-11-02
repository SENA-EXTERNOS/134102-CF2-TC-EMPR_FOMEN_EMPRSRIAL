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
      .col-10.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/introduccion/t0-i1.png")})` }'
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Apreciado aprendiz, sea bienvenido a este momento de aprendizaje orientado al conocimiento en donde toda empresa nace de una idea; una imagen enfocada en un emprendimiento o en una innovación de un producto o la prestación de un servicio, que permita satisfacer las necesidades de las personas, el futuro cliente.

      .col-10
        .cajon.color_cajon_azul.p-4
          p Cuando se tiene un propósito de negocio para desarrollar una actividad empresarial, ya se ha dado el primer paso para crear una empresa; cuando aún no se tiene, lo primero que se debe hacer es buscar, identificar y analizar. Pero la idea difícilmente se constituirá en una empresa si no está apoyada en una actitud personal: la ilusión; las ganas y entusiasmo por crear algo nuevo, por iniciar una aventura que para algunos durará y marcará toda su vida.


    p Para conocer más sobre el componente que desarrollaremos, lo invitamos a ver el siguiente video:
    .col-12.mb-5
      figure
        .video
          iframe(
            width='560',
            height='315',
            src='https://www.youtube.com/embed/2L91WMqw96A',
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
