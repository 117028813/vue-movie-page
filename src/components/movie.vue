<template>
  <div class="item">
    <div class="img-box"><img v-bind:src="movie.picUrl"></div>
    <div class="info">
      <span class="title">{{movie.title}}</span>
      <div class="rank">
        <rating-stars v-if="movie.rating" v-bind:rating="movie.rating"></rating-stars>
        <span v-if="movie.rating">{{movie.rating}}</span>
        <span v-else>暂无评分</span>
      </div>
    </div>
  </div>
</template>

<script>
import ratingStars from './rating-stars'

export default {
  components: {
    ratingStars
  },
  props: ["movie"],
  data() {
    return {};
  },
  created() {
  }
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-box {
  position: relative;
  width: 100%;
  padding-bottom: 133%;
}

.img-box > img {
  position:absolute;
  width: 100%;
  height: 100%;
}

.info .title {
  font-size: 13px;
  padding-top: 5px;
  color: #494949;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.rank {
  font-size: 12px;
  text-align: center;
  padding-top: 3px;
  color: #9b9b9b;
}

</style>
