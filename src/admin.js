import React from 'react'
import { Row,Col } from 'antd';
export default class Admin extends React.Component{  //01.继承才能实现生命周期

    render(){
        return ( //02.必须只有一个根节点
            <Row>
                <Col span="3">
                   左 hello world
                </Col>
                <Col span="21">
                   右
                </Col>
            </Row>
        )
    }
}