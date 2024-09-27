//  ../components/TaskForm.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TaskForm.css';


function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Carrega o arquivo JSON do LocalStorage
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    // Adiciona a nova tarefa
    const newTask = {
      id: Date.now(), // Use Date.now() para gerar um ID único
      title: title,
      description: description,
      completed: false
    };
    storedTasks.push(newTask);

    // Converte para string JSON e salva no LocalStorage
    localStorage.setItem('tasks', JSON.stringify(storedTasks));

    // Redireciona para a página inicial
    navigate('/');
  };

  return (
    <div className='form-adicionar-tarefa-container'>
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" required />
      <div className='button-salvar'>
      <button type="submit">Salvar</button>
      </div> 
    </form>
    </div>
  );
}

export default TaskForm;









// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/TaskForm.css';


// function TaskForm() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Carrega o arquivo JSON do LocalStorage
//     const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

//     // Adiciona a nova tarefa
//     const newTask = {
//       id: Date.now(), // Use Date.now() para gerar um ID único
//       title: title,
//       description: description,
//       completed: false
//     };
//     storedTasks.push(newTask);

//     // Converte para string JSON e salva no LocalStorage
//     localStorage.setItem('tasks', JSON.stringify(storedTasks));

//     // Redireciona para a página inicial
//     navigate('/');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" required />
//       <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" required />
//       <button type="submit">Salvar</button>
//     </form>
//   );
// }

// export default TaskForm;














