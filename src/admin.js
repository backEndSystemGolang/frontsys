import React from 'react'
import { Row,Col } from 'antd';
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import NavLeft from './components/NavLeft/index'
// import Home from './pages/home/index'
import './css/common.css'
export default class Admin extends React.Component{  //01.继承才能实现生命周期
    render(){
        return ( //02.必须只有一个根节点
            <Row className="container" >
                <Col span="4" className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span="20" className="main">
                   <Header/>
                   <Row className="content">
                     {/* 内容页 */}
                     {/* 路由 */}
                     {/* <Home/> */}
                     {this.props.children}
                   </Row>
                   <Footer/>
                </Col>
            </Row>
        )
    }
}