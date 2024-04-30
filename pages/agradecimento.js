function pegarnota() {
    let nota  = localStorage.getItem("nota")

    let paragrafonota = document.querySelector(".paragrafo_nota")
    paragrafonota.innerHTML = `Você selecionou ${nota} de 5`
}

pegarnota()