import React from 'react'
import { Row,Col } from 'antd';
import "./index.css"
import Util from '../../utils/utils'
import axios from '../../axios/index'
export default class Header extends React.Component{
    state={}
    componentWillMount(){
        this.setState({
            userName:"abchen"
        })
        //设置一个定时器，每隔一秒获取时间
        setInterval(()=>{  
          let sysTime=Util.formateDate(new Date().getTime())  //传入时间戳
          this.setState({  //将数据存入
            sysTime
          })
        },1000)

        //调用天气接口
        this.getWeatherAPIData();
    }

    getWeatherAPIData(){
        let city='441300'
        axios.jsonp({
            url:'https://restapi.amap.com/v3/weather/weatherInfo?city='+city+'&key=39f7f1cd39b9b0cfdc06514009082a72',

        }).then((res)=>{  //promis接收参数，通过 .then的参数
            if(res.status==="1"){
                // console.log(res.lives)
                /**
                adcode: "441300"
                city: "惠州市"
                humidity: "73"
                province: "广东"
                reporttime: "2018-12-16 13:11:25"
                temperature: "16"
                weather: "阴"
                winddirection: "北"
                windpower: "5" 
                 * */
                let data = res.lives;
                // console.log(data)
                // console.log(data[0].weather)
                this.setState({
                    weather:data[0].weather,
                    city:data[0].city,
                    winddirection:data[0].winddirection,
                })   
            }    
        })
    }


    render(){
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                       <span>欢迎，{this.state.userName}</span>
                       <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                    首页
                    </Col>
                    <Col span="20" className="wheather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="wheather-detail">{this.state.city}·{this.state.weather}</span>
                    </Col>    
                </Row>
            </div>
        )
    }
}