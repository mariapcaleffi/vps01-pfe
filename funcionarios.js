var modal = document.getElementById("modal");

var novofunc = document.getElementById("novofunc");

var span = document.getElementsByClassName("fechar")[0];

novofunc.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formNovoFunc');
    const table = document.getElementById('tabelaFuncionarios').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const cpf = document.getElementById('cpf').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const logradouro = document.getElementById('logradouro').value;

        const newRow = table.insertRow();

        const cellNome = newRow.insertCell(0);
        const cellCpf = newRow.insertCell(1);
        const cellEmail = newRow.insertCell(2);
        const cellTelefone = newRow.insertCell(3);
        const cellLogradouro = newRow.insertCell(4);
        const cellAcoes = newRow.insertCell(5);

        cellNome.textContent = nome;
        cellCpf.textContent = cpf;
        cellEmail.textContent = email;
        cellTelefone.textContent = telefone;
        cellLogradouro.textContent = logradouro;
        cellAcoes.textContent = '';

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', () => {
            document.getElementById('nome').value = cellNome.textContent;
            document.getElementById('cpf').value = cellCpf.textContent;
            document.getElementById('email').value = cellEmail.textContent;
            document.getElementById('telefone').value = cellTelefone.textContent;
            document.getElementById('logradouro').value = cellLogradouro.textContent;
            modal.style.display = "block";
            table.deleteRow(newRow.rowIndex - 1);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => {
            table.deleteRow(newRow.rowIndex - 1);
        });

        cellAcoes.appendChild(editButton);
        cellAcoes.appendChild(deleteButton);

        form.reset();
        modal.style.display = "none";
    });
});