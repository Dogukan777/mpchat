

function openNav() {
    document.getElementById("mySidenav").style.width = "215px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


//window.onclick = function (event) {
    //if (event.target.className == 'icerik') {
        //document.getElementById("mySidenav").style.width = "0";
        //document.getElementById("main").style.marginLeft = "0";
   // }
//}





var close = document.getElementsByClassName('modal-close')[0];
close.onclick = function () {
    modalim.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target.className == 'modal-background') {
        modalim.style.display = 'none';
    }
}
function onay(adres) {

    modalim.style.display = 'block';
    var onayButton = document.getElementById('onayButton');
    onayButton.onclick = function () {
        location.href = adres;
    }
    var vazgec = document.getElementById('vazgec');
    vazgec.onclick = function () {
        location.href = '/hesap';
    }
}