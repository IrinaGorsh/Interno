<template>
    <div>
      <!--<button @click="getDetails">Details</button>-->
      <div v-for="detail in details" :key="detail.id">
          <h1>{{ detail.title }}</h1>
          <p>{{ detail.description }}</p>       
          
  
      </div>
      
    </div>
      
  </template>
  
  <script>
  import { mapState, mapMutations, mapActions } from 'vuex';
      export default {
  
        
         
    computed: {
      ...mapState(['details'])
      
    },
  
    methods: {
      ...mapMutations(['setDetails' ]),
      ...mapActions(['getDetails'])
     
    },
  
    mounted: function() {
        this.getDetails() 
    },
  
    
  
   
      }
  </script>
  
  <style lang="scss" scoped>
  
  </style>