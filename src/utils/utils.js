export default {  
    formateDate(time){ //传入时间戳返回字符串
        if(!time)return '';
        let date =new Date(time)
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'
        +date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
    }
}