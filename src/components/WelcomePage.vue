<template>
  <article class="prose">
    <MainFigure/>
    <BuyRentSell/>
    <HotRegion/>
  </article>
</template>

<script>
import MainFigure from '@/components/MainFigure'
import BuyRentSell from '@/components/BuyRentSell'
import HotRegion from '@/components/HotRegion'
export default {
  components: { BuyRentSell, MainFigure, HotRegion }
}
</script>
