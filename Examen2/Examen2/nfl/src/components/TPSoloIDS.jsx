import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TPSoloIDS = () => {
  const [todosIds, setTodosIds] = useState([]);

  useEffect(() => {
    const fetchTodosIds = async () => {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
        const todos = response.data;
        const todosIds = todos.map(todo => todo.id);
        setTodosIds(todosIds);
      } catch (error) {
        console.error('Error fetching todos IDs:', error);
      }
    };

    fetchTodosIds();
  }, []);

  return (
    <div style={{ textAlign: 'center', color: '#ff9900' }}>
      <style>
        {`
          .tp-todos-table {
            width: 80%;
            margin: 0 auto;
            border-collapse: collapse;
            margin-top: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Borde sombreado para el brillo */
          }

          .tp-todos-table th, .tp-todos-table td {
            border: 1px solid #dddddd;
            padding: 12px;
            text-align: center;
            color: white;
            background-color: #c35900; /* Color naranja para todas las celdas */
          }

          .tp-todos-table th {
            background-color: black;
            font-weight: bold;
            font-size: 20px;
          }

          .tp-todos-table td:hover,
          .tp-todos-table tr:hover td {
            background-color: #000; /* Cambio de color al pasar el cursor */
          }
        `}
      </style>
      <h2 style={{ margin: '30px 0', color: 'orange' }}>Lista de todos los pendientes-solo IDs</h2>
      <table className="tp-todos-table">
        <thead>
          <tr>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {todosIds.map(todoId => (
            <tr key={todoId}>
              <td>{todoId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TPSoloIDS;