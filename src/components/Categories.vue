<template>
    <div>
<a href="#" @click="select">Bedroom</a>
<a href="#" @click="select">Kitchen</a>
<a href="#" @click="select">Bathroom</a>
    </div>
    <Project v-for= "project in projects" :key="project.id"  :project="project"/>
</template>

<script>
import Project from './Project.vue';
    export default {
        data() {
            return {
                projects: [
                    {
                        id: 1,
                        title: "minimal bedroom",
                        tag: 'Bedroom',
                    },

                    {
                        id: 2,
                        title: "modern kitchen",
                        tag: 'Kitchen',
                    },

                    {
                        id: 3,
                        title: "minimal bathroom",
                        tag: 'Bathroom',
                    }
                ]
            };
        },

        methods: {
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