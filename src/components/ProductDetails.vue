<template>
    
<div class="product__details">
    <h1 class="pd__title">{{name}}</h1>
    <p class="pd__price">{{ formattedPrice }}</p>
    <p class="pd__value">sqft.</p>
    <div class="line"></div>
    <p class="pd__desc">{{ description }}</p>
    <p class="pd__av">{{ available }}</p>
    <button class="pd__gs"></button>
</div>

</template>

<script>
//Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием //"ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и //статус доступности.

//Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о //продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и //"available" (флаг, указывающий на доступность продукта) (описание продукта в data return).

//Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную //цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть //строку "$99.99" - методом computed.

//В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус //доступности.

//Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock".
    export default {
        data() {
        return {
                 name: "Design Advices",
                  price: 29,
                  description: "General living space Advices Rennovation advices Interior design advices Furniture reorganization Up to 5 hours meeting ",
                  available: "Available"
        };
      },
      computed: {
        formattedPrice() {
          // Format the price using the toLocaleString method with it-IT locale and EURf currency
          return this.price.toLocaleString('it-IT', { style: 'currency', currency: 'USD' });
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>