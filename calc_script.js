var value=0;
var operation="";

function clearResult() {
    const res=document.querySelector(".result");
    value=0;
    operation="";
    res.innerText=value;
} 

function deleteNum() {
    const res=document.querySelector(".result");
    let num=res.innerText;
    if (num/10<1) {
        res.innerText=0;
        return;
    }
    let newNum="";
    for (let i=0; i<num.length-1; i++)
        newNum+=num[i];
    res.innerText=newNum;
    value=newNum;
    operation="";
}

function reciprocal() {
    const res=document.querySelector(".result");
    let num=res.innerText;
    value=1/num;
    res.innerText=value;
    operation="";
}

function square() {
    const res=document.querySelector(".result");
    let num=res.innerText;
    value=num*num;
    res.innerText=value;
}

function squareRoot() {
    const res=document.querySelector(".result");
    let num=res.innerText;
    value=Math.sqrt(num);
    res.innerText=value;
}

function enterNum(inp) {
    const res=document.querySelector(".result");
    zinc=res.innerText;

    if (zinc==0){
        value=inp;//value=81/9
        res.innerText=value;
    }

    else if (operation=="over") {
        value=inp;
        res.innerText=value;
        operation="";
    }

    else if (operation=="mul") {
        value=value*inp;
        res.innerText=inp;
        operation="";
    }

    else if (operation=="div") {
        value=value/inp;
        res.innerText=inp;
        operation="";
    }

    else {
        value=value*10+inp;
        res.innerText=value;
    }
}

function divide() {
    const res=document.querySelector(".result");
    value=res.innerText;
    operation="div";
}

function multiply() {
    const res=document.querySelector(".result");
    value=res.innerText;
    operation="mul";
}

function showResult() {
    const res=document.querySelector(".result");
    res.innerText=value;
    operation="over";
}