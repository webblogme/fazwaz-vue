<template>
  <figure>
    <figcaption>Lorem ipsum dolor sit amet.</figcaption>
  </figure>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/my-variables.scss';
@import '../../node_modules/bulma/sass/utilities/_all.sass';

.prose {
  figure {
    position: relative;
    display: flex;
    background-image: url('https://www.allyouneedforweb.com/fazwaz-test/102-Villa-Sawarin.jpg');
    background-size: 100% 100%;
    // background-position: center;
    // background-size: contain;
    height: calc(100vh - 50px);
    figcaption {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 3em;
      letter-spacing: -2px;
      line-height: 1;
      color: #fff;
      transform: translate(-50%, -50%);
      text-shadow: 3px 3px 11px rgba($color: #000000, $alpha: 0.8);
    }
  }
}
</style>