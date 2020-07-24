const bell = document.querySelector('label');

const container = document.querySelector('.container');

function clicked() {
    if(bell.className == "fa fa-bell")
         bell.className = "fa fa-times";
    else
         bell.className = "fa fa-bell";
}