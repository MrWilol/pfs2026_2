async function loadCategorias(){
    var tabela = $("#tblDados")
    var cabecalho = "<tr>"
    cabecalho += "<th>ID</th>"
    cabecalho += "<th>Nome</th>"
    cabecalho += "</tr>"

    const resposta = await fetch("http://localhost:8001/category" , { method: "GET", header: {'content-type' : 'application/json'}})

    const dados =  resposta.json()
    tabela.html(cabecalho)
}

function loadProdutos(){

}