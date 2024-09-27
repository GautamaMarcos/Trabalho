//  ../components/TaskDetails.tsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/TaskDetails.css';


function TaskDetails() {
  const [task, setTask] = useState({ title: '', description: '', completed: false });
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    // Carrega o arquivo JSON do LocalStorage
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const task = storedTasks.find((t: any) => t.id === parseInt(id!, 10));
    setTask(task || { title: '', description: '', completed: false });
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Carrega o arquivo JSON do LocalStorage
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    // Atualiza a tarefa
    const updatedTasks = storedTasks.map((t: any) => 
      t.id === parseInt(id!, 10) ? { ...t, ...task } : t
    );

    // Converte para string JSON e salva no LocalStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Redireciona para a página inicial
    navigate('/');
  };

  const toggleCompleted = () => {
    setTask({ ...task, completed: !task.completed });
  };

  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
      <input type="text" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} placeholder="Título" required />
      <input type="text" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} placeholder="Descrição" required />
      <div className='Button-container'>
      <button className='Button-concluido' type="button" onClick={toggleCompleted}>
        {task.completed ? 'Desmarcar' : 'Marcar'} como concluída
      </button>
      <button className='Button-salvar' type="submit">Salvar</button>
      </div>
    </form>
    </div>
  );
}

export default TaskDetails;










// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import '../styles/TaskDetails.css';


// function TaskDetails() {
//   const [task, setTask] = useState({ title: '', description: '', completed: false });
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Carrega o arquivo JSON do LocalStorage
//     const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//     const task = storedTasks.find((t: any) => t.id === parseInt(id!, 10));
//     setTask(task || { title: '', description: '', completed: false });
//   }, [id]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Carrega o arquivo JSON do LocalStorage
//     const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

//     // Atualiza a tarefa
//     const updatedTasks = storedTasks.map((t: any) => 
//       t.id === parseInt(id!, 10) ? { ...t, ...task } : t
//     );

//     // Converte para string JSON e salva no LocalStorage
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));

//     // Redireciona para a página inicial
//     navigate('/');
//   };

//   const toggleCompleted = () => {
//     setTask({ ...task, completed: !task.completed });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} placeholder="Título" required />
//       <input type="text" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} placeholder="Descrição" required />
//       <button type="button" onClick={toggleCompleted}>
//         {task.completed ? 'Desmarcar' : 'Marcar'} como concluída
//       </button>
//       <button type="submit">Salvar</button>
//     </form>
//   );
// }

// export default TaskDetails;















