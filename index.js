const container=document.getElementById("container");
const display=document.getElementById("display");
console.log(display);
const buttons=Array.from(document.getElementsByClassName("button"));
console.log(buttons);
buttons.map((button)=>{
    button.addEventListener("click",e=>{
        switch(e.target.innerText){
            case "=":
                try{
            display.innerText=eval(display.innerText);
                }
                catch(err) {
                    display.innerText=err.message;
                    
                }
            break;
            case "c":
               display.innerText="";
                break;
                case "←":
                    display.innerText=display.innerText.slice(0,-1);
                    break;
                    default:
                        display.textContent+=e.target.textContent;

        }
        
    })
})