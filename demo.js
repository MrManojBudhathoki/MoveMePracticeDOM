let div = document.querySelector(".div");
let moveAmount = 10;
let x = 0;
let y = 0;


document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                div.style.backgroundColor = "blue";
                div.textContent = "let's gooo😋";
                div.style.color = "white";
                break;
        
            case "ArrowDown":
                y += moveAmount;
                div.style.backgroundColor = "blue";
                div.textContent = "let's gooo😋";
                div.style.color = "white";
                break;

            case "ArrowLeft":
                x -= moveAmount;
                div.style.backgroundColor = "blue";
                div.textContent = "let's gooo😋";
                div.style.color = "white";
                break;
                
            case "ArrowRight":
                x += moveAmount;
                div.style.backgroundColor = "blue";
                div.textContent = "let's gooo😋";
                div.style.color = "white";
                break;    
        }
        console.log(event)

        div.style.top = `${y}px`;
        div.style.left = `${x}px`;
   
    }
    
document.addEventListener("keyup", event => {
    if(event.key.startsWith("Arrow")){
        div.style.backgroundColor = "aqua";
        div.textContent = "Move me☹️";
        div.style.color = "black";
    }
}
)


})






