  import { useEffect, useState } from "react";
  import Tarefa from "../Models/Tarefa";
  import axios from "axios";

  function ListarTarefas() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [tarefaId, setTarefaId] = useState("");
    const [titulo, setTitulo] = useState("");

    useEffect(() => {
      console.log("Componente carregado!");
      buscarTarefasAPI();
    }, []);

    async function buscarTarefasAPI() {
      try {
        const resposta = await axios.get(
          "http://localhost:5022/api/tarefas/listar"
        );
        setTarefas(resposta.data);
      } catch (error) {
        console.log("Erro na requisição: " + error);
      }
    }

    
    async function alterarStatusTarefa(id : string) {
        
        try {
        const tarefa: Tarefa = {tarefaId, titulo};

       await axios.put(`http://localhost:5022/api/tarefas/alterar/${id}`, tarefa);

       console.log("Status de tarefa alterado");
       buscarTarefasAPI();
    } catch (error) {
      console.log("Erro ao alterar: " + error);
        }
    }

    
    

    return (
      <div>
        <h1>Listar todas as Tarefas cadastradas</h1>
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
                <td>
                    <button onClick={() => alterarStatusTarefa(tarefa.tarefaId!)}>Alterar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default ListarTarefas;


  
