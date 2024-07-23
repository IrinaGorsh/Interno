<template>
  <section class="blog__banner">
        <div class="blog__banner titled container">

        </div>

    </section>
    <section class="proj_det">
      <div class="proj_details container">  
        <div v-for="detail in details" :key="detail.id" class="proj_details_box">
          <h1 class="proj_details_title">{{ detail.title }}</h1>
          <p class="proj_details_text">{{ detail.description }}</p>
        </div>      
        

      <div class="slider_box">
        <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :zoom="true"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="@/assets/images/Banner.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="@/assets/images/Slider1.jpg" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="@/assets/images/Kitchen2.jpg" />
      </div> </swiper-slide>
  </swiper>
      </div>
      
      
      </div>
    </section>  
      
  </template>
  
  <script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  import 'swiper/css/zoom';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import { Zoom, Navigation, Pagination } from 'swiper/modules';
      export default {
        components: {
      Swiper,
      SwiperSlide,
    },
        
         
    computed: {
      ...mapState(['details'])
      
    },
  
    methods: {
      ...mapMutations(['setDetails' ]),
      ...mapActions(['getDetails'])
     
    },

    setup() {
      return {
        modules: [Zoom, Navigation, Pagination],
      };
    },
  
    mounted: function() {
        this.getDetails() 
    },
  
    
  
   
      }
  </script>
  
  <style lang="scss" scoped>
  
  </style>