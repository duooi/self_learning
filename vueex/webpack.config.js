const {resolve} = require('path')
const Webpack = require('webpack')

module.exports = {
    entry:'./src/main.js',
    output:{
        path:resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'dist/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/i,
                use:{
                    loader:'file-loader',
                    options:{
                        name:'img/[name].[hash:8].[ext]'
                    }
                }
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    plugins:[
      new Webpack.BannerPlugin('最终版权归Duooi所有')  
    ],
    resolve:{
        extensions:['.js','.css','.vue'],
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    }
}