const numero = document.getElementById("numero");
        const texto = document.getElementById("text");
        const btn = document.getElementById("send");
        const link = document.getElementById("link");
        const link2 = document.getElementById("link2");
        btn.addEventListener("click", function () {
            link2.style.display = "inline-block"
            link.style.display = "inline-block"
            link.value ="https://api.whatsapp.com/send?phone="+numero.value+"&text="+texto.value;
        })