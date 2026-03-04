//user interface

//Handling Elements
    //Read Elements

    let element=document.querySelector('h1')
    let btn = document.querySelector("button")
   
    //attach event handler
    btn.addEventListener('click',()=>{
        element.textContent="Hello..."
        element.style.color='red'
        element.style.fontSize='5rem'
    })


    //read all elements in form
    let form =document.querySelector('form');
    let username=document.querySelector("#username");
    let pass=document.querySelector("#password");
    let submit_button =document.querySelector("sb")