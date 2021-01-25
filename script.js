const button = document.querySelector("#button");
const dialogBox = document.querySelector("#dialog-box");

button.addEventListener("click", () =>{
    if(dialogBox.classList.contains('shown-dialog-box')){
    dialogBox.classList.remove('shown-dialog-box');
    dialogBox.classList.remove('dialog-box-animation');
    button.classList.remove('button-animation-in');
    }else {
        dialogBox.classList.add('shown-dialog-box');
        dialogBox.classList.add('dialog-box-animation');
        button.classList.add('button-animation-in');
    }

});
