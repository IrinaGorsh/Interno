<template>
    <div class="tag" tabindex="0">
            <a href="#" class="tag__link">{{ tag.name }}</a>        
        </div>
</template>
<script>
 export default {
        props: {
            tag: Object,
        },
        
        
    }
</script>
<style lang="scss" scoped>

</style>