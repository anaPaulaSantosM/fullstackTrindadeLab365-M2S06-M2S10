
import { React } from 'react';
import './colapse.css'




export const Colapse = () => {
    return (
        <>

            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Os produtos são produzidos por encomenda?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Sim. Todos os produtos são produzidos sob encomenda.</strong> Cada produto é um novo projeto e tratamos todas as encomendas como grande parte de sonhos dos nossos clientes. Por isso, trabalhamos de acordo com a intesão do momento que o cliente vai proporcionar em seus eventos.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Qual o prazo de produção?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>O prazo de produção varia de acordo com a encomenda.</strong> Tratamos todos os pedidos individualmente, desde o pré-atendimento, até o fechamento das artes e pacotes. Você saberá do prazo assim que informar os produtos, as quantidades e o tema. 
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            A DrPapel entrega ou envia os produtos pelos Correios?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Atualmente, fazemos postagem via Correios somente em casos excepcionais.</strong> A retirada dos produtos é por conta do cliente e pode ser feita pessoalmente ou podemos conversar para verificar a melhor forma de atender o seu caso. Nenhum produto tem valor de frete (entrega) incluido, visto que a DrPapel não trata da responsabilidade de retirada do produto em nosso ateliê.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


