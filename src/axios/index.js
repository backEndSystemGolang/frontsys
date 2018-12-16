import Jsonp from 'jsonp'
//对公用方法封装,可以控制错误信息的报错，以及拦截
export default class Axios{
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
}