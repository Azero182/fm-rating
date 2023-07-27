document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var stars = document.getElementsByName("star");
    var valor;
    for (var i = 0; i < stars.length; i++) {
        if (stars[i].checked) {
            valor = stars[i].value;
            break;
        }
    }
    window.location.href = "thankyou.html?valor=" + encodeURIComponent(valor);
});