<template>
    <section class="intro">
        <div class="banner container">
            <div class="banner__wrapper">
                <div class="banner__info">
                    <h1 class="banner__heading">Let Your Home Be Unique</h1>
                    <p class="banner__desc">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
                    <a href="#" class="start__btn"> <div class="start__btn__txt">Get Started<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none" >
                        <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                      </svg></div></a>
                    </div>  
            </div>          
             
        </div>
    </section> 
    <section class="proj">
<div class="heading container">
    <h2 class="heading__title">Follow Our Projects</h2>
    <p class="heading__subt">It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
</div>
<div class="project container">
    <Item  v-for="set in sets" :key= "set.id" :set="set" />
   
</div>
<div class="info__background">
    <div class="info container">
<Info v-for="info in infos" :key= "info.id" :info="info"/>
    </div>

</div>
    </section>
<section>
    <div class="heading container">
            <h3 class="heading__title">Articles & News</h3>
        <p class="heading__subt">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        </div>
    <div class="blog container">
        <Entry  v-for="entry in filteredEntrys" :key= "entry.id" :entry="entry" />
        
        
    </div>
    <div class="proj_data">

    </div>
</section>
</template>
<script>
//— Реализовать страницу Blog details (Домашнее задание 3).

//На странице отображается подробное описание статьи, а под ней размещаются остальные статьи. Необходимо, чтобы на выборе Tags происходила сортировка статей по выбранному тегу. Тег можно выбрать только один.

//Задание по работе с макетом направлено на подготовку проекта к итоговой аттестации.

import Entry from '@/components/Entry.vue';
import Item from '@/components/Item.vue';
import Info from '@/components/Info.vue';
    
export default {
        data() {
            return {
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
                ],

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

                sets: [
                    {
                        id: 1,
                        title: "Modern Kitchan",
                        subtitle: "Decor / Artchitecture",
                        /*image: require('@/assets/images/SetPhoto1.jpg'), */
                         setImg: {
                             borderRadius: '0 50px 0 0',
                             background: `url(${require('@/assets/images/SetPhoto1.jpg')})`
                            
                        }

                        
                       
                    },

                    {
                        id: 2,
                        title: "Modern Kitchan",
                        subtitle: "Decor / Artchitecture",
                        /*image: require('@/assets/images/SetPhoto2.jpg'), */
                        setImg: {
                             borderRadius: '50px 0 0 0',
                             background: `url(${require('@/assets/images/SetPhoto2.jpg')})`
                              
                        }
                        
                    },

                    {
                        id: 3,
                        title: "Modern Kitchan",
                        subtitle: "Decor / Artchitecture",
                         /*image: require('@/assets/images/SetPhoto3.jpg'),*/
                        setImg: {
                             borderRadius: '0 0 50px 0',
                             background: `url(${require('@/assets/images/SetPhoto2.jpg')})`
                             
                        }
                         
                    },

                    {
                        id: 4,
                        title: "Modern Kitchan",
                        subtitle: "Decor / Artchitecture",
                        /* image: require('@/assets/images/SetPhoto4.jpg'), */
                        setImg: {
                             borderRadius: '0 0 0 50px',
                             background: `url(${require('@/assets/images/SetPhoto1.jpg')})`
                              
                        }
                    }
                ],

            infos: [
                {
                    id: 1,
                    figure: 12,
                    content: "Years Of Experiance",
                    infoBorder: {
                       borderRight: '1px solid #CDA274'
                    }
                },

                {
                    id: 2,
                    figure: 85,
                    content: "Success Project",
                     infoBorder: {
                       borderRight: '1px solid #CDA274'
                    }
                },

                {
                    id: 3,
                    figure: 15,
                    content: "Active Project",
                     infoBorder: {
                       borderRight: '1px solid #CDA274'
                    }
                },

                {
                    id: 4,
                    figure: 95,
                    content: "Happy CUstomers",
                     infoBorder: {
                       borderRight: 'none'
                    }
                }

            ],

               
              
               
                
               filteredEntrys: []
            };
        },

        methods: {
            showall(e) {
                this.filteredEntrys = this.entrys
               
            },
               
        },

       

        components: {

            Entry,
            Item,
            Info
        },

        mounted: function() {
        this.showall() 
       
    },
    }


    
</script>
