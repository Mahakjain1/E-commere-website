
let count=10
function random1(){
    
    setInterval(function(){
        var num = Math.floor(Math.random() * 634500).toString(16).padStart(6,0);
        document.getElementById('demo').style.color="#"+ num;
        document.getElementById('demo').style.fontSize=count+'px';
        if(count<200){
            count++;
        }
        else{
            random2();
        }  
    },100)
}
function random2(){
        setInterval(function(){
        var num = Math.floor(Math.random() * 634500).toString(16).padStart(6,0);
        document.getElementById('demo').style.color="#"+ num;
        document.getElementById('demo').style.fontSize=count+'px';
        
        if(count>20){
            count--;
        }
        else{
            random1()
        }
        
    },100)
}