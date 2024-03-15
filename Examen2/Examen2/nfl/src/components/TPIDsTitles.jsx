import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TPIDsTitles = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div style={{ textAlign: 'center', color: 'orange' }}>
      <style>
        {`
          .todos-table {
            width: 80%;
            margin: 0 auto;
            border-collapse: collapse;
            margin-top: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Borde sombreado para el brillo */
          }
          
          .todos-table th,
          .todos-table td {
            padding: 12px;
            border: 1px solid #dddddd;
            text-align: left;
            color: white;
            background-color: #c35900; /* Color naranja para todas las celdas */
          }
          
          .todos-table th {
            background-color: black;
            font-weight: bold;
            font-size: 20px;
          }

          .todos-table td:hover,
          .todos-table tr:hover td {
            background-color: #000; /* Cambio de color al pasar el cursor */
          }
        `}
      </style>
      <h2 style={{ margin: '30px 0' }}>Lista de todos los pendientes-IDs y Títulos</h2>
      <table className="todos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TPIDsTitles;