module.exports = {
    entry: {
        //首页入口
        home:'./js/home.js',
        //注册页入口
        reg:'./js/reg.js'
    },
    //动态生成文件名——使用[name]属性
    output: {
        filename:'[name].bundle.js',
    }
};