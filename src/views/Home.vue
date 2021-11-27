<template>
  <div style="text-align: center; margin-top: 24px">
    <input type="text" v-model="search" />
  </div>

  <div class="wrapper">
    <div class="card" :key="item.id" v-for="item in filteredList">
      <ItemCard :itemData="item" />
    </div>
  </div>
  <div style="height: 100vh"></div>
  <!-- <router-view /> -->
</template>

<script>
// @ is an alias to /src
import ItemCard from "../components/ItemCard.vue";
import "../assets/styles.css";
import "../assets/cardStyle/card.css";
export default {
  name: "Home",
  components: {
    ItemCard,
  },
  data() {
    return {
      search: "",
      itemList: [
        {
          id: 1,
          name: "Bacon",
          price: 250,
          quantity: 32,
          category: ["Meat"],
          img: "https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg",
          desc: "Bacon is a type of salt-cured pork made from various cuts, typically the belly or less fatty parts of the back. It is eaten as a side dish, used as a central ingredient, or as a flavouring or accent (as in bacon crumbles in a salad)",
        },
        {
          id: 2,
          name: "Fish",
          price: 150,
          quantity: 8,
          category: ["Seafood", "Fresh"],
          img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg",
          desc: "Many species of fish are consumed as food in virtually all regions around the world. Fish has been an important source of protein and other nutrients for humans throughout history.",
        },
        {
          id: 3,
          name: "Chicken",
          price: 200,
          quantity: 9,
          category: ["Poultry", "Fresh"],
          img: "https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg",
          desc: "Chicken is the most common type of poultry in the world. Owing to the relative ease and low cost of raising chickens—in comparison to mammals such as cattle or hogs—chicken meat and chicken eggs have become prevalent in numerous cuisines.",
        },
        {
          id: 4,
          name: "Beef",
          price: 300,
          quantity: 0,
          category: ["Meat"],
          img: "https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg",
          desc: "Beef is the culinary name for meat from cattle. In prehistoric times, humans hunted aurochs and later domesticated them. Since then, numerous breeds of cattle have been bred specifically for the quality or quantity of their meat. Today, beef is the third most widely consumed meat in the world, after pork and poultry.",
        },
        {
          id: 5,
          name: "Soy Sauce",
          price: 50,
          quantity: 42,
          category: ["Sauce", "Seasoning"],
          img: "https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024",
          desc: "Soy sauce is a liquid condiment of Chinese origin, traditionally made from a fermented paste of soybeans, roasted grain, brine, and Aspergillus oryzae or Aspergillus sojae molds. It is considered to contain a strong umami flavor.",
        },
        {
          id: 9,
          name: "Egg",
          price: 10,
          quantity: 22,
          category: ["Dairy"],
          img: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
          desc: "Eggs are laid by female animals of many different species, including birds, reptiles, amphibians, a few mammals, and fish, and many of these have been eaten by humans for thousands of years.",
        },
        {
          id: 11,
          name: "Pork",
          price: 200,
          quantity: 4,
          category: ["Meat"],
          img: "https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg",
          desc: "Pork is the culinary name for the meat of the domestic pig. It is the most commonly consumed meat worldwide, with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products.",
        },
      ],
    };
  },
  computed: {
    filteredList() {
      return this.itemList
        .filter((item) => {
          return item.name.toLowerCase().includes(this.search.toLowerCase());
        })
        .filter((item) => {
          return item.quantity > 0;
        });
    },
  },
};
</script>

<style scoped>
input {
  font-size: 28px;
  color: black;
}
</style>