import { useEffect, useState } from "react";
import Tarefa from "../Models/Tarefa";
import axios from "axios";

function ListarTarefasNaoConcluidas(){
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
      console.log("Componente carregado!");
      buscarTarefasNaoConcluidasAPI();
    }, []);

    async function buscarTarefasNaoConcluidasAPI() {
        try {
        const resposta = await axios.get(
          "http://localhost:5022/api/tarefas/naoconcluidas"
        );
        setTarefas(resposta.data);
      } catch (error) {
        console.log("Erro na requisição: " + error);
      }
    }


    return (
      <div>
        <h1>Listar apenas tarefas concluidas</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Descrição</th>
              <th>Criado Em</th>
              <th>Alterar</th>
            </tr>
          </thead>
          <tbody>
            {tarefas.map((tarefa) => (
              <tr key={tarefa.tarefaId}>
                <td>{tarefa.tarefaId}</td>
                <td>{tarefa.titulo}</td>
                <td>{tarefa.criadoEm}</td>
                <td>{tarefa.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}



export default ListarTarefasNaoConcluidas;