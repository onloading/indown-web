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
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <InHeader></InHeader>
      </Header>
      <Layout>
        <Sider hide-trigger
          :style="{background: '#fff'}">
          <InSider></InSider>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <Row>
              <Col v-for="item in resources"
                span="6">
              <InCard :resource="item"></InCard>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import InHeader from './components/InHeader'
import InSider from './components/InSider'
import InCard from './components/InCard'

export default {
  name: 'app',
  data: function() {
    return {
      resources: ['1', '2', '3', '4', '', '', '', '']
    }
  },
  components: { InHeader, InSider, InCard }
}
</script>
