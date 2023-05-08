<template>

  <h1>{{ t("simple_key") }}</h1>

  <h2>v-for</h2>
  <div v-for="item in tm('items')">
    <p>{{ rt(item.name)}}</p>
  </div>

  <h2>map</h2>
  <p>
    Works only for: yarn run dev
    <br>
    Does not work for: yarn run build && yarn run start
  </p>

  <div v-for="name in mappedItems">
    <p>{{ name}}</p>
  </div>
  
</template>

<script setup>

const {t, tm, rt} = useI18n();

const mappedItems = tm('items').map(item => rt(item.name))

</script>
