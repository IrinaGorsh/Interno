<template>  
  <Header />    
  <BlogPage />
  <ProductDetails />
  <Categories />  
  <Footer />
  
</template>

<script>
import Header from './components/Header.vue';
import BlogPage from './components/BlogPage.vue';
import ProductDetails from './components/ProductDetails.vue';
import Categories from './components/Categories.vue';
import Footer from './components/Footer.vue';




export default {
  name: 'App',
  components: {
    Header,
    BlogPage,
    ProductDetails,
    Categories,    
    Footer
    
  }
}
</script>

<style lang="scss">

</style>
