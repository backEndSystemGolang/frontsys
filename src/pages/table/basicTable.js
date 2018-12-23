import React from 'react';
import { Card, Table, Modal, Button, message} from 'antd';
import axios from './../../axios/index'
import Utils from './../../utils/utils';

// import axios from 'axios'  //不封装的请求数据
export default class BasicTable extends React.Component{

    state={
        dataSource2:[]
    }

    params = {
        page:1
    }

    componentDidMount(){
        const data = [  //01.填充的本地假数据，共三条
            {
                id:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克公园',
                time:'09:00'
            },
            {
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
        ]  //01.填充的本地假数据结束，共三条
          
        data.map((item,index)=>{  //item是每条记录的对象
            item.key = index;  //data得到动态key属性
        })
        this.setState({
            dataSource: data    
        })
        this.request();  //调用请求
    }

    // 动态获取mock数据
    // 动态获取mock数据
    // 一.封装请求
    request = ()=>{
        let _this = this;
        axios.ajax({        //01，传参
            url:'/table/list',
            data:{
                params:{
                    page:this.params.page  //请求默认请求第一页
                },
                isShowLoading:true
            }
        }).then((res)=>{   //02.接收封装返回的数据
            if(res.code ===0){
                res.result.list.map((item, index) => {
                    item.key = index;
                })
                this.setState({
                    dataSource2:res.result.list,

                    selectedRowKeys:[],  //删除刷新之后让多选框不选中
                    selectedRows:null,   ////删除刷新之后让多选框不选中
                // /** 03.分页功能实现    
                    pagination: Utils.pagination(res,(current)=>{  //res返回的结果，current点击下一要获取的页码
                        _this.params.page = current;               //跳转到第二页
                        alert(current)
                        this.request();
                    })
                //  */    
                })
            }
        })
    }
    /** 
    // 二.不封装请求
    request=()=>{
        let baseUrl='https://www.easy-mock.com/mock/5c1dca6adc30820d5f490185/faontsysapi'
        let cat ='/table/list'
        axios.get(baseUrl+'/table/list').then((res)=>{
            if(res.status=='200'&& res.data.code==0){
                this.setState({
                    dataSource2:res.data.result   //请求成功后赋值然后渲染数据
                })
            }
        })
    }
  */
    onRowClick = (record,index)=>{  //record行数据，index点击的索引
        let selectKey = [index];  //获取index索引
        Modal.info({
            title:'信息',
            content:`用户名：${record.userName},用户爱好：${record.interest}`
        })
        this.setState({
            selectedRowKeys:selectKey,  //保存起来
            selectedItem: record
        })
    }

    // 多选执行删除动作
    handleDelete = (()=>{
        let rows = this.state.selectedRows;  //获取选中的行ids
        let ids = [];
        rows.map((item)=>{
            ids.push(item.id)
        })
        Modal.confirm({
            title:'删除提示',
            content: `您确定要删除这些数据吗？${ids.join(',')}`, //用模板语法把id打印出来
            onOk:()=>{
                message.success('删除成功');
                this.request(); //删除成功刷新页面
            }
        })
    })

    render(){
        const columns = [  //基础表格，02.列，即表头
            {
                title:'id',
                key:'id',
                dataIndex:'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                render(sex){
                    return sex ===1 ?'男':'女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state){
                    let config  = {
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ]
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type:'radio',
            selectedRowKeys
        }
        const rowCheckSelection = {  //复选框事件
            type: 'checkbox',
            selectedRowKeys,  //当前选中哪些行
            onChange:(selectedRowKeys,selectedRows)=>{ //
                this.setState({
                    selectedRowKeys,
                    selectedRows  //用于 handleDelete 按钮点击获取id,做操作就可以遍历selectedRows
                })
            }
        }
        return (
            <div>
                <Card title="基础表格">
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据渲染表格-Mock" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-单选" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record,index) => {  //onRow获取详情属性
                            return {
                                onClick:()=>{      //点击行获取详情
                                    this.onRowClick(record,index);
                                }
                            };
                        }}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-复选框" style={{ margin: '10px 0' }}>
                    <div style={{marginBottom:10}}>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table
                        bordered
                        rowSelection={rowCheckSelection}   
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-表格分页" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        );
    }
}