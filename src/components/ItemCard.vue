<template>
  <h1>{{ itemData.name }}</h1>
  <router-link
    :to="{
      name: 'Item',
      params: { itemID: itemData.id },
      query: {
        name: itemData.name,
        price: itemData.price,
        imgURL: itemData.img,
        category: itemData.category,
        quantity: itemData.quantity,
        desc: itemData.desc,
      },
    }"
    :name="itemData.name"
  >
    <img :src="itemData.img" />
  </router-link>
</template>

<script>
export default {
  name: "ItemCard",
  props: ["itemData"],
};
</script>

<style scoped>
h1 {
  text-align: center;
}

img {
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 100%;
}
</style>