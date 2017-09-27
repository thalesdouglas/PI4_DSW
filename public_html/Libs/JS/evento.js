$(document).ready(function () {

    function carregaProdutos() {
        $.ajax({
            url: 'produtos.json',
            method: 'GET',
            success: function (data) {
                produtos = data;
                geraProdutos();
            }
        });
    }

    function geraProdutos() {
        for (produto of produtos) {
            $('#produtos').append(
                    '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 card_config">\n\
                            <div class="card produtos">\n\
                                <img class="card-img-top img-responsive" src=' + produto.foto + '>\n\
                                <div class="card-title">\n\
                                    <p> ' + produto.nome + '</p>\n\
                                    <p> R$ ' + produto.preco + '</p>\n\
                                </div>\n\
                                <div class="comprar">\n\
                                    <button type="submit" id="' + produto.id + '" onclick="descricao(this.id)" class="btn btn-primary detalhes">Mais detalhes</button>\n\
                                </div>\n\
                            </div>\n\
                    </div>');
        }
    }
    carregaProdutos(); 
    
});
function descricao(id) {
    $('.rowCarousel').html('');
    $('#produtos').html('');
    $('#css').html('<link href="Libs/descricao.css" rel="stylesheet" type="text/css"/>');
    for (produto of produtos) {
        if (produto.id == id) {
            $('#produtos').append(
                    '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">\n\
                    <div class="imgDesc">\n\
                        <img class="imgdescricao img-responsive" src=' + produto.foto + '>\n\
                    </div>\n\
                </div>\n\
                <div class="divCompra col-xs-12 col-sm-12 col-md-6 col-lg-6">\n\
                    <div class="produtoNP">\n\
                        <h1 class="h1Nome">' + produto.nome + '</h1>\n\
                        <h1 class="h1Preco"> R$ ' + produto.preco + '</h1>\n\
                    </div>\n\
                    <div class="comprar">\n\
                        <button type="button" class="btn-success">Comprar</button>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
            <div class="row linha">\n\
                <div class=" borda col-xs-12 col-sm-12 col-md-6 col-lg-6">\n\
                    <div class="divDescricao">\n\
                        <h1>Descrição</h1>\n\
                    </div>\n\
                    <div class="pDescricao">\n\
                        <p>' + produto.descricao + '</p>\n\
                    </div>\n\
                </div>\n\
                <div class="borda bordaLateral col-xs-12 col-sm-12 col-md-6 col-lg-6">\n\
                    <div class="divEspecificacao">\n\
                        <h1>Especificações</h1>\n\
                    </div>\n\
                    <div class="pEspecificacao">\n\
                        <p>Marca:   ' + produto.marca + '</p>\n\
                        <p>Modelo:   ' + produto.modelo + '</p>\n\
                        <p>Cor:   ' + produto.cor + '</p>\n\
                        <p>Gênero:   ' + produto.genero + '</p>\n\
                    </div>\n\
                </div>\n\
            </div>');
        }
    }
}

function direcionaCarrinho() {
     window.location.href = "./carrinho.html"; 
}

