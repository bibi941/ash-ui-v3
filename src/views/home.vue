/**
* @create-date : 2020-08-27 11:27
* @name : home
*/
<template>
  <div>
    <TopNav/>
    <div class="banner">
      <h1>ash-v3</h1>
      <h2>平平无奇UI框架</h2>
      <p class="actions">
        <a href="">Github</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/top-nav.vue'

export default {
  name: 'home',
  components: { TopNav },
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: lightgreen;
    > .actions {
      padding: 8px 0;
      a {
        $h: 28px;
        margin: 0 8px;
        background: #fff;
        display: inline-block;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 8px;
      }
    }
  }
</style>
