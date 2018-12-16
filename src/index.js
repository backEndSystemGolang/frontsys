import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//系统主页面和router
// import Admin from './admin'  //放在router.js 导入
import Router from './router'

//demo 1，路由使用方法1：混合组件化，把标签和路由混合在一起
// import Admin from './pages/routerDemo/router1/Home.js' 
//demo 2，路由使用方法2：把路由pages 抽离出来
// import Admin from './pages/routerDemo/route2/router.js' 
//demo3,设置动态路由_和指定404页面
// import Admin from './pages/routerDemo/route3/router.js' 

import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
