import { useState } from "react";
import Tarefa from "../Models/Tarefa";
import axios from "axios";

function CadastrarTarefa() {
  const [titulo, setTitulo] = useState("");

  function enviarTarefa(event: any) {
    event.preventDefault();
    encontrarTarefaAPI();
  }

  async function encontrarTarefaAPI() {
    try {
      const tarefa: Tarefa = {titulo};

      const resposta = await axios.post(
        "http://localhost:5022/api/tarefas/cadastrar",
        tarefa
      );

      console.log(await resposta.data);
    } catch (error: any) {
      console.log("Erro ao cadastrar: " + error);
    }
  }

  return (
    <div>
      <div>
        <h1>Cadastrar Tarefa</h1>
      </div>
      <div>
        <p>Por favor, so insira apenas o titulo da tarefa </p>
      </div>
      
      <form onSubmit={enviarTarefa}>
        <div>
          <label><h4>Titulo:</h4></label>
          <input onChange={(e : any) => setTitulo(e.target.value)} type="text" />
        </div> 
          <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarTarefa;
