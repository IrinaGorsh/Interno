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
    <div class="post__img"></div>
<div class="post__txt">
<h3 class="post__title">Low Cost Latest Invented Interior Designing Ideas</h3>
<p class="post__content">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.  <br> <br>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
<div class="post__date">
<p class="current__date">26 December,2022</p>
<div class="entry__link__wrapper">
    <div class="entry__link"><router-link to="/blogdetails"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none"  class="entry__svg">
        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"  class="entry__circ"/>
        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></router-link><</div>
</div>
</div>
</div>
</div>
        </div>

    </section>
<section class="second__blog">
    <div class="heading container">
            <h3 class="heading__title">Articles & News</h3>        
    </div>
<div class="secondblog container">
   <!-- <Entry  v-for="entry in paginatedEntrys" :key= "entry.id" :entry="entry" />-->
   <div class="blog__entry" v-for="entry in paginatedEntrys" :key= "entry.id" :entry="entry">
                <div class="entry__img"  >
                    <div class="entry__tag">
                        <a href="#" class="tag__txt">{{entry.tag}}</a>                       
                    </div>                  
                
                </div>

                <div class="entry__sub">
                    <h4 class="entry__title">{{entry.title}}</h4>
                    <div class="entry__open">
                        <p class="entry__date">{{entry.date}}</p>
                        <div class="entry__link__wrapper">
                            <div class="entry__link"><router-link to="/blogdetails"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none"  class="entry__svg">
        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"  class="entry__circ"/>
        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></router-link><</div>
                        </div>
                       
                    </div>
                </div>            
                                    
        
            </div>
</div>
<div v-if="totalPages > 1">
    <router-link style="margin-right: 5px;" v-for="pagenumber in totalPages" :key="pagenumber" :to="getPageLink(pagenumber)">{{ pagenumber }}</router-link>
</div>
</section>
</template>
<script>
//import Entry from '@/components/Entry.vue';
export default {
        data() {
            return {
                entrys: [
                {
        id: 1,
        //img: '@/assets/images/Kitchen2.jpg',
        tag: "Kitchen",
        title:"Let’s Get Solution For Building Construction Work",
        date: '26 December,2022',
        
    },

    {
        id: 2,
        //img: '@/assets/images/Kitchen2.jpg',
        tag: "Living",
        title:"Low Cost Latest Invented Interior Designing Ideas.",
        date: '22 December,2022',
        
    },

    {
        id: 3,
        //img: '@/assets/images/Kitchen2.jpg',
        tag: "Interior",
        title:"Best For Any Office & Business Interior Solution",
        date: '25 December,2022',
        
    },

    {
        id: 4,
        //img: '@/assets/images/Kitchen2.jpg',
        tag: "Kitchen",
        title:"Best For Any Office & Business Interior Solution",
        date: '19 December,2022',
        
    },

    {
        id: 5,
        //img: '@/assets/images/Kitchen2.jpg',
        tag: "Living",
        title:"Best For Any Office & Business Interior Solution",
        date: '18 December,2022',
        
    },

    {
        id: 6,
        //img: '@/assets/images/Kitchen2.jpg',
        tag: "Interior",
        title:"Best For Any Office & Business Interior Solution",
        date: '17 December,2022',
        
    },

    {
        id: 7,
        //img: '@/assets/images/Kitchen2.jpg',
        tag: "Kitchen",
        title:"Best For Any Office & Business Interior Solution",
        date: '15 December,2022',
        
    },

    {
        id: 8,
        //img: '@/assets/images/Kitchen2.jpg',
        tag: "Living",
        title:"Best For Any Office & Business Interior Solution",
        date: '13 December,2022',
        
    },

    {
        id: 9,
        //img: '@/assets/images/Kitchen2.jpg',
        tag: "Kitchen",
        title:"Best For Any Office & Business Interior Solution",
        date: '10 December,2022',
        
    },

    {
        id: 10,
        //img: '@/assets/images/Kitchen2.jpg',
        tag: "Interior",
        title:"Best For Any Office & Business Interior Solution",
        date: '08 December,2022',
        
    },
                ],
    
    itemsPerPage: 6,

                links: [
                {
                        id:1,
                        title: "Blog",
                        url: "/blog/:pagenumber?"
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

                           
               
                
               //filteredEntrys: []
            }
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
           // showall(e) {
                //this.filteredEntrys = this.entrys
               
           //},
        
           getCurrentPageNumber(){
        const pageNumberParam = parseInt(this.$route.params.pagenumber)
        return isNaN(pageNumberParam)||pageNumberParam < 1 ? 1 : pageNumberParam
    },
    getPageLink(pagenumber){
return `/blog/${pagenumber}`
}
               
        },

       // components: {

            //Entry
        //},

      // mounted: function() {
       // this.showall() 
       
    //},
    }
</script>