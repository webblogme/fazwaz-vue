<template>
  <article class="hotRegion">
    <h3>Region in Thailand</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <a @click="show = !show" onclick="return: false;">Toggle area</a>
    <div v-show="!show" class="columns topReginal">
      <div class="column is-3 is-half-mobile regional" v-for="data in regionalData">
        <img :src="data[3]">
        <p class="name">{{ data[0] }}</p>
        <p class="sec">&#9733; {{ data[1] }}</p>
        <p class="sec">&#9787; {{ data[2] }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      show: true,
      showSearch: true,
      regionalData: [
        ["Beach", 346, 484, 'https://picsum.photos/300?image=1083'],
        ["City", 11573, 955, 'https://picsum.photos/300?image=1076'],
        ["Jungle", 8370, 278, 'https://picsum.photos/300?image=1043']
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/my-variables.scss';
@import '../assets/scss/shorthand.scss';
@import '../../node_modules/bulma/sass/utilities/_all.sass';

.hotRegion {
  text-align: center;
  padding: 0 0 80px;
  h3 {
    font-size: 3em;
  }
  a {
    background-color: darken($color: $primary-color, $amount: 40);
    padding: 15px 150px;
    margin-top: 20px;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;
  }
}

.topReginal {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  @include mobile {
    flex-direction: column;
  }
}
.regional {
  margin-top: 60px;
  @extend .boxshadow;
  img {
    margin: 0;
    @extend .my-transition;
    &:hover {
      transform: scale(1.05);
      filter: brightness(60%);
      @extend .my-transition;
    }
  }
  &:hover {
    background-color: lighten($color: $primary-color, $amount: 5);
    @extend .my-transition;
    color: #fff;
  }

  p.name {
    font-weight: bold;
    font-size: 1.4em;
    line-height: 2;
    text-align: center;
    border-bottom: 1px dotted #000;
    color: darken($color: $primary-color, $amount: 25);
  }
  p.sec {
    display: inline-block;
    width: 50%;
    float: left;
    padding: 10px 10px 0;
  }
}
</style>
