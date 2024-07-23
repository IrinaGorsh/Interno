<template>
    <section class="post__details">
        
        <div class="post__content container">
            
<div class="content__column">
    <h1 class="content__heading">Let’s Get Solution for Building  Construction Work</h1>    
        <div class="content__img top"></div>  
        <div class="content__date">
            <p class="current__date">26 December,2022</p> 
            <div class="categories">
                <a href="#" class="cat">Interior</a>
                <a href="#" class="cat">/ Home</a>
                <a href="#" class="cat">/ Decor</a>
            </div>
        
        </div>
        <p class="content">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. <br><br>
        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
        </p>
        <div class="quotes">
            <div class="quote__wrapper">
                <p class="brackets">“</p>
                <p class="quote">The details are not the details. They make the design.</p>
            </div>
        
        </div>
        <h3 class="content__subt">Design sprints are great</h3>
        <p class="content">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        <p class="content fn"><span class="footnote">1</span>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        <p class="content fn"><span class="footnote">2</span>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        <p class="content fn"><span class="footnote">3</span>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        <div class="content__img bottom"></div>
        <p class="content">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    
</div>

<div class="tags__column">
    <h4 class="tags__title">Tags</h4>
    <div class="tags__wrapper">
       
        <div class="tag">
            <a href="#" class="tag__link" @click="select">Kitchen</a>        
        </div>
        <div class="tag">
            <a href="#" class="tag__link" @click="select">Living</a>        
        </div>
        <div class="tag">
            <a href="#" class="tag__link" @click="select">Interior</a>        
        </div>


        
       
       
    </div>   
    
</div>

</div>
</section>
    <div class="secondblog container">
    <div class="blog__entry"  v-for="entry in filteredEntrys" :key= "entry.id" :entry="entry">
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
                            <a href="#" class="entry__link"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none"  class="entry__svg">
                                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"  class="entry__circ"/>
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg></a>
                        </div>
                       
                    </div>
                </div>            
                                    
        
            </div>
    </div>
</template>

<script>
//— Реализовать страницу Blog details (Домашнее задание 3).

//На странице отображается подробное описание статьи, а под ней размещаются остальные статьи. Необходимо, чтобы на выборе Tags происходила сортировка статей по выбранному тегу. Тег можно выбрать только один.

//Задание по работе с макетом направлено на подготовку проекта к итоговой аттестации.



    export default {

       
        data() {
        return{
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
        select(e) {
      this.filteredEntrys = this.entrys.filter((obj) => obj.tag === e.target.textContent);
      
    }
    }

    
    }
</script>

<style lang="scss" scoped>

</style>