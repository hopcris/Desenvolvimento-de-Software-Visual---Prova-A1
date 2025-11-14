import React from 'react';
import CadastrarTarefa from './components/CadastrarTarefa';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import ListarTarefas from './components/ListarTarefas';
import ListarTarefasConcluidas from './components/ListarTarefasConlcuidas';
import ListarTarefasNaoConcluidas from './components/ListarTarefasNaoConcluidas';

function App(){

  return(
    <div>
    <div>
      <h1>API de Gerenciamento de tarefas</h1>
    </div>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cadastrar/tarefas">Cadastrar Tarefas</Link>
          </li>
          <li>
            <Link to="/listar/tarefas">Listar todas as Tarefas</Link>
          </li>
          <li>
            <Link to="/listar/tarefas/concluidas">Listar apenas tarefas concluidas</Link>
          </li>
          <li>
            <Link to="/listar/tarefas/naoconcluidas">Listar apenas tarefas nao concluidas</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastrar/tarefas" element={<CadastrarTarefa/>} />
        <Route path="/listar/tarefas" element={<ListarTarefas/>} />
        <Route path="/listar/tarefas/concluidas" element={<ListarTarefasConcluidas/>} />
        <Route path="/listar/tarefas/naoconcluidas" element={<ListarTarefasNaoConcluidas/>} />
      </Routes>
    </BrowserRouter>
    

    </div>
  )

}

export default App;
