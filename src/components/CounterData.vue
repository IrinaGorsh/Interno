<template>
    <h1>Задание 1</h1>
    <p>Count:{{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <h1>Задание 3</h1>
    <ul>
      <li v-for="(item, index) in data" :key="index">{{ item }}</li>
    </ul>
    <button @click="getData">Загрузить</button>
   
  </template>
  
  <script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  
  export default {
    name: 'App',
    computed: {
      ...mapState(['count', 'data'])
      
    },
  
    methods: {
      ...mapMutations(['increment', 'decrement', 'setData' ]),
      ...mapActions(['getData'])
    },
  }
  </script>
  
  <style lang="scss">
  
  </style>