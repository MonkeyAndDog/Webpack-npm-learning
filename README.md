# Webpack-npm-learning

npm学习
---
1. 初始化项目 `npm init -y`
2. 安装依赖 
    1. 项目为空项目：`npm install <name>@<version>` ：
        安装名称为 `name` 且版本号为 `version` 的依赖，且安装目录为 `/node_modules/*`
    2. 项目为以有项目：项目描述在 `package.json` 中，只需要执行命令 `npm install` 即可安装
3. 升级依赖 `npm update` 

webpack学习
---
1. 为每个项目使用一个webpack：`npm install webpack --save-dev` 或者 `npm i webpack -D`
2. 安装 `webpack-cli` 同上。
3. 自定义命令：
    ```json
    {"build": "node_modules/.bin/webpack -p"}
    ```
4. 路径问题：（下面main.js和a.js、webpack.config.js在同一个目录下）
    * 在a.js中暴露出来内容
        ```javascript
        var msg = '666';
        module.exports = {
            msg:msg
        };
        ```
    * 在main.js中引用a的内容：
        ```javascript
        var msg = require('./a').msg;
        ```
    * 在webpack.config.js中定义：
        ```javascript
        module.exports = {
            entry: './main.js',
            output: {   
                filename: 'bundle.js'
            }   
        };
        ```
5. 多文件生成
    ```javascript
    module.exports = {
        entry: {
            //首页入口
            home:'./js/home.js',
            //注册页入口
            reg:'./js/reg.js'
        },
        //动态生成文件名——使用[name]属性，与上面相对应
        output: {
            filename:'[name].bundle.js',
        }
    };
    ```
6. 使用ES6写法写出口和入口
    * 出口
        ```javascript
        var open = false;
        
        //ES6写法
        export {open};
        
        //node写法
        // module.exports = {
        //     open:open
        // };
        ```
    * 入口
        ```javascript
        //ES6写法
        import {open} from './base';
        
        //node写法
        // var base = require('./base');
        //
        // var open = base.open;
        
        if (open) {
            document.body.innerHTML =
                `<h1>欢迎入坑</h1>`
        } else {
            document.body.innerHTML =
                `<h1>暂不接受入坑</h1>`
        }
        ```