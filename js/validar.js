window.addEventListener('load', function() {
    document.getElementById("enviar").addEventListener('click', function() {
        var quiz = document.getElementById("quiz").value;
        var trabajo = document.getElementById("trabajo").value;
        var parcial = document.getElementById("parcial").value;
        var resultado = quiz * 0.05 + trabajo * 0.05 + parcial * 0.2;
        document.getElementById("resultado").innerHTML = "Su nota es: " + resultado;
        return false;
    }, false);
}, false);