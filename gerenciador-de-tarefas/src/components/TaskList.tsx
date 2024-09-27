// ../components/TaskList.tsx  

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/TaskList.css';


type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Carrega o arquivo JSON do LocalStorage
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  const handleDelete = (id: number) => {
    // Atualiza o array de tarefas removendo a tarefa com o ID especificado
    const updatedTasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  return (
    <div className='container'>
      <h1>Tarefas</h1>
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>
            
            <Link className='link-edit' to={`/edit/${task.id}`}>Editar</Link>
            <button className='Excluir' onClick={() => handleDelete(task.id)}>Excluir</button>
            {task.title} - {task.description} - {task.completed ? 'Concluída' : 'Pendente'}
            
          </li>
        ))}
      </ul>
      <Link to="/add">Adicionar Tarefa</Link>
    </div>
  );
}

export default TaskList;








// ../components/TaskList.tsx  

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/TaskList.css';


// type Task = {
//   id: number;
//   title: string;
//   description: string;
//   completed: boolean;
// };

// function TaskList() {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   useEffect(() => {
//     // Carrega o arquivo JSON do LocalStorage
//     const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//     setTasks(storedTasks);
//   }, []);

//   const handleDelete = (id: number) => {
//     // Atualiza o array de tarefas removendo a tarefa com o ID especificado
//     const updatedTasks = tasks.filter(task => task.id !== id);
//     localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//     setTasks(updatedTasks);
//   };

//   return (
//     <div>
//       <h1>Tarefas</h1>
//       <ul>
//         {tasks.map((task: any) => (
//           <li key={task.id}>
//             <Link to={`/edit/${task.id}`}>Editar</Link>
//             <button onClick={() => handleDelete(task.id)}>Excluir</button>
//             {task.title} - {task.description} - {task.completed ? 'Concluída' : 'Pendente'}
//           </li>
//         ))}
//       </ul>
//       <Link to="/add">Adicionar Tarefa</Link>
//     </div>
//   );
// }

// export default TaskList;

















