document.addEventListener("DOMContentLoaded",()=>{
    const calculatebtn=document.getElementById("calculateBtn");
    const amountinput=document.getElementById("amount");
    const intrestinput=document.getElementById("interest");
    const loanterm=document.getElementById("years");
    //loan summary
    const monthlyinput=document.getElementById("monthly");
    const totalpayment=document.getElementById("total");
    const totalintrest=document.getElementById("totalInterest");
    function calculateloan(){
        const principal=parseFloat(amountinput.value);
        const intrest=parseFloat(intrestinput.value)/ 100 / 12;
        const loantermyears=parseFloat(loanterm.value)*12;
    
    if(isNaN(principal) || isNaN(intrest) || isNaN(loantermyears)){
        alert("Enter Valid numbers");
        return;
    }
    const x=Math.pow(1+intrest,loantermyears);
    const monthly=(principal*x*intrest)/(x-1);
    if(isFinite(monthly)){
        const total=monthly*loantermyears;
        const totalintrest=total-principal;
        animatedvalues(monthlyinput,0,monthly,1000);
        animatedvalues(totalpayment,0,total,1000);
        animatedvalues(totalintrest,0,totalintrest,1000);

    }
}
function animatedvalues(element,start,end,duration){
const starttime=performance.now();
function update(currenttime){
    const elapsed =currenttime-starttime;
    const progress=Math.min(elapsed/duration ,1);
    const current=start+(end-start)*progress;
    element.textContent=current.toFixed(2);
    if(progress < 1){
        requestAnimationFrame(update);
}

}
requestAnimationFrame(update);
}
    calculatebtn.addEventListener('click',calculateloan);
})
