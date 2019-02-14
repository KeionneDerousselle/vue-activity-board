<template>
  <div class="cards-container">
    <a-row
      type="flex"
      :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"
      class="card-list">
      <a-col
        v-for="item in items"
        :key="`${item.id}-col`"
        class="card-container"
        :xs="24"
        :sm="24"
        :md="12"
        :lg="8"
        :xl="6"
        :xxl="6">
        <activity-card
          :activity="item" />
      </a-col>
    </a-row>
  </div>
</template>
<script>
import ActivityCard from '@/components/ui/ActivityCard/ActivityCard.vue'

export default {
  components: {
    ActivityCard
  },
  props: {
    items: {
      type: Array,
      require: true,
      default: () => []
    }
  }
}
</script>
<style lang="scss">
.cards-container {
  padding-top: 2rem;

  .card-container {
    &:not(:last-child) {
      padding-bottom: 3rem;
    }
  }
}
</style>
