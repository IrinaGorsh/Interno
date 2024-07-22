<template>
    <section class="head">
        <div class="header container">
            <div class="logo__header">
                <img src="@/assets/images/Logo.jpg" alt="Logo" class="logo">
                 <a href="#" class="interno">Interno</a>
            </div> 
            <ul class="menu">
                <!-- <router-link v-for="link in links" :key="link.id" :to="link.url" :style="{color: '#292F36',
    textAlign: 'center',
    fontFamily: 'Jost',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '125%'}">{{ link.title }}</router-link>-->
                <li class="menu__link"><router-link to="/" exact>Home</router-link></li>
                <li class="menu__link"><router-link to="/Project">Project</router-link></li>
                <li class="menu__link"><router-link to="/Blog">Blog</router-link></li>
            </ul>     
        </div>
        
    </section>
</template>

<script>
    export default {
        data() {
            return {
                links: [
                    {
                        id:1,
                        title: "Home",
                        url: "/"
                    },

                   

                    {
                        id: 2,
                        title: "Project",
                        url: "/project"
                    },

                    {
                        id: 3,
                        title: "Blog",
                        url: "/blog"
                    }

                   
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>