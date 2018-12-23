export default {  
    formateDate(time){ //01.封装传入时间戳返回字符串
        if(!time)return '';
        let date =new Date(time)
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'
        +date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
    },

    //02.封装分页
    pagination(data,callback){ //data调用一个接口返回数据，当前是属于第几页，共有多少条数据
                           //callback 点击下一页触发 callback回调一个函数
        return{
            onChange:(current)=>{   //页码改变回调,切换页面到底是到哪一页
                callback(current)  //执行callback,告诉业务代码到底是切换到第几页
            },
            current:data.result.page,       
            pageSize:data.result.page_size,       
            total:data.result.total,
            showTotal:()=>{
                return `共${data.result.total}条`
            },
            showQuickJumper:true       
        }
    }

}