

const mycheckbox = document.getElementById("mycheckbox");
const myvisa = document.getElementById("myvisa");
const mymaster = document.getElementById("mymaster");
const myrupay = document.getElementById("myrupay");
const mysubmit = document.getElementById("mysubmit");
const result = document.getElementById("result");
const paymentresult = document.getElementById("paymentresult");


mysubmit.onclick = function(){

    if(mycheckbox.checked){
        result.textContent=`you are subscribed`;  
    }
    else{
        result.textContent=`you are not subscribed`
    }

    if(myvisa.checked){
        paymentresult.textContent = `you selected visa card`;
    }
    else if(mymaster.checked){
        paymentresult.textContent = `you selected master card`;
    }
    else if(myrupay.checked){
        paymentresult.textContent = `you selected rupay card`;
    }
}