/**
* @create-date : 2020-08-27 11:27
* @name : doc
*/
<template>
  <div>
    <TopNav/>
    <div class="content">
      <aside>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
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

<style lang="scss" scoped>
  aside {
    background: lightblue;
    width: 150px;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    > h2 {
      margin-bottom: 4px;
    }
    > ol {
      > li {
        padding: 4px 0;
      }
    }
  }
</style>
