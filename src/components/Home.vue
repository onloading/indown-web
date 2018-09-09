<template>
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
</template>
<script>
import InSider from '../components/InSider'
import InCard from '../components/InCard'

export default {
  name: 'Home',
  data: function() {
    return {
      resources: ['1', '2', '3', '4', '', '', '', '']
    }
  },
  components: { InSider, InCard }
}
</script>

