<template>
    <Card style="width:220px"
        :padding=padding>
        <div style="text-align:center">
            <img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png">
            <h3>IDEA</h3>
            <a>这是一个链接</a>
            <P>这是一篇简介，此处省略一万字</P>
        </div>
    </Card>
</template>
<script>
export default {
  name: 'InCard',
  data: function() {
    return {
      padding: 20
    }
  },
  props: {
    resource: ''
  }
}
</script>
<style>
Card {
  margin-bottom: 5px;
  margin-top: 10px;
}
</style>
