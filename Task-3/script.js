let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let str = "";
let array = Array.from(buttons);
array.forEach(button =>{
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            try{
            str = eval(str);
            if(isNaN(str))
            {
                throw new Error("")
            }
            input.value = str;
        }
        catch(error){
            input.value = "Syntax Error";
            setTimeout(()=>{
                input.value= "";
            },2000)

        }
        }
        else if(e.target.innerHTML == 'C'){
            str ="";
            input.value = str;
        }
        else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0,str.length-1);
            input.value = str;
        }
        else{
            str += e.target.innerHTML;
            input.value = str;
        }
    })
});