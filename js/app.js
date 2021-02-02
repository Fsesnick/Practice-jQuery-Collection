// 1. Adicione uma tag "featured" ao segundo item da lista:
   // Anexe um novo elemento span contendo a palavra "Featured" ao item da lista
$('li').eq(1).append('<span>Featured</span>');
   // Adicione uma classe de "featured" ao novo elemento span.
$('li span').addClass('featured');
// 2. Adicione uma classe de "new" ao último item da lista. Você pode ir até o último item ou encontrar um método jQuery que o ajude a selecionar o último item da lista.
$('li').eq(4).addClass('new');
$('li:last').addClass('new');
$('li').last().addClass('new');
// 3. Adicione um atributo a cada link para que todas as tags âncora sejam abertas em uma nova guia.
$('a').attr('target','_black');
// 4. Selecione e imprima o índice e o texto de cada tag âncora para o console
$('a').each(function(index,item){
  console.log(index, $(item).text());
});
// 5. Refatore a pergunta nº 4 usando a palavra-chave 'this'. 