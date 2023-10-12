<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Economía solidaria

    .row.mb-1
      .col-md-5
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema04/t4-i1.jpg') 
      .col-md-7
        .bloque-texto-f.pt-4.px-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.text-regular.bloque-texto-f__texto La economía solidaria o economía de solidaridad, se refiere a una búsqueda teórica y práctica de formas alternativas para hacer economía, basadas en la solidaridad y el trabajo. El principio o fundamento de la economía de solidaridad es que la introducción de niveles crecientes y cualitativamente superiores de solidaridad en las actividades, organizaciones e instituciones económicas, tanto a nivel de las empresas como en los mercados y en las políticas públicas, incrementa la eficiencia micro y macroeconómica, a la par con generar un conjunto de beneficios sociales y culturales que favorecen a toda la sociedad.
          p (Razeto, s.f.)

    p.mb-5 El sector real de la economía solidaria está conformado por las siguientes organizaciones:

    .tarjeta.tarjeta--morado.p-5.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Asociaciones mutuales y fondos de empleados
            p De conformidad con el artículo 143 del Decreto 2150 de 1995, las entidades de naturaleza cooperativa, los fondos de empleados y las asociaciones mutuales, así como sus organismos de integración y las instituciones auxiliares del cooperativismo, son Entidades Sin Ánimo de Lucro (ESAL) y se constituirán por escritura pública o por documento privado.

          .col-md-6
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema04/t4-i2.png',
                alt='Texto que describa la imagen'
              )
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Instituciones auxiliares de la economía solidaria
            p Asociaciones mutuales, fondos de empleados, instituciones auxiliares de la economía solidaria, cooperativas, cooperativas con sección de aporte y crédito, cooperativas multiactivas e integrales sin sección de ahorro y crédito, cooperativas especializadas en actividades diferentes a la financiera, precooperativas.

          .col-md-6
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema04/t4-i3.png',
                alt='Texto que describa la imagen'
              ) 
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Cooperativas
            p Son empresas asociativas sin ánimo de lucro en las cuáles los trabajadores o los usuarios son simultáneamente los aportantes y los gestores de la empresa. Son creadas con el objeto de producir o distribuir conjunta y eficientemente, bienes o servicios para satisfacer las necesidades de sus asociados y de la comunidad en general.

          .col-md-6
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema04/t4-i4.png',
                alt='Texto que describa la imagen'
              ) 
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Cooperativas con sección de aporte y crédito
            p Son cooperativas de ahorro y crédito, organismos cooperativos especializados cuya función principal consiste en adelantar actividad financiera exclusivamente con sus asociados. También lo son aquellas cooperativas multiactivas o integrales, con sección de ahorro y crédito.

          .col-md-6
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema04/t4-i5.png',
                alt='Texto que describa la imagen'
              ) 
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Cooperativas multiactivas e integrales sin sección de ahorro y crédito
            p Las cooperativas multiactivas o integrales podrán adelantar la actividad financiera, exclusivamente con sus asociados, mediante secciones especializadas, bajo circunstancias especiales, y cuando las condiciones sociales y económicas lo justifiquen, previa autorización del organismo encargado de su control.

          .col-md-6
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema04/t4-i6.png',
                alt='Texto que describa la imagen'
              ) 
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Cooperativas especializadas en actividades diferentes a la financiera
            p Son cooperativas especializadas las que se organizan para atender una necesidad específica, correspondiente a una sola rama de actividad económica, social o cultural.

          .col-md-6
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema04/t4-i7.png',
                alt='Texto que describa la imagen'
              ) 
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Precooperativas administraciones públicas cooperativas
            p Empresas de servicio consideradas como formas asociativas del sector cooperativo, que se caracterizan por ser de iniciativa de la nación, los departamentos, las intendencias, las comisarías y los municipios o distritos municipales, mediante leyes, ordenanzas o acuerdos.

          .col-md-6
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema04/t4-i8.png',
                alt='Texto que describa la imagen'
              ) 
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Cooperativas de trabajo asociado
            p Una cooperativa de trabajo asociado es una entidad sin ánimo de lucro constituida por personas que se asocian aportando su fuerza de trabajo. Las cooperativas de trabajo tienen como finalidad ofrecer mano de obra a terceros, que es aportada por los trabajadores asociados.

          .col-md-6
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema04/t4-i9.png',
                alt='Texto que describa la imagen'
              ) 


    .row.d-flex.justify-content-center.mb-5 
      .col-11.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema04/t4-i11.svg")})` }'
          )
          .bloque-texto-g__texto.p-4
            ul
              li 
                i.fas.fa-check.color_check_t3
                | &nbsp;
                | Mínimo 20 asociados.
              br 
              li 
                i.fas.fa-check.color_check_t3
                | &nbsp;
                | Constancia del representante legal frente al cumplimiento de las normas especiales del cooperativismo.
              br 
              li 
                i.fas.fa-check.color_check_t3
                | &nbsp;
                | El documento de constitución debe estar suscrito por todos los otorgantes o constituyentes.
              br 
              li 
                i.fas.fa-check.color_check_t3
                | &nbsp;
                | Su vigencia es indefinida.
              br 
              li 
                i.fas.fa-check.color_check_t3
                | &nbsp;
                | Certificado de acreditación sobre educación solidaria, expedido por la Unidad Administrativa-Especial de Organizaciones Solidarias.

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Normativa                 

    p.mb-4 Las entidades de economía solidaria en Colombia, están regidas por una serie de normativas.

    p.mb-5 Conozcamos cada una de ellas:

    .row.d-flex.justify-content-center.mb-5
      .col-lg-8.col-12
        PasosA.color-acento-contenido.mb-5(tipo='n')
          .row
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema04/t4-l1.svg',
                  alt='Texto que describa la imagen'
                )

            .col-md-9.my-5.mb-md-0
              p Constitución de 1991, artículos 26, 38 y 39.

          .row
            .col-md-9.my-5.mb-md-0
              p Ley 79 de 1988. Cooperativas.
              
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema04/t4-l1.svg',
                  alt='Texto que describa la imagen'
                )

          .row
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema04/t4-l1.svg',
                  alt='Texto que describa la imagen'
                )

            .col-md-9.my-5.mb-md-0
              p Decreto 1333 de 1989. Precooperativas.

          .row
            .col-md-9.my-5.mb-md-0
              p Decreto 1480 de 1989. Asociaciones mutuales.
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema04/t4-l1.svg',
                  alt='Texto que describa la imagen'
                )

          .row
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema04/t4-l1.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-9.my-5.mb-md-0
              p Decreto 1481 de 1989 – Mod. Ley 1391 de 2010 Fondos de empleados.

          .row
            .col-md-9.my-5.mb-md-0
              p Decreto 1482 de 1989. F.A. P. Cooperativas.

            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema04/t4-l1.svg',
                  alt='Texto que describa la imagen'
                )

          .row
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema04/t4-l1.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-9.my-5.mb-md-0
              p Ley 454 de 1998.

          .row
            .col-md-9.my-5.mb-md-0
              p Circular 8 del 11 de octubre de 2011.

            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema04/t4-l1.svg',
                  alt='Texto que describa la imagen'
                ) 
          .row
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema04/t4-l1.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-9.my-5.mb-md-0
              p Decreto 2150/95. Artículos 143 a 148
          .row
            .col-md-9.my-5.mb-md-0
              p Decreto 0427 de 1996.

            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema04/t4-l1.svg',
                  alt='Texto que describa la imagen'
                ) 

    .row.d-flex.justify-content-center.mb-5
      .col-11
        .cajon.color_cajon_azul.p-4
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.
          
</template>

<script>
export default {
  name: 'Tema3',
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
