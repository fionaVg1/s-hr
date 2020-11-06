const dateUtil = {
    dateFormatToAgo: function(date){
        let nowTime = new Date().getTime();
        let diffTime = parseInt((nowTime-date.getTime())/1000);
        if(diffTime<=0){
            throw 'date不符合规范，应该是个过去时间'
        }
        let result;
        if(diffTime < 60*10){
            result = '刚刚';
        }else if(diffTime<60*60){
            result = Math.floor(diffTime/60);
            result = result + '分钟前';
        }else if(diffTime<60*60*24){
            result = Math.floor(diffTime/60/60);
            result = result+'小时前';
        }else if(diffTime<60*60*24*30){
            result = Math.floor(diffTime/60/60/24);
            result = result+'天前';
        }else{
            result = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();            
        }
        return result;
    }
}
export default dateUtil;