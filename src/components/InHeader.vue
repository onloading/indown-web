<template>
    <Row>
        <Col span="12">
        <div>
            <Icon type="ios-american-football-outline" />
        </div>
        </Col>
        <Col span="8">
        <Menu mode="horizontal"
            theme="dark"
            active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                首页
                </MenuItem>
                <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>
                分类
                </MenuItem>
                <MenuItem name="3">
                <Icon type="ios-analytics"></Icon>
                教程
                </MenuItem>
                <MenuItem name="4">
                <Icon type="ios-paper"></Icon>
                其他
                </MenuItem>
            </div>
        </Menu>
        </Col>
        <Col span="4">
        <Select v-model="model13"
            filterable
            remote
            :remote-method="remoteMethod1"
            :loading="loading1"
            placeholder="搜索组件...">
            <Option v-for="(option, index) in options1"
                :value="option.value"
                :key="index">{{option.label}}</Option>
        </Select>
        </Col>
    </Row>

</template>
<script>
export default {
  name: 'InHeader',
  data() {
    return {
      model13: '',
      theme1: 'light',
      loading1: false,
      options1: [],
      list: [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New hampshire',
        'New jersey',
        'New mexico',
        'New york',
        'North carolina',
        'North dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode island',
        'South carolina',
        'South dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West virginia',
        'Wisconsin',
        'Wyoming'
      ]
    }
  },
  methods: {
    change() {
      // this.data3.pop()
    },
    filterMethod(value, option) {
      return option.toUpperCase().indexOf(value.toUpperCase()) !== -1
    },
    remoteMethod1(query) {
      if (query !== '') {
        this.loading1 = true
        setTimeout(() => {
          this.loading1 = false
          const list = this.list.map(item => {
            return {
              value: item,
              label: item
            }
          })
          this.options1 = list.filter(
            item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          )
        }, 200)
      } else {
        this.options1 = []
      }
    }
  }
}
</script>
