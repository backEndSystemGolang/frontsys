import React from 'react'
import { HashRouter, Route, Link, Switch} from 'react-router-dom'
import App from './App.js'
import Login from './pages/login/login.js'
import Admin from './admin' 
import Buttons from './pages/ui/buttons/index.js'

export default class IRouter extends React.Component{

    render(){
       return (
           <HashRouter>
               {/* 必须包裹最外层得组件，因为系统不只有左侧路由,设置App这样不管你访问任何一个路由，优先访问app组件 */}
               <App>
                   <Route path='/login' component={Login}></Route>
                   {/* render={()=>} 箭头函数加{}自动返回,不用加return */}
                   <Route path='/' render={()=>    //注意 父路由得path='/' 是匹配规则，不能设置错， // 设置为path='/admin'否则不能匹配
                       <Admin>                   
                        <Route path="/ui/buttons" component={Buttons} />
                       </Admin>
                    }/>
                   <Route path='/order/detail' component={Login}></Route>
               </App>
           </HashRouter>
       )     
    }
}