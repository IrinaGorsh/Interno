<template>
   

   <div class="newset">
    <div class="newset_img">
        <img src="@/assets/images/Project1.jpg" alt="newsetimage" :style="project.imagestyle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="star" >
           
        <!-Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>

    </div>
    <div class="newset_info_link">
        <div class="newset_info">
            <h2 class="newset_title">{{ project.title }}</h2>
            <h3 class="newset_subtitle">Decor / Artchitecture</h3>
        </div>
        <div class="entry__link__wrapper"><div class="set__link" >
                    <router-link to="/projectdetails"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none"  class="entry__svg">
        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"  class="entry__circ"/>
        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></router-link>  
                </div>        </div>
    
    </div>
    

   </div>

 
    
</template>

<script>
    export default {
        props: {
            project: Object,
        },

    }
</script>

<style lang="scss" scoped>

</style>