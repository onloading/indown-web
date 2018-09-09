/**
 * 发布到oss
 */
const CONFIG = {
  accessKeyId: 'LTAI1ZtkFHDyR6ko',
  accessKeySecret: 'aPQMBlzamcMIysnLUjwDvmVJAdVpts',
  bucket: 'indown',
  region: 'oss-cn-beijing'
}

const OSS = require('ali-oss').Wrapper
const client = new OSS(CONFIG)
var find = require('list-files')

find(
  function(result) {
    result.forEach(function(file) {
      file = file.replace(/\r/, '')
      let fileName = file.replace('./dist/', '').replace('.\\dist\\', '')
      // 修复windows的一个上传问题
      client.put(fileName.replace(/\\/g, '/'), file).then(function(val) {
        console.log(val.res)
        return val.res
      })
    })
  },
  {
    dir: 'dist',
    name: '*'
  }
)
