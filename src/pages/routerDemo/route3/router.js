import React from 'react'
import { HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Main from './Main'
import Info from './info'
import About from './../router1/about'
import Topic from './../router1/topic'
import Home from './Home'
import NoMatch from './NoMatch'
export default class IRouter extends React.Component{
    render(){
        return (
            <Router>
                <Home>
                    {/* 使用 Switch实现404，从上到下进行匹配，没有任何匹配就会加载NoMatch*/}
                    <Switch>
                        <Route path="/main" render={() =>
                            <Main>
                                {/* 动态路由，参数在info.js获取 */}
                                <Route path="/main/:value" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        {/* exact={true} 当你访问： /about/abc 就不会访问：/about这个路由*/}
                        <Route exact={true} path="/about/abc" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        );
    }
}