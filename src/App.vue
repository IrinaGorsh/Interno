<template>  
  <Header />  
  <router-view />  
  <!--<BlogPage />-->
  <!--<ProductDetails />-->
  <!--<Categories /> -->
  <!--<ProjectDetails />-->   
  <Footer />
  
</template>

<script>
import Header from './components/Header.vue';
//import BlogPage from './components/BlogPage.vue';
//import ProductDetails from './components/ProductDetails.vue';
//import Categories from './components/Categories.vue';
//import ProjectDetails from './components/ProjectDetails.vue';
import Footer from './components/Footer.vue';




export default {
  name: 'App',
  components: {
    Header,
    //BlogPage,
    //ProductDetails,
    //Categories,  
    //ProjectDetails,      
    Footer
    
  }
}
</script>

<style lang="scss">

</style>
