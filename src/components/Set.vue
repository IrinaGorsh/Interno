<template>
   <!-- <div class="newset" :style="project.imagestyle">
    <div class="newset_img">
        <img src="@/assets/images/Project1.jpg" alt="newsetimage">
    </div>
    <div class="newset_info_link">
        <div class="newset_info">
            <h2 class="newset_title">{{ project.title }}</h2>
            <h3 class="newset_subtitle">Decor / Artchitecture</h3>
        </div>
        <div class="entry__link__wrapper"><div class="entry__link"></div></div>
    
    </div>
    

   </div>-->

   <div class="newset">
    <div class="newset_img">
        <img src="@/assets/images/Project1.jpg" alt="newsetimage" :style="project.imagestyle">
    </div>
    <div class="newset_info_link">
        <div class="newset_info">
            <h2 class="newset_title">{{ project.title }}</h2>
            <h3 class="newset_subtitle">Decor / Artchitecture</h3>
        </div>
        <div class="entry__link__wrapper"><div class="entry__link"></div></div>
    
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