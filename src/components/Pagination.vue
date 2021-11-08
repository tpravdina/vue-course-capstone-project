<template>
  <div class="Pagination">
    <div class="Pagination__page-info">
      Page {{ this.page }} from {{ this.totalPageNumber }}
    </div>
    <div
      :class="{
        Pagination__arrow: true,
        'Pagination__arrow--disable': this.isPrevDisable,
      }"
      @click="moveToPrevPage"
    >
      &lt;&lt; Prev
    </div>
    <div
      :class="{
        Pagination__arrow: true,
        'Pagination__arrow--disable': this.isNextDisable,
      }"
      @click="moveToNextPage"
    >
      Next &gt;&gt;
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: ["page", "totalPageNumber"],
  computed: {
    isPrevDisable(): boolean {
      return this.page === 1;
    },
    isNextDisable(): boolean {
      return this.page === this.totalPageNumber;
    },
  },
  methods: {
    moveToPrevPage() {
      if (!this.isPrevDisable) {
        this.$router.push({
          name: "Characters",
          query: { ...this.$route.query, page: this.page - 1 },
        });
      }
    },
    moveToNextPage() {
      if (!this.isNextDisable) {
        this.$router.push({
          name: "Characters",
          query: { ...this.$route.query, page: this.page + 1 },
        });
      }
    },
  },
});
</script>
