var modal = document.getElementById("modal");

var novoprod = document.getElementById("novoprod");

var span = document.getElementsByClassName("fechar")[0];

novoprod.onclick = function() {
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
    const form = document.getElementById('formNovoProd');
    const table = document.getElementById('tabelaProdutos').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const desc = document.getElementById('desc').value;
        const custo = document.getElementById('custo').value;
        const valor = document.getElementById('valor').value;
        const newRow = table.insertRow();

        const cellNome = newRow.insertCell(0);
        const cellDesc = newRow.insertCell(1);
        const cellCusto = newRow.insertCell(2);
        const cellValor = newRow.insertCell(3);
        const cellAcoes = newRow.insertCell(4);

        cellNome.textContent = nome;
        cellDesc.textContent = desc;
        cellCusto.textContent = custo;
        cellValor.textContent = valor;
        cellAcoes.textContent = '';

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', () => {
            document.getElementById('nome').value = cellNome.textContent;
            document.getElementById('desc').value = cellDesc.textContent;
            document.getElementById('custo').value = cellCusto.textContent;
            document.getElementById('valor').value = cellValor.textContent;
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