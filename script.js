const inputsAll=document.querySelectorAll('input');

$(document).ready(function(){
$('input').on({
    'keydown': function(e) {
        if (e.which === 38 || e.which === 40) {
            e.preventDefault();
        }
    },
    'input': function () {
        let cellValue = parseInt($(this).val());
        if(cellValue > 0 && cellValue < 10){
            let i,j;
            for(i = 0; i < 9; i++){
                for(j = 0; j < 9; j++){
                    let str = '#c' + i + j;
                    let tempVal = parseInt($(str).val());
                    if(tempVal == cellValue){
                        $(str).addClass('flick-colour');
                    }
                }
            }
        }
        if(isNaN(cellValue)){
            let i,j;
            for(i = 0; i < 9; i++){
                for(j = 0; j < 9; j++){
                    let str = '#c' + i + j;
                    $(str).removeClass('flick-colour');
                }
            }
        }
    },
    'blur': function () {
        let i,j;
        for(i = 0; i < 9; i++){
            for(j = 0; j < 9; j++){
                let str = '#c' + i + j;
                $(str).removeClass('flick-colour');
            }
        }
    }
});

});


function easy(){
    document.getElementById('easy-btn').disabled=true;
    inputsAll.forEach(input => {
        input.value='';
        input.disabled=false;
    });
    easySetup();

    document.getElementById('medium-btn').disabled=false;
    document.getElementById('hard-btn').disabled=false;
}

function easySetup(){

    let arr = ['00','06','16','17','25','26','27','28','30','31','32','34','36','37','38','43','45','47','50','51','52','53','54','55','56','58','60','61','62','63','65','66','67','68','83'];
    let value = [9,8,9,4,9,3,6,7,7,1,2,9,4,3,6,2,7,1,6,5,9,3,4,1,2,8,2,6,5,1,4,7,9,3,9];

    for(let i = 0; i < arr.length; i++){
        let cellId = 'c' + arr[i];
        document.getElementById(cellId).value = value[i];
        document.getElementById(cellId).disabled = true;
    }
}


function medium(){
    document.getElementById('medium-btn').disabled=true;

    inputsAll.forEach(input => {
        input.value='';
        input.disabled=false;
    });
    mediumSetup();

    document.getElementById('easy-btn').disabled=false;
    document.getElementById('hard-btn').disabled=false;
}
function mediumSetup(){

    let arr = ['03','04','07','12','17','18','20','22','23','25','31','33','36','41','47','55','56','60','61','64','66','70','78','81','84','85'];
    let value = [3,4,9,5,4,6,8,4,5,9,5,4,6,4,5,5,4,4,2,5,9,5,4,1,3,4];
    
    for(let i = 0; i < arr.length; i++){
        let cellId = 'c' + arr[i];
        document.getElementById(cellId).value = value[i];
        document.getElementById(cellId).disabled = true;
    }

}


function hard(){
    document.getElementById('hard-btn').disabled=true;

    inputsAll.forEach(input => {
        input.value='';
        input.disabled=false;
    });
    hardSetup();

    document.getElementById('easy-btn').disabled=false;
    document.getElementById('medium-btn').disabled=false;
}
function hardSetup(){

    let arr = ['02','05','10','15','22','25','33','34','47','48','51','52','54','68','74','85','86'];
    let value = [4,7,2,5,8,2,2,7,6,2,2,9,8,7,2,3,6];
    
    for(let i = 0; i < arr.length; i++){
        let cellId = 'c' + arr[i];
        document.getElementById(cellId).value = value[i];
        document.getElementById(cellId).disabled = true;
    }

}

//validate call
inputsAll.forEach(input => input.oninput=validate ); //attching oninput to all inputs
function validate(e){
    const classes=e.target.classList;
    const value=e.target.value;
    const rowElements=document.querySelectorAll('.'+CSS.escape(classes[0]));
    const colElements=document.querySelectorAll('.'+CSS.escape(classes[1]));
    const boxElements=document.querySelectorAll('.'+CSS.escape(classes[2]));
    if(value>0 && value<10){
        let check = true;
        rowElements.forEach(ele => {
            if(ele.value==value && ele!=e.target){
                e.target.value='';
                alert(`Value already present in ${classes[0]}`);
                check = false;
            }
        });
        if(check){
            colElements.forEach(ele => {
                if(ele.value==value && ele!=e.target){
                    e.target.value='';
                    alert(`Value already present in ${classes[1]}`);
                    return;
                }
            });
            check = false;
        }
        if(check){
            boxElements.forEach(ele => {
                if(ele.value==value && ele!=e.target){
                    e.target.value='';
                    alert(`Value already present in ${classes[2]}`);
                    return;
                }
            });
        }
    }
    else if(value = ''){}
    else{
        e.target.value='';
        alert("Enter a Number between 1 and 9 only!");
    }
}

function validateAll(){ 

    let sum = 0;
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            let cellId = 'c' + i + j;
            let val = parseInt(document.getElementById(cellId).value);
            sum += val;
        }
    }
    if(sum == 405){alert(`Game is valid:)`);} 
    else{alert(`Please complete the game before going for validation:)`);}
}

//highlighting call
inputsAll.forEach(input => input.onfocus=highlight ); // attaching onfocus event to all inputs
function highlight(e){
    const classes=e.target.classList;
    const rowElements=document.querySelectorAll('.'+CSS.escape(classes[0]));
    const colElements=document.querySelectorAll('.'+CSS.escape(classes[1]));
    const boxElements=document.querySelectorAll('.'+CSS.escape(classes[2]));
    rowElements.forEach(ele => {
        if(ele.disabled==false){ 
            ele.style.backgroundColor='#e6e6e6';
        }
    });
    colElements.forEach(ele => {
        if(ele.disabled==false){ 
            ele.style.backgroundColor='#e6e6e6';
        }
    });
    boxElements.forEach(ele => {
        if(ele.disabled==false) {
            ele.style.backgroundColor='#e6e6e6';
        }
    });
    if(e.target.disabled==false){
        e.target.style.backgroundColor='#2e4600';
    }
}

//Anti-Highlighting Call
inputsAll.forEach( input => input.onblur=antihighlight ); //attaching onblur to all inputs
function antihighlight(e){
    const classes=e.target.classList;
    const rowElements=document.querySelectorAll('.'+CSS.escape(classes[0]));
    const colElements=document.querySelectorAll('.'+CSS.escape(classes[1]));
    const boxElements=document.querySelectorAll('.'+CSS.escape(classes[2]));
    rowElements.forEach(ele => {
        if(ele.disabled==false) {
            ele.style.backgroundColor='initial';
            ele.style.color='initial';
        }
    });
    colElements.forEach(ele => {
        if(ele.disabled==false) {
            ele.style.backgroundColor='initial';
            ele.style.color='initial';
        }
    });
    boxElements.forEach(ele => {
        if(ele.disabled==false) {
            ele.style.backgroundColor='initial';
            ele.style.color='initial';
        }
    });
    if(e.target.disabled==false) {
        e.target.style.backgroundColor='initial';
        e.target.style.color='initial';
    }
}

window.onload=easy();