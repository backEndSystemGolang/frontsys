import React from 'react'
import MenuConfig from './../../config/menuConfig'
import './index.css'
import { Menu} from 'antd';
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component{
    componentWillMount(){
        const menuTreeNode=this.renderMenu(MenuConfig)

        this.setState({  //02.获取数据之后，通过 this.setState()方法把数据绑定进去
                         //调用 this.setState之后就会调用 render()渲染数据 
            menuTreeNode
        })
    }
    //01.使用递归得定义一个函数，用于菜单熏染
    /** 
    renderMenu(){  //事件绑定不适合这个方式，this操作不方便
    }*/
    renderMenu=(data)=>{   
          console.log(data)
          return data.map((item)=>{  //使用map遍历
             if(item.children){ //有children子节点需要再一次遍历
                 return (
                     <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}                            
                     </SubMenu>
                 )
             }   
             return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
          })     
    }
    render(){
        return(
            <div>
                <div className="logo">
                   <img src="/assets/logo-ant.svg" alt="首页"></img>
                   <h1>frontsys</h1> 
                </div>
                <Menu theme="dark">
                {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu> */}
                 {/* {this.setState.menuTreeNode} */}
                 { this.state.menuTreeNode }
                </Menu>
            </div>
        )
    }
}