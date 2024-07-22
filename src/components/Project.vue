<template>
    <div>
<button @click="showall">Our Project</button>
<button @click="select">Bedroom</button>
<button @click="select">Kitchen</button>
<button @click="select">Bathroom</button>
<button @click="select">Living Area</button>
    </div>
    <Project v-for= "project in filteredProjects" :key="project.id"  :project="project"/>
</template>

<script>
//Перевести весь проект на компоненты, теперь можно работать с пропсами и выводить компоненты удобным для вас способом, чтобы их в дальнейшем можно было сортировать или менять.

//Создать страницу Project (Домашнее задание 6):

//В блоке categoreis необходимо сделать переключение проектов на ваше усмотрение.

import Project from './Project.vue';
    export default {
        data() {
            return {
                projects: [
                    {
                        id: 1,
                        title: "Minimal Bedroom",
                        tag: 'Bedroom',
                    },

                    {
                        id: 2,
                        title: "Minimal Bathroom",
                        tag: 'Bathroom',
                    },

                    {
                        id: 3,
                        title: "Classic Minimal Bedroom",
                        tag: 'Bedroom',
                    },

                    {
                        id: 4,
                        title: "Modern Bathroom",
                        tag: 'Bathroom',
                    },

                    {
                        id: 5,
                        title: "Modern Living Area",
                        tag: 'Living Area',
                    },

                    {
                        id: 6,
                        title: "Minimal Kitchen",
                        tag: 'Kitchen',
                    },

                    {
                        id: 7,
                        title: "Modern Kitchen",
                        tag: 'Kitchen',
                    },

                    {
                        id: 8,
                        title: "Classic Living Area",
                        tag: 'Living Area',
                    },
                ],

                filteredProjects: []
            };
        },

        methods: {
            showall(e) {
                this.filteredProjects = this.projects
            },
            select(e) {
      this.filteredProjects = this.projects.filter((obj) => obj.tag === e.target.textContent);
      
    }
        },

        components: {

            Project
        }
    }
</script>

<style lang="scss" scoped>

</style>