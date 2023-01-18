<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Empresa

    p.mb-5 Antes de revisar los diferentes procesos que hacen parte de la creación de una empresa, se debe entender el significado de empresa y la importancia del emprendimiento.
      br
      br
      | A continuación, podrá revisar estos conceptos:

    .tarjeta.tarjeta--morado.p-5.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-6.mb-4.mb-md-0
            p En un sentido general, la empresa es la más común y constante actividad organizada por el ser humano, la cual, involucra un conjunto de trabajo diario, labor común, esfuerzo personal o colectivo e inversiones para lograr un fin determinado (PromoNegocios).
            p Ricardo Romero define la empresa como: “el organismo formado por personas, bienes materiales, aspiraciones y realizaciones comunes para dar satisfacciones a su clientela” (p.9).

          .col-md-6
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema01/t1-i1.png',
                alt='Texto que describa la imagen'
              )
        .row
          .col-md-6.mb-4.mb-md-0
            p La importancia del emprendimiento en Colombia, radica en la capacidad que tienen las PYMES para generar empleo y ser un motor para la economía nacional; prueba de ello es que el 80 % del empleo nuevo en Colombia es generado por el 10 % de los nuevos proyectos de emprendimiento, en muchos de los casos PYMES.

          .col-md-6
            figure(data-aos='zoom-in')
              img(
                src='@/assets/template/tema01/t1-i2.png',
                alt='Texto que describa la imagen'
              )

    .row.d-flex.justify-content-center.mb-5
      .col-11
        .cajon.color_cajon_rojo.p-4
          p.mb-0 Sin embargo, se debe entender que existen diferentes tipos de empresas. Por ejemplo, según la actividad existen tres (3) grandes y principales categorías: #[b la actividad económica, el propósito lucrativo y su conformación legal]. De acuerdo con la actividad económica, las empresas se dividen en #[b empresas de servicios, comerciales, e industriales]. Tener muy presente algunos factores importantes que son: su tamaño, su alcance geográfico y el origen de su capital. 

    .row.d-flex.justify-content-center.mb-5
      .col-lg-8.col-12
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema01/t1-i3.jpg', alt='alt')

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Sectores económicos            

    .row.d-flex.justify-content-center.mb-5
      .col-11
        .cajon.color_cajon_azul.p-4
          p.mb-0 La actividad económica del país se divide por sectores económicos. Cada uno de ellos hace parte de una actividad económica cuyos elementos o productos tienen características en común y se diferencian de otras agrupaciones. Su división se realiza de acuerdo con los procesos de producción, es decir, según el servicio que realicen, o del producto que comercialicen.
          
    .row
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-contenido.mb-5 
          .tarjeta.clr-paleYellow.p-4(titulo='Sector agropecuario')
            .row
              .col-lg-6.col-12
                p El sector agropecuario es una de las colectividades más antiguas y de mayor relevancia en la economía. En el mundo rural, comprende aquellas actividades que, en cierta forma, se constituyen como el principal motor económico de este territorio.
                p Este sector ha tenido un crecimiento que se complementa con las condiciones climáticas del país y que le permiten el sustento de la actividad. El gobierno nacional direcciona una gran parte de sus gastos, a la inversión de este sector primario.
              .col-lg-6.col-12
                figure(data-aos='zoom-in')
                  img(
                    src='@/assets/template/tema01/slider01/t1-s1.png',
                    alt='alt'
                  )

          .tarjeta.clr-paleYellow.p-4(titulo='Sector de servicios')
            .row
              .col-lg-6.col-12
                p El sector servicios, también conocido como sector terciario, es uno de los tres principales sectores en los que se dividen las actividades económicas. Se puede definir como el sector que no produce bienes materiales, sino que suministra a la población, con los servicios imprescindibles para satisfacer sus necesidades. Este sector es muy diverso y comprende una amplia gama de actividades: comercio, transporte, comunicaciones, servicios financieros, servicios sociales, educación, sanidad, turismo entre otros.
              .col-lg-6.col-12
                figure(data-aos='zoom-in')
                  img(
                    src='@/assets/template/tema01/slider01/t1-s2.png',
                    alt='alt'
                  )

          .tarjeta.clr-paleYellow.p-4(titulo='Sector industrial')
            .row
              .col-lg-6.col-12
                p Este es el segundo sector de la economía; es el encargado de transformar la materia prima, que proviene del primer sector, para convertirla en productos terminados y destinados al sector terciario.
                p Es uno de los más importantes en la economía y el desarrollo de cualquier país, debido a que está conformado por el sector que produce, fabrica y elabora los bienes que requieren todos los consumidores para satisfacer sus necesidades.
              .col-lg-6.col-12
                figure(data-aos='zoom-in')
                  img(
                    src='@/assets/template/tema01/slider01/t1-s3.png',
                    alt='alt'
                  ) 

          .tarjeta.clr-paleYellow.p-4(titulo='Sector transporte')
            .row
              .col-lg-6.col-12
                p El sector transporte es muy importante dentro de toda economía, porque permite conectar las distintas actividades sociales y económicas de una sociedad y su comportamiento es directamente proporcional al sector económico del país; es la herramienta que permite destinar los productos al alcance del consumidor, sea en el territorio nacional o en el extranjero.
                p Influye, para que el comercio se pueda desarrollar de la mejor manera, porque es fundamental para la movilización de carga o mercancía por vía terrestre, marítima y aérea y, por esa razón, el gobierno nacional invierte en los proyectos de infraestructura vial.
              .col-lg-6.col-12
                figure(data-aos='zoom-in')
                  img(
                    src='@/assets/template/tema01/slider01/t1-s4.png',
                    alt='alt'
                  ) 

          .tarjeta.clr-paleYellow.p-4(titulo='Sector de comercio')
            .row
              .col-lg-6.col-12
                p El sector comercial es uno de los sectores terciarios de la economía nacional, abarca las actividades de compra y venta de bienes y servicios. Es bastante diferente en cuanto a tamaño, niveles de producción, niveles de ventas, entre otros indicadores económicos.
                p El comercio es una actividad socioeconómica que se basa en la compra y venta de bienes, sea para usarlos, para venderlos, o para transformarlos. Es el cambio o transacción de algo, a cambio de otra cosa de igual valor.
              .col-lg-6.col-12
                figure(data-aos='zoom-in')
                  img(
                    src='@/assets/template/tema01/slider01/t1-s5.png',
                    alt='alt'
                  ) 

          .tarjeta.clr-paleYellow.p-4(titulo='Sector financiero')
            .row
              .col-lg-6.col-12
                p El sector financiero es un sector económico formado por el conjunto de entidades que ofrecen servicios financieros. Se encarga de todo lo relacionado con los flujos de dinero: ofrecer préstamos personales, canalizar el ahorro, ofrecer servicios relacionados con la bolsa de valores, los seguros, las hipotecas, etc.
                p Un sistema financiero fuerte, impulsa el desarrollo económico de un país, porque permite la inversión de capital hacia actividades productivas, como la construcción, la industria, tecnología y la ampliación de los mercados.
              .col-lg-6.col-12
                figure(data-aos='zoom-in')
                  img(
                    src='@/assets/template/tema01/slider01/t1-s6.png',
                    alt='alt'
                  ) 

          .tarjeta.clr-paleYellow.p-4(titulo='Sector de la construcción')
            .row
              .col-lg-6.col-12
                p El sector de la construcción incluye a cualquier persona natural o jurídica que tenga como objetivo, construir o ayudar en la construcción de cualquier obra donde empresas pertenecientes a la industria de la construcción realicen actividades.
                p La industria de la construcción reúne únicamente a quienes producen las obras, mientras que el sector también considera a los que ayudan con las actividades.
              .col-lg-6.col-12
                figure(data-aos='zoom-in')
                  img(
                    src='@/assets/template/tema01/slider01/t1-s7.png',
                    alt='alt'
                  ) 

          .tarjeta.clr-paleYellow.p-4(titulo='Sector minero energético')
            .row
              .col-lg-6.col-12
                p Este sector corresponde a las actividades básicas de la economía, fundamentadas en el beneficio de las energías y de los recursos naturales no renovables.
                p El sector minero energético es un actor decisivo para la economía mundial y, por supuesto, para Colombia y tiene incidencia sobre todos los colombianos, con una matriz de energía variada y con alternativas que garantizan la seguridad energética y su abastecimiento a todos los hogares.
              .col-lg-6.col-12
                figure(data-aos='zoom-in')
                  img(
                    src='@/assets/template/tema01/slider01/t1-s8.png',
                    alt='alt'
                  ) 

          .tarjeta.clr-paleYellow.p-4(titulo='Sector de comunicaciones')
            .row
              .col-lg-6.col-12
                p La industria de la comunicación incluye un conjunto de empresas que participan en el mercado, ofertando contenidos demandados por variados públicos y utilizando ciertos medios tecnológicos.
                p Este sector económico agrupa a las empresas que se dedican a las comunicaciones desde diferentes frentes: publicidad, telefonía fija y celular, editoriales, medios impresos, televisivos, cinematográficos o digitales, entre otros.
              .col-lg-6.col-12
                figure(data-aos='zoom-in')
                  img(
                    src='@/assets/template/tema01/slider01/t1-s9.png',
                    alt='alt'
                  ) 

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Trámites de constitución

    p Luego de entender el concepto de empresa y algunas de las clasificaciones existentes, en el video que se presenta a continuación, podrá conocer algunos principios fundamentales relacionados con los trámites de constitución de una empresa.

    .col-12
      figure(data-aos='zoom-in')
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
  name: 'Tema1',
  components: {},
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
