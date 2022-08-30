var display=document.getElementById("display");
var buttons=document.getElementsByClassName('btn');
var operand1=0;
var operand2=null;
var operator=null;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        if (value=='AC'){
            window.location.reload();
        }    
        //     display.innerHTML='';
        //     var operand1=0;
        //     var operand2=null;
        //     var operator=null;
        //     return
        
        // }
        else if (value=="%" ||  value=="/" || value=="*" || value=="-" || value=="+"){
            operand1=parseFloat(display.textContent);
            operator=value;  
            display.innerHTML=value;
        }
        else if(value=="="){
            operand2=parseFloat(display.textContent);
            ans=eval(''+operand1+operator+operand2+'');
            display.innerHTML=ans;
        }
        
        else {
            dis=display.innerHTML;
            if (dis=="%" ||  dis=="/" || dis=="*" || dis=="-" || dis=="+"){
                display.innerHTML=value;
            }
            else{
                display.innerHTML+=value;
            }
            
        }    
        
    })
    
}

