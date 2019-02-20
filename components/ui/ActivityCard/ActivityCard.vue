<template>
  <a-card
    :id="`${activity.id}-card`"
    hoverable>
    <responsive-image
      slot="cover"
      class="cover-image"
      :cloudinary-public-id="activity.cloudinaryPublicId"
      :sizes="cardImgHeightByBreakpoint" />
    <a-card-meta>
      <template slot="title">
        <div class="card--title">
          <span class="card--title-item card--title-header">
            {{ activity.name }}
          </span>
          <span class="card--title-item card--title-price">
            ${{ activity.price }}
          </span>
        </div>
      </template>
    </a-card-meta>
    <a-rate
      :default-value="activity.rating"
      allow-half
      disabled />
  </a-card>
</template>
<script>
import ResponsiveImage from '@/components/ui/ResponsiveImage/ResponsiveImage.vue'
export default {
  components: {
    ResponsiveImage
  },
  props: {
    activity: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cardImgHeightByBreakpoint: {
        xs: 331,
        sm: 441,
        md: 213,
        lg: 277,
        xl: 216,
        xxl: 220
      }
    }
  }
}
</script>

<style lang="scss">
.card {
  &--title {
    display: flex;
    justify-content: space-between;

    &-header {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &-price {
      display: flex;
      justify-content: flex-end;
      text-overflow: clip;
    }

    &-item {
      flex-grow: 1;
    }
  }
}
</style>
