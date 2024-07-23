<template>
    <section class="notfound">
<div class="pnf">
<div class="error">
<h1 class="error_title">404</h1>
<p class="error_txt">We are sorry, but the pageyou requested was not found</p>
<button class="start__btn">
    <router-link to="/" > <div class="start__btn__txt">Back To Home<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none" >
                        <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                      </svg></div></router-link>
</button>

</div>
<div class="error_img">
   
</div>
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