<template>
 <section class="blog__banner">
        <div class="blog__banner titled container">
<div class="blog__banner__heading">
<h1 class="bannerheading__title">Our Project</h1>
<p class="bannerheading__sub">Home / Project</p>
</div>
        </div>

    </section>
<section class="projects_info">
    <div class="sets container">
        <div class="selectBtns">

<button @click="select" class="selectBtn">Bedroom</button>
<button @click="select" class="selectBtn">Kitchen</button>
<button @click="select" class="selectBtn">Bathroom</button>
<button @click="select" class="selectBtn">Living Area</button>
    </div>
   <div class="project_cards">
    <Set v-for= "project in filteredProjects" :key="project.id"  :project="project" />
   </div>
   <div v-if="totalPages > 1" class="pagination container">
    <router-link class="pag_link" v-for="pagenumber in totalPages" :key="pagenumber" :to="getPageLink(pagenumber)">{{ pagenumber }}</router-link>
</div>
    </div>
    
   
</section>
    
</template>

<script>
//Перевести весь проект на компоненты, теперь можно работать с пропсами и выводить компоненты удобным для вас способом, чтобы их в дальнейшем можно было сортировать или менять.

//Создать страницу Project (Домашнее задание 6):

//В блоке categoreis необходимо сделать переключение проектов на ваше усмотрение.


import Set from '@/components/Set.vue';
    export default {
        data() {
            return {
                projects: [
                    {
                        id: 1,
                        title: "Minimal Bedroom",
                        image: "Project1.jpg",
                        tag: 'Bedroom',
                        imagestyle: {
                            
                            width: '585px',
                            height: '947px',
                            
                        }
                      
                      
                    },

                    {
                        id: 2,
                        title: "Minimal Bathroom",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bridal_pink_-_morwell_rose_garden.jpg/1024px-Bridal_pink_-_morwell_rose_garden.jpg",
                        tag: 'Bathroom',
                        imagestyle: {
                            
                            width: '585px',
                            height: '616px'
                        }
                    },

                    {
                        id: 3,
                        title: "Classic Minimal Bedroom",
                        image: "Project1.jpg",
                        tag: 'Bedroom',
                        imagestyle: {
                            
                            width: '585px',
                            height: '947px'
                        }
                    },

                    {
                        id: 4,
                        title: "Modern Bathroom",
                        image: "Project2.jpg",
                        tag: 'Bathroom',
                        imagestyle: {
                            
                            width: '585px',
                            height: '616px'}
                    },

                    {
                        id: 5,
                        title: "Modern Living Area",
                        image: "Project1.jpg",
                        tag: 'Living Area',
                        imagestyle: {
                           
                            width: '585px',
                            height: '616px'
                        }
                    },

                    {
                        id: 6,
                        title: "Minimal Kitchen",                        
                        image: "Project2.jpg",
                        tag: 'Kitchen',
                        imagestyle: {
                           
                            width: '585px',
                            height: '947px'
                        }
                    },

                    {
                        id: 7,
                        title: "Modern Kitchen",
                        image: "Project1.jpg",
                        tag: 'Kitchen',
                        imagestyle: {
                            
                            width: '585px',
                            height: '616px'
                        }
                    },

                    {
                        id: 8,
                        title: "Classic Living Area",
                        image: "Project2.jpg",
                        tag: 'Living Area',
                        imagestyle: {
                            
                            width: '585px',
                            height: '616px'
                            
                        }
                    },

                    {
                        id: 9,
                        title: "Minimal Kitchen",                        
                        image: "Project2.jpg",
                        tag: 'Kitchen',
                        imagestyle: {
                           
                            width: '585px',
                            height: '947px'
                        }
                    },

                    {
                        id: 10,
                        title: "Minimal Living Area",                        
                        image: "Project1.jpg",
                        tag: 'Living Area',
                        imagestyle: {
                           
                            width: '585px',
                            height: '616px'
                        }
                    },
                ],

        itemsPerPage: 6,

               
              
               
                
               filteredProjects: [],
               links: [
                {
                        id:1,
                        title: "Project",
                        url: "/project/:pagenumber?"
                    },
                    
                    {
                        id:2,
                        title: "Blog Details",
                        url: "/blogdetails"
                    },

                   

                    {
                        id: 3,
                        title: "Project Details",
                        url: "/projectdetails"
                    }

                    

                   
                ],
            };
        },

        computed: {
            totalPages (){
              
                return Math.ceil(this.projects.length/this.itemsPerPage)
            },

paginatedEntrys () {
    const pagenumber = this.getCurrentPageNumber()
    const startIndex = (pagenumber - 1) * this.itemsPerPage
    const endIndex = startIndex + this.itemsPerPage
    return this.projects.slice(startIndex, endIndex)

}

        },

        methods: {
            showall(e) {
                this.filteredProjects = this.projects
              
            },
            select(e) {
      this.filteredProjects = this.projects.filter((obj) => obj.tag === e.target.textContent);
      
    },

    getCurrentPageNumber(){
        const pageNumberParam = parseInt(this.$route.params.pagenumber)
        return isNaN(pageNumberParam)||pageNumberParam < 1 ? 1 : pageNumberParam
    },
    getPageLink(pagenumber){
return `/project/${pagenumber}`
}

    
        },

        components: {

            Set
        },

        mounted: function() {
        this.showall() 
       
    },
    }
</script>

<style lang="scss" scoped>

</style>