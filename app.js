// importando as informações do arquivo "freelancers.js"
import freelancers from './freelancers.js';

// essa função vai navegar dentro do arquivo dos freelancers e para cada um deles ela vai criar uma div, e dentro terá a div de perfil, a div de sobre o h2 para o nome e o p para a descrição
function createFreelancerDivs(freelancers) {
    const container = document.getElementById('lista-pessoas');

    freelancers.forEach(freelancer => {

        // criei uma constante para guarar o elemento div, este vai ser o card do profissional
        const div = document.createElement('div');
        // adicionei uma classe na div, para que eu possa estilizar
        div.classList.add('freelancer');
        // adicionei um atributo que vai armazenar o nome, e o outro vai armazenar o cargo no elemento div
        div.setAttribute('data-nome', freelancer.nome);
        div.setAttribute('data-nome', freelancer.cargo);

        // criei a div da foto de perfil
        const foto = document.createElement('div');
        // adicionei a classe
        foto.classList.add("perfil");
        // esta linha faz com que o perfil tenha uma cor dependendo de freelancer é, esta informação tá no freelancers.js e se chama bgColor, ela pode armazenar nome de cores ou códigos hexadecimal
        foto.style.backgroundColor = freelancer.bgColor;

        // criei a div sobre, para que dentro eu coloque o nome e a descrição
        const sobre = document.createElement("div");
        sobre.classList.add("sobre");

        // criei o h2 contendo o nome do freelancer
        const nome = document.createElement('h2');
        nome.textContent = freelancer.nome;
        
        // criei o p contendo a descrição do freelancer
        const descricao = document.createElement('p');
        descricao.textContent = freelancer.descricao;

        // Esta parte é muito importante e eu quase quebrei meu notebook pq não lembrei desse cocô

        // adicionei a div de foto ao elemento pai, a DIV (passa até um respeito esse nome... ⭐DIV⭐)
        div.appendChild(foto);

        // adicionei a div "sobre" ao elemento pai DIV
        div.appendChild(sobre);

        // agora eu não adiono mais os elementos a grande div, adiciono ao elemento sobre, para que a estilização fique correta lá no css
        // adicionei o nome a div sobre
        sobre.appendChild(nome);

        // adicionei a descrição a div sobre
        sobre.appendChild(descricao);


        // agora que a div do freelancer está pronta, podemos adiciona-la ao elemneto maior que é a div freelancers (no plural) e esta gambiarra irá se repetir até que o código passe por cada um dos objetos do meu array e crie um card para cada freelancer
        container.appendChild(div);
    });
}

// chamei a funçã para que seja criado os cards para os freelancers
createFreelancerDivs(freelancers);

// Sempre que o usuário degitar alguma letra esta função será chamada e irá filtrar os resultados, pesquisando por freelancers por nome ou por cargo/area de atuação
window.filtrarDivs = function() {
    // puxando o valor digitado no input
    const input = document.getElementById('busca').value.toLowerCase();
    // criei uma constante para salvar os cards
    const divs = document.querySelectorAll('.freelancer');

    // para cada card ele faz a verificação de correspondencia, acho que pode se dizer assim
    divs.forEach(div => {
        // puxa o nome e o cargo de freelancer
        const nome = div.getAttribute('data-nome').toLowerCase();
        const cargo = div.getAttribute('data-nome').toLowerCase();

        // este if verifica se o valor digitado no input corresponde com o nome ou com o cargo de algum profissional
        if (nome.includes(input) || cargo.includes(input)) {
            // se corresponder, ele vai adicionar o display flex para que esta div fique visivel para o usuário
            div.style.display = 'flex';
        } else {
            // este else é muito importante tmabém, pois é ele que vai fazer os outros cards sumirem quando a busca encontrar um freelancer que corresponde a busca
            div.style.display = 'none';
        }
    });
}