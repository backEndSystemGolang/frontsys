import React from 'react'
import { Row,Col } from 'antd';
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import NavLeft from './components/NavLeft/index'
import './css/index.css'
export default class Admin extends React.Component{  //01.继承才能实现生命周期

    render(){
        return ( //02.必须只有一个根节点
        
            <Row className="container">
                <Col span="3" className="nav-left"> 
                   <NavLeft/>
                </Col>
                <Col span="21" className="main">
                   <Header/>
                   <Row className="content">
                       Content 
                   </Row>
                   <Footer/>
                </Col>
            </Row>
        )
    }
}