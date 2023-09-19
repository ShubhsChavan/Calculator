
var buttons=document.getElementsByClassName("button");
var op1=0;
var op2=null;
var opr=null;
var display=document.getElementById("display");
for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        var val=this.getAttribute("value");
        if(val=='+'){
            opr='+';
            op1=parseFloat(display.textContent);
            display.innerText="";
        }else if(val=='-'){
            opr='-';
            op1=parseFloat(display.textContent);
            display.innerText="";
        }else if(val=='*'){
            opr='*';
            op1=parseFloat(display.textContent);
            display.innerText="";
        }else if(val=='/'){
            opr='/';
            op1=parseFloat(display.textContent);
            display.innerText="";
        }else if(val=='%'){
            opr='%';
            op1=parseFloat(display.textContent);
            display.innerText="";
        }else if(val=='AC'){
            display.innerText="";
        }else if(val=='DE'){
            display.innerText="";
        }else if(val=='='){
            op2=parseFloat(display.textContent);
            display.innerText=eval(op1+" "+opr+" "+ op2);
        }else{
            display.innerText+=val;
        }
    });
}
