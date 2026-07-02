const { CommandSucceededEvent } = require("mongodb");

function alertFunction(){
    alert("Alert is alerted.");
}

function addDOM(){
    const body = document.querySelector("body");
    const para = document.createElement("p");
    para.textContent = "Hi, I'm red."
    para.style.color = "red";
    body.appendChild(para);

    const h3 = document.createElement("h3");
    h3.textContent = "I'm a blue h3!";
    h3.style.color = "blue";
    body.appendChild(h3);

    const div1 = document.createElement("div");
    const h1 = document.createElement("h1");
    const para2 = document.createElement("p");
    h1.textContent = "I'm in a div.";
    para2.textContent = "ME TOO!";
    div1.setAttribute("style", "background-color: blue; border: black solid 3px");
    div1.appendChild(h1);
    div1.appendChild(para2);
    body.appendChild(div1);

    const btn = document.querySelector("button")
    btn.addEventListener("click", function (e){
        e.target.style.background="green";
        console.log(e);
    });

    const input = document.querySelector(".input")
    const output = document.querySelector(".output")
    input.addEventListener("input", (e) => {
        const currentString = e.target.value; 
        output.textContent = `You have written ${currentString}`;
    })

    const link = document.querySelector("a");
    link.addEventListener("click",(e) => {
        console.log("Clicked");
        e.preventDefault();
    })
    
}



addDOM();