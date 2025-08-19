<template>
       <div class="post__img"></div>
<div class="post__txt">
<h3 class="post__title">{{ latestpost.title }}</h3>
<div class="latestpost__content" v-html="latestpost.content"></div>
<!--<p class="post__content"></p>-->
<div class="post__date">
<p class="current__date">{{ latestpost.date }}</p>
<div class="entry__link__wrapper">
    <div class="entry__link"><router-link to="/blogdetails"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none"  class="entry__svg">
        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" class="entry__circ"/>
        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></router-link></div>
</div>
</div>
</div>

</template>
<script>
 export default {
        props: {
            latestpost: Object,
        },

    }
</script>
<style lang="scss" scoped>

</style>