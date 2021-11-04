<template>
  Page {{ this.page }} from {{ this.totalPageNumber }}
  <router-link
    :to="{
      name: 'Characters',
      query: { ...this.$route.query, page: page - 1 },
    }"
    rel="prev"
    v-if="page != 1"
    >Prev Page</router-link
  >
  <router-link
    :to="{
      name: 'Characters',
      query: { ...this.$route.query, page: page + 1 },
    }"
    rel="next"
    v-if="page !== totalPageNumber"
    >Next Page</router-link
  >
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: ["page", "totalPageNumber"],
});
</script>
