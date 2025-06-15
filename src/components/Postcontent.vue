<template>
     
    <h1 class="content__heading">{{ post.title }}</h1>    
        <div class="content__img top"></div>  
        <div class="content__date">
            <p class="current__date">{{ post.date }}</p> 
            <div class="categories">
                <a href="#" class="cat">Interior</a>
                <a href="#" class="cat">/ Home</a>
                <a href="#" class="cat">/ Decor</a>
            </div>
        
        </div>
        <div class="content" v-html="post.content"></div>
        
    




</template>
<script>
 export default {
        props: {
            post: Object,
        },

    }
</script>
<style lang="scss" scoped>

</style>