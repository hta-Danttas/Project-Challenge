var amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    if (nome.trim() !== "") {
        var listaNomes = document.createElement("li");
        listaNomes.textContent = nome;

        amigos.push(nome);
        document.getElementById("listaAmigos").appendChild(listaNomes);

        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor, digite um nome válido.");
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio!");
        return;
    }

    const sorteadoIndex = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[sorteadoIndex];

    const resultado = document.getElementById("resultado");
    resultado.textContent = `🎉 O amigo secreto sorteado é: ${sorteado}! 🎉`;
}
