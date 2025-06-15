<template>
    <div class="set">
            <!--<div class="set__img"  :style="{background:  'url(' + set.image + ')'}"></div>-->
            <div class="set__img"  :style="set.setImg"></div>
            <div class="set__desc">
                <div class="set__text">
                    <h3 class="set__title">{{set.title}}</h3>
                     <p class="set__subt">{{set.subtitle}}</p>
                </div>            
                
                    <router-link to="/projectdetails"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none"  class="entry__svg">
        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"  class="entry__circ"/>
        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></router-link>  
                         
            </div>                 

        </div>

</template>
<script>
 export default {
        props: {
            set: Object,
        },

    }
</script>
<style lang="scss" scoped>

</style>