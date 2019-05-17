$(function () {
    $("#icerik").height($(document.body).height() * 4.4);
    scrollingElement = (document.scrollingElement || document.body)
    $(scrollingElement).animate({
        scrollTop: document.body.scrollHeight
    });
    var socket = io.connect('/');
    socket.emit('oda', 'Haliç');
    $("#send").click(function () {
        socket.emit('send message', { msg: $('#mesaj').val(), oda: $('#halic').text() });
        $('#mesaj').val('');
        $("#mesaj").focus();
        scrollBottom();
    });
    $('#mesaj').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            socket.emit('send message', { msg: $('#mesaj').val(), oda: $('#halic').text() });
            $('#mesaj').val('');
            $("#mesaj").focus();
            scrollBottom()
        }
        event.stopPropagation();
    });

    socket.on('send message', (data) => {
        $('#messages').append($('<li>').text(data));
        scrollBottom()
    });
    socket.on('Imessage', (data) => {
        $('#messages').append($('<li class="Imessage">').text(data));
        $('#messages').append($('<div class="clear">'));
    });













    function scrollBottom() {
        scrollingElement = document.getElementById('icerik');
        $(scrollingElement).animate({
            scrollTop: scrollingElement.scrollHeight
        });

    }
});



















function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
window.onclick = function (event) {
    if (event.target.className == 'modal-card-body') {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
}