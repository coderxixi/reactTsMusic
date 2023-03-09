const path =require('path')

const CracoLess=require('craco-less')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports= webpack = {
  plugins:[
    {plugin:CracoLess,options:{
      lessLoaderOptions:{
        lessOptions:{
          modifyvars:{'@primary':'#1DA57A'},
          javascriptEnabled:true
        }
      }
    }}
  ],
  alias: {
    '@': resolve('src')
  }
}
