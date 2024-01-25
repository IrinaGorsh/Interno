<template>  
<section class="intro">
        <div class="banner container">
            <div class="banner__wrapper">
                <div class="banner__info">
                    <h1 class="banner__heading">Let Your Home Be Unique</h1>
                    <p class="banner__desc">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
                    <button class="start__btn"> <div class="start__btn__txt">Get Started<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none" >
                        <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                      </svg></div></button>
                    </div>  
            </div>          
             
        </div>
    </section> 
    
  <BlogPage />
</template>

<script>
import BlogPage from './components/BlogPage.vue';



export default {
  name: 'App',
  components: {
    BlogPage
  }
}
</script>

<style lang="scss">

</style>
