count=100
function tea(){
    setInterval(function(){
        
        document.getElementById('tea').style.height=count+'px';
        
    
        if(count<700){
            count++;
        }
        else{
            count=count-600;
        }
        
    },10)
}