import React from 'react'
import { HashRouter, Route, Switch} from 'react-router-dom'
import App from './App.js'
import Login from './pages/login/login.js'
import Admin from './admin'
import NoMatch from './pages/nomatch/index.js';
import Buttons from './pages/ui/buttons.js'
import Modals from './pages/ui/modals.js'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'

import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'

import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'
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
                           {/* <Switch>设置单个匹配，否则会匹配两个路由，页面会加载两个页面 */}
                           <Switch>
                            <Route path="/ui/buttons" component={Buttons} />
                            <Route path="/ui/modals" component={Modals} />
                            <Route path="/ui/loadings" component={Loadings} />
                            <Route path="/ui/notification" component={Notice} />
                            <Route path="/ui/notification" component={Notice} />
                            <Route path="/ui/messages" component={Messages} />
                            <Route path="/ui/tabs" component={Tabs} />
                            <Route path="/ui/gallery" component={Gallery} />
                            <Route path="/ui/carousel" component={Carousel} />

                            <Route path="/form/login" component={FormLogin} />
                            <Route path="/form/reg" component={FormRegister} />

                            <Route path="/table/basic" component={BasicTable} />
                            <Route path="/table/high" component={HighTable} />
                            <Route component={NoMatch} />
                           </Switch>                   
                       </Admin>
                    }/>
                   <Route path='/order/detail' component={Login}></Route>
               </App>
           </HashRouter>
       )     
    }
}