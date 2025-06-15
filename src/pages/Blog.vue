<template>
    <section class="blog__banner">
        <div class="blog__banner titled container">
<div class="blog__banner__heading">
<h1 class="bannerheading__title">Articles & News</h1>
<p class="bannerheading__sub">Home / Blog</p>
</div>
        </div>

    </section>
   
    <section class="latest">
        
        <div class="post container">
            <h2 class="post__heading">Latest Post</h2>

<div class="post__wrapper">
    <Latest  v-for="latestpost in latestposts" :key= "latestpost.id" :latestpost="latestpost"/>
    
</div>
        </div>

    </section>
<section class="second__blog">
    <div class="heading container">
            <h3 class="heading__title">Articles & News</h3>        
    </div>
<div class="secondblog container">
    <Entry  v-for="entry in paginatedEntrys" :key= "entry.id" :entry="entry" />
   
  
</div>
<div v-if="totalPages > 1" class="pagination container">
    <router-link class="pag_link" v-for="pagenumber in totalPages" :key="pagenumber" :to="getPageLink(pagenumber)">{{ pagenumber }}</router-link>
</div>
</section>
</template>
<script>

import Latest from '@/components/Latest.vue';
import Entry from '@/components/Entry.vue';

    export default {
        data() {
            return {
                latestposts: [
            {
                id: 1,
                title: "Low Cost Latest Invented Interior Designing Ideas",
                content: "<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.  <br> <br>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>",
                date: "26 December,2022"
            }
                ],
               
                entrys: [
               
                {
        id: 1,
        
        tag: "Kitchen",
        title:"Let’s Get Solution For Building Construction Work",
        date: '26 December,2022',
        
    },

    {
        id: 2,
        
        tag: "Living",
        title:"Low Cost Latest Invented Interior Designing Ideas.",
        date: '22 December,2022',
        
    },

    {
        id: 3,
        
        tag: "Interior",
        title:"Best For Any Office & Business Interior Solution",
        date: '25 December,2022',
        
    },

    {
        id: 4,
        
        tag: "Kitchen",
        title:"Best For Any Office & Business Interior Solution",
        date: '19 December,2022',
        
    },

    {
        id: 5,
       
        tag: "Living",
        title:"Best For Any Office & Business Interior Solution",
        date: '18 December,2022',
        
    },

    {
        id: 6,
       
        tag: "Interior",
        title:"Best For Any Office & Business Interior Solution",
        date: '17 December,2022',
        
    },

    {
        id: 7,
        
        tag: "Kitchen",
        title:"Best For Any Office & Business Interior Solution",
        date: '15 December,2022',
        
    },

    {
        id: 8,
        
        tag: "Living",
        title:"Best For Any Office & Business Interior Solution",
        date: '13 December,2022',
        
    },

    {
        id: 9,
       
        tag: "Kitchen",
        title:"Best For Any Office & Business Interior Solution",
        date: '10 December,2022',
        
    },

    {
        id: 10,
        
        tag: "Interior",
        title:"Best For Any Office & Business Interior Solution",
        date: '08 December,2022',
        
    },
                   
                ],

                itemsPerPage: 6,

                links: [
                    {
                        id:1,
                        title: "Blog Details",
                        url: "/blogdetails"
                    },

                   

                    {
                        id: 2,
                        title: "Project Details",
                        url: "/projectdetails"
                    }                   

                   
                ],           
                            
                
               
            };

            
        },

        computed: {
            totalPages (){
              
                return Math.ceil(this.entrys.length/this.itemsPerPage)
            },

paginatedEntrys () {
    const pagenumber = this.getCurrentPageNumber()
    const startIndex = (pagenumber - 1) * this.itemsPerPage
    const endIndex = startIndex + this.itemsPerPage
    return this.entrys.slice(startIndex, endIndex)

}

        },

        methods: {
           
        
           getCurrentPageNumber(){
        const pageNumberParam = parseInt(this.$route.params.pagenumber)
        return isNaN(pageNumberParam)||pageNumberParam < 1 ? 1 : pageNumberParam
    },
    getPageLink(pagenumber){
return `/blog/${pagenumber}`
}
               
        },

       

        components: {
            Latest,
            Entry
        },

       
    }



</script>