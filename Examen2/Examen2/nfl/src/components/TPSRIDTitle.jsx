import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TPSRIDTitle = () => {
  const [unresolvedTodos, setUnresolvedTodos] = useState([]);

  useEffect(() => {
    const fetchUnresolvedTodos = async () => {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
        const unresolvedTodos = response.data.filter(todo => !todo.completed);
        setUnresolvedTodos(unresolvedTodos);
      } catch (error) {
        console.error('Error fetching unresolved todos:', error);
      }
    };

    fetchUnresolvedTodos();
  }, []);

  return (
    <div style={{ textAlign: 'center', color: '#ff9900' }}>
      <style>
        {`
          .unresolved-todos-table {
            width: 80%;
            margin: 0 auto;
            border-collapse: collapse;
            margin-top: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Borde sombreado para el brillo */
          }

          .unresolved-todos-table th,
          .unresolved-todos-table td {
            border: 1px solid #dddddd;
            padding: 8px;
            text-align: left;
            color: white;
            background-color: #c35900; /* Color naranja para todas las celdas */
          }

          .unresolved-todos-table th {
            background-color: black;
            font-weight: bold;
          }

          .unresolved-todos-table td:hover,
          .unresolved-todos-table tr:hover td {
            background-color: #000; /* Cambio de color al pasar el cursor */
          }
        `}
      </style>
      <h2 style={{ margin: '30px 0', color: '#ff9900' }}>Lista de todos los pendientes sin resolver-ID y Título</h2>
      <table className="unresolved-todos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
          </tr>
        </thead>
        <tbody>
          {unresolvedTodos.map(todo => (
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

export default TPSRIDTitle;