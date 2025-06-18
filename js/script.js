buttonEnviar.addEventListener("click", validaFormulario)

function validaFormulario() {
    if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("tel").value != "") {
        alert("Prontinho! você receberá as novidades por email.")
        form.reset();
    } else {
        alert("Por favor, preencha os campos nome, email e telefone!")
    }
}

const btnMenu = document.getElementById('btnMenu');
  const menu = document.getElementById('menu');
  const links = menu.querySelectorAll('a');

  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
});

 links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  });
