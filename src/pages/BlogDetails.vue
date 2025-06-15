<template>
    <section class="post__details">
        
        <div class="post__content container">
            <div class="content__column">
                <Postcontent  v-for="post in posts" :key= "post.id" :post="post"/>
            </div>
            <div class="tags__column">
    <h4 class="tags__title">Tags</h4>
    <div class="tags__wrapper">
       
      <Tag  v-for="tag in tags" :key= "tag.id" :tag="tag" @click="select"/>

        
       
       
    </div>
    
</div>

             
            


</div>
</section>
    <div class="secondblog container">
        <Entry v-for="entry in filteredEntrys" :key= "entry.id" :entry="entry"/>

   
    </div>
</template>

<script>
//— Реализовать страницу Blog details (Домашнее задание 3).

//На странице отображается подробное описание статьи, а под ней размещаются остальные статьи. Необходимо, чтобы на выборе Tags происходила сортировка статей по выбранному тегу. Тег можно выбрать только один.

//Задание по работе с макетом направлено на подготовку проекта к итоговой аттестации.

import Postcontent from '@/components/Postcontent.vue';
import Tag from '@/components/Tag.vue';
import Entry from '@/components/Entry.vue';

    export default {

       
        data() {
        return{
            posts: [
                { 
                    id: 1,
                    title: "Let’s Get Solution for Building  Construction Work",
                    date: "26 December,2022",
                    content: "<p class='content'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. <br><br>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p> <div class='quotes'> <div class='quote__wrapper'><p class='brackets'>“</p><p class='quote'>The details are not the details. They make the design.</p></div></div><h3 class='content__subt'>Design sprints are great</h3> <p class='content'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><p class='content fn'><span class='footnote'>1</span>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><p class='content fn'><span class='footnote'>2</span>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><p class='content fn'><span class='footnote'>3</span>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p><div class='content__img bottom'></div><p class='content'>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>"

                }
               

            ],

        tags: [
                {
                    id: 1,
                    name: "Kitchen"
                },

                {
                    id: 2,
                    name: "Living"
                },

                {
                    id: 3,
                    name: "Interior"
                }
        ],
		entrys:[
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
                
				tag: "Interior",
				title:"Low Cost Latest Invented Interior Designing Ideas",
				date: '25 December,2022',
				
			},		

            {
				id: 5,
               
				tag: "Kitchen",
				title:"Best For Any Office & Business Interior Solution",
				date: '25 December,2022',
				
			},		

            {
				id: 6,
               
				tag: "Living",
				title:"Let’s Get Solution For Building Construction Work",
				date: '25 December,2022',
				
			},		
			
		],

        filteredEntrys: []
		};
    },

    methods: {
      showall() {
                this.filteredEntrys = this.entrys
               
            },
        select(e) {
      this.filteredEntrys = this.entrys.filter((obj) => obj.tag === e.target.textContent);
      
    }
    },
 
    components: {
        Postcontent,
        Tag,
        Entry
    },

     mounted: function() {
        this.showall()
        
              
    }
    
    }
</script>

<style lang="scss" scoped>

</style>