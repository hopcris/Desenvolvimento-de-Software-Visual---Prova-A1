import { useState } from "react";

function Home(){

    return(
        <div>
            <h1>
                Com as opções a cima cima você pode escolher entre:
            </h1>
            <div>
                <p>
                    Home - serve para voltar a pagina inicial
                </p>
                <p>
                    Cadastrar Tarefas - serve para cadastrar novas tarefas
                </p>
                <p>
                    Listar todas as Tarefas - serve para listar todas as tarefas e alterar seu status.
                    A função Alterar esta somente nela 
                </p>  
                <p>
                    Listar apenas Tareas concluidas - serve para listar apenas as tarefas concluidas
                </p>
                <p>
                    Lisstar apenas Tarefas nao concluidas - serve para listar apenas as tarefas nao concluidas
                </p>
            </div>
              
        </div>
    )

}

export default Home;