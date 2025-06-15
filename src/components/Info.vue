<template>
    <div class="infobox" :style="info.setstyle">
           <p class="info__figure">{{info.figure}}</p>
           <p class="info__content">{{info.content}}</p>
        </div>

</template>
<script>
 export default {
        props: {
            info: Object,
        },

    }
</script>
<style lang="scss" scoped>

</style>