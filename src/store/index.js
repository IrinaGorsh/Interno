import { createStore } from 'vuex';
const entrysFromServer = [
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
        tag: "Interior",
        title:"Low Cost Latest Invented Interior Designing Ideas",
        date: '25 December,2022',
        
    },		

    {
        id: 5,
        //img: '@/assets/images/Kitchen2.jpg',
        tag: "Kitchen",
        title:"Best For Any Office & Business Interior Solution",
        date: '25 December,2022',
        
    },		

    {
        id: 6,
        //img: '@/assets/images/Kitchen2.jpg',
        tag: "Living",
        title:"Let’s Get Solution For Building Construction Work",
        date: '25 December,2022',
        
    },		
]
export default createStore({

    
    state:{
               details: [],
              // categories: []

              entrys: []
        
    },
    
    
    mutations:{
       

       setDetails(state, details){
           state.details = details;

        },

        //setCategories(state, categories) {
            //state.categories = categories;
       // }

       setEntrys(state, entrys) {
        state.entrys = entrys;
       }

        
    },
    actions:{
        getDetails(context) {
//setTimeout(() => {
    const detailsFromServer = [
        {
id: 1,
title: 'Minimal Look Bedroom',
description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo',
        },
    ];
    context.commit('setDetails', detailsFromServer);
}, 
//1000)
        //}

    //getCategories(context) {
        //const categoriesFromServer = [

        //]
    //}

    getEntrys(context) {
        

        context.commit('setEntrys', entrysFromServer);
    },

    getlastEntrys(context) {
        
const lastEntrys = entrysFromServer.slice(-3);
context.commit('setEntrys', lastEntrys)
    },

   filterEntrys(context, item) {
     const filteredEntrys = entrysFromServer.filter((item) => item.tag === e.target.textContent);
        context.commit('setEntrys', filteredEntrys)
    }
    },
    
})

