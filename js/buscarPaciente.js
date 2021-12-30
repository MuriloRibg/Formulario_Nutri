let burcarPaciente = document.querySelector("#buscar-paciente")

burcarPaciente.addEventListener("click", () => {
    var xml = new XMLHttpRequest() //é um objeto do JS responsável por fazer requisições HTTP

    xml.open("GET", "http://api-pacientes.herokuapp.com/pacientes")

    xml.addEventListener("load", () => {
        var resposta = xml.responseText //E para acessarmos os dados da resposta
        var paciente = JSON.parse(resposta) //transformando em JSON 

        paciente.forEach((paciente) => {
            adicionaPacienteNaTabela(paciente)
        });
    })
    xml.send()
})