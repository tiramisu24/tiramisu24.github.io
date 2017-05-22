function sendMail() {
    var link = "mailto:diane.z.zheng@gmail.com"
             + "?cc="
             + "&subject=" + escape("Diane I would love to talk to you")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}
