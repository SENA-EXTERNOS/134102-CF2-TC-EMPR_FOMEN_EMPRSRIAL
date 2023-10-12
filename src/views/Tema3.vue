<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sociedad

    .row.d-flex.justify-content-center.mb-5 
      .col-11.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema03/t3-i1.png")})` }'
          )(data-aos='zoom-in')
          .bloque-texto-g__texto.p-4
            p Si consultamos, buscamos o nos preguntamos ¿qué es sociedad?, encontraremos cómo resultado: la sociedad es un contrato mediante el cual dos o más personas se obligan a hacer un aporte en dinero, en trabajo o en otros bienes apreciables en dinero, con el fin de repartirse entre sí las utilidades obtenidas en la empresa o en la actividad social.

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Clasificación

    p También debemos saber que las sociedades empresariales constituyen una persona jurídica, la cual tiene derechos y responsabilidades. Asimismo, pueden ser representadas judicial y extrajudicialmente.
    br
    p.mb-5 En Colombia, se pueden constituir diferentes tipos de sociedades, tales como:

    .col-lg-12.mb-5
      ImagenInfografica.color-acento-botones.punto_caliente_acento_botones(
        data-aos='zoom-in'
      )
        template(v-slot:imagen)
          figure
            img(src='@/assets/template/tema03/t3-i4.svg')

        .tarjeta.color-acento-botones_black.p-3(
          x='18.4%',
          y='40.4%',
          numero='1'
        )
          h5 1 Sociedad Limitada
          p Teniendo en cuenta las compañías y sus responsabilidades, en la sociedad limitada los socios responderán hasta el monto del capital aportado. En los estatutos podrá estipularse para todos o algunos de los socios, una mayor responsabilidad, prestaciones accesorias o garantías suplementarias, expresándose su naturaleza, cuantía, duración y modalidades.

        .tarjeta.color-acento-botones_black.p-3(x='24%', y='25.3%', numero='2')
          h5 2 Sociedad Anónima
          p Esta sociedad está formada por aportación de un fondo social integrado por accionistas, responsables hasta el monto de sus respectivos aportes. Esta será administrada por gestores temporales y revocables y tiene una denominación seguida de las palabras Sociedad Anónima o de las letras S.A.

        .tarjeta.color-acento-botones_black.p-3(
          x='38.8%',
          y='13.1%',
          numero='3'
        )
          h5 3 Empresa Unipersonal
          p En este caso, el empresario o propietario, tiene la capacidad legal para ejercer el comercio, respondiendo de forma ilimitada, con todo su patrimonio, ante las personas que pudieran verse afectadas por el accionar de la empresa.

        .tarjeta.color-acento-botones_black.p-3(x='54.5%', y='11%', numero='4')
          h5 4 Sociedad Colectiva
          p Es una modalidad de sociedad mercantil en la que varios socios se juntan bajo un nombre colectivo y de forma solidaria, para el desenvolvimiento de una actividad económica.

        .tarjeta.color-acento-botones_black.p-3(x='75%', y='22.6%', numero='5')
          h5 5 Empresa Asociativa de Trabajo
          p Esta asociación tiene como objetivo la producción, comercialización y distribución de bienes básicos de consumo familiar, o la prestación de servicios individuales o conjuntos de sus miembros. Sus asociados aportan su capacidad laboral por tiempo indefinido y algunos, además, aportan alguna destreza tecnológica o el conocimiento necesario para el cumplimiento de los objetivos de la empresa.

        .tarjeta.color-acento-botones_black.p-3(
          x='83.2%',
          y='40.3%',
          numero='6'
        )
          h5 6 Sociedad por Acciones Simplificada S.A.S.
          p Fue creada en la legislación colombiana por la Ley 1258 de 2008. Para efectos tributarios, se rige por las reglas aplicables a las sociedades anónimas. La podrán constituir una o varias personas naturales o jurídicas, quienes serán responsables únicamente hasta por el monto de sus respectivos aportes.

    p.mb-5 También se debe entender que los tipos de sociedades jurídicas nada tienen que ver con el tamaño, la antigüedad o la capacidad financiera de la empresa.

    .row.d-flex.justify-content-center.mb-5
      .col-11
        .cajon.color_cajon_azul.p-4
          p.mb-0 La alternativa que decida llevar a cabo el tipo de sociedad o forma jurídica, será determinante. Por eso, con anterioridad, debe tener en cuenta su capital y la cantidad de socios con los que contará, pues esta decisión condiciona la actividad, los derechos, las obligaciones y las responsabilidades de la empresa.

    p.mb-5 Aunque son dos tipos diferentes de sociedades, las sociedades anónimas y las sociedades limitadas comparten una serie de características comunes, que se pueden resumir de la siguiente manera:

    .row.m-b5
      .row.d-flex.justify-content-center
        SlyderF(columnas='col-lg-6 col-xl-4')(data-aos='zoom-in')
          .tarjeta.p-4.bgr-tema3
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta.bgr-tema3
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema03/slider01/t3-s1.png',
                      alt='AvatarTop'
                    )
                  p.text-center Tienen personería jurídica.

          .tarjeta.p-4.bgr-tema3
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta.bgr-tema3
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta.bgr-tema3
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema03/slider01/t3-s2.png',
                      alt='AvatarTop'
                    )
                  p.text-center Deben designar un representante legal.

          .tarjeta.p-4.bgr-tema3
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta.bgr-tema3
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta.bgr-tema3
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema03/slider01/t3-s3.png',
                      alt='AvatarTop'
                    )
                  p.text-center Ante una deuda que no se puede pagar, la empresa responderá solo con su capital social.

          .tarjeta.p-4.bgr-tema3
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta.bgr-tema3
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema03/slider01/t3-s4.png',
                      alt='AvatarTop'
                    )
                  p.text-center Deben tener una razón social única.

    h3.mb-5.mt-5
      i.fas.fa-square.cac.me-3
      | Trámites de legalización

    .row.mb-3
      .col-md-6
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema03/t3-i2.jpg') 
      .col-md-6.mb-5
        p Las personas naturales y jurídicas que pretendan constituir una sociedad anónima para ofrecer al público planes de autofinanciamiento comercial para la adquisición de bienes o servicios, deben solicitar permiso de funcionamiento a esta Superintendencia.
        br
        p Las Sociedades Administradoras de Planes de Autofinanciamiento Comercial (SAPAC) son sociedades anónimas, cuyo objeto principal y exclusivo está orientado a la administración de los planes provenientes del aporte periódico de dinero, realizado por un grupo de personas llamadas suscriptores. Estos aportes hacen parte de un fondo común, cuyo fin es autofinanciar la adquisición de bienes o servicios y, según la disposición normativa, deben ser consignados en una entidad fiduciaria.

    .row.d-flex.justify-content-center.mb-5
      .col-11
        .cajon.color_cajon_rojo.p-4
          p.mb-0 El funcionamiento de este tipo de sociedades requiere autorización previa de la Superintendencia de Sociedades y, para adquirir ese permiso, los interesados deberán radicar una solicitud en el área de correspondencia de la Entidad, en las Intendencias Regionales o de manera virtual.

    p.mb-5 Para tal fin, las sociedades deben acreditar el cumplimiento de los requisitos que se enuncian a continuación:

    .row.d-flex.justify-content-center.mb-5
      .col-lg-8.col-12
        PasosA.color-acento-contenido.mb-5(tipo='n')
          .row
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l1.svg',
                  alt='Texto que describa la imagen'
                )

            .col-md-9.my-5.mb-md-0
              p Carta de solicitud.

          .row
            .col-md-9.my-5.mb-md-0
              p Estatutos sociales de la empresa.
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l2.svg',
                  alt='Texto que describa la imagen'
                )

          .row
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l3.svg',
                  alt='Texto que describa la imagen'
                )

            .col-md-9.my-5.mb-md-0
              p Origen de los recursos.

          .row
            .col-md-9.my-5.mb-md-0
              p Estados financieros y declaración de renta de los accionistas o asociados.
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l4.svg',
                  alt='Texto que describa la imagen'
                )

          .row
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l5.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-9.my-5.mb-md-0
              p Inversiones de capital.

          .row
            .col-md-9.my-5.mb-md-0
              p Endeudamiento de los otorgantes, y de los potenciales constituyentes, con el sector financiero.

            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l6.svg',
                  alt='Texto que describa la imagen'
                )

          .row
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l7.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-9.my-5.mb-md-0
              p Certificado de existencia y representación legal del accionista o persona jurídica.

          .row
            .col-md-9.my-5.mb-md-0
              p Capacidad legal para realizar la inversión por parte del accionista o persona jurídica.

            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l8.svg',
                  alt='Texto que describa la imagen'
                )

          .row
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l9.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-9.my-5.mb-md-0
              p Hoja de vida de accionistas o asociados, y administradores.

          .row
            .col-md-9.my-5.mb-md-0
              p Autorización para investigar antecedentes.

            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l10.svg',
                  alt='Texto que describa la imagen'
                )

          .row
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l11.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-9.my-5.mb-md-0
              p Estudio de factibilidad.

          .row
            .col-md-9.my-5.mb-md-0
              p Descripción de los planes de autofinanciamiento.

            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l12.svg',
                  alt='Texto que describa la imagen'
                )

          .row
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l13.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-9.my-5.mb-md-0
              p Conglomerado.

          .row
            .col-md-9.my-5.mb-md-0
              p Proyecto de aviso de intención.

            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l14.svg',
                  alt='Texto que describa la imagen'
                )

          .row
            .col-md-3
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema03/lineatiempo/t3-l15.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-9.my-5.mb-md-0
              p Información adicional.
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
