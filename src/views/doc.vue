/**
* @create-date : 2020-08-27 11:27
* @name : doc
*/
<template>
  <div>
    <TopNav/>
    <div class="content">
      <aside>边栏</aside>
      <main>内容</main>
    </div>
  </div>
</template>

<script>
import TopNav from '../components/top-nav.vue'

export default {
  name: 'doc',
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

<style scoped>

</style>
