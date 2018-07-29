module.exports = {
    entry:'./js/index',
    output:{
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    }
};