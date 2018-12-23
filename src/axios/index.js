import Jsonp from 'jsonp'
//对公用方法封装,可以控制错误信息的报错，以及拦截
import axios from 'axios'
import { Modal } from 'antd';
export default class Axios{
    //01.封装天气接口
    static jsonp(options){ //传入options对象控制参数
        //Promise 接收一个回调,resolve表示接口调用成功，reject项目接口调用失败,第三个参数是回调方法
        return  new Promise((resolve,reject)=>{
            Jsonp(options.url,{
                param:'callback'
            },function(err,response){
            //    debugger;
               if(response.status==="1"){
                // console.log(response)   
                // console.log(response.lives)   
                resolve(response);   //成功之后把数据返回出去
               }else{
                   reject(response.info) //失败之后把数据返回出去
               }

            })
        });
    }


    //02.封装表格数据调用
    static ajax(options){  //使用 Promise主要是为了调用的时候用then 接收值
                           //Promise 接收一个回调函数,回调函数里面有两个参数 ：resolve接收成功返回,reject出错调用
        // console.log(options)
        let loading;
        if(options.data && options.data.isShowLoading !== false){  //有些接口不许要loading:isShowLoading为false不执行loading
            loading = document.getElementById('ajaxLoading')
            loading.style.display='block'
        }
        let baseUrl='https://www.easy-mock.com/mock/5c1dca6adc30820d5f490185/faontsysapi'
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseUrl,
                timeout:5000,
                params:(options.data && options.data.params)||'',   //options.data 有数据才取 options.data.params，如果没有取空
            }).then((response)=>{   //最后通过 .then接收,参数接收响应值,200接口接口成功
                
                if(options.data && options.data.isShowLoading !== false){  //关闭loading
                    loading = document.getElementById('ajaxLoading')
                    loading.style.display='none'
                }
                if(response.status===200){
                    // debugger;
                    let res =response.data;
                    if(res.code===0){
                        resolve(res)   //最后把数据抛出去
                    }else{
                         Modal.info({
                             title:"提示",
                             content:'请求数据出错',
                         })   
                    }
                }else{
                    reject(response.data)
                }
            })         
        });
    }

}