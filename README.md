# vue-app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


uploadRequest(fileObj, row) {//自定义上传方法
        let formData = new FormData()//创建formdata实例
        formData.append('file', fileObj.file)//添加文件
        formData.append('hospitalCode', row.hospitalCode)//添加额外参数
        return axios({
          method: 'post',
          url: '/apiUser/user/batchIncrease',
          data: formData,
          responseType: 'blob'
        })
        .then(res => {//成功
        let isBackFileName = res.headers['content-disposition']//判断是否有文件返回
