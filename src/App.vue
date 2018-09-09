<template>
  <div class="layout">
    <Layout>
      <Header>
        <InHeader></InHeader>
      </Header>
      <Content>
        <Home></Home>
      </Content>
      <Footer class="layout-footer-center">&copy;2018 onloading.cn</Footer>
    </Layout>
  </div>
</template>
<script>
import InHeader from './components/InHeader'
import Home from './pages/Home'

export default {
  name: 'app',
  data: function() {
    return {}
  },
  components: { InHeader, Home }
}
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.ivu-layout-header {
  padding-left: 20px;
  padding-right: 10px;
}
.layout-footer-center {
  text-align: center;
}
</style>