import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TPSRIDUserID = () => {
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
    <div style={{ textAlign: 'center' }}>
      <style>
        {`
          .unresolved-todos-with-userids-table {
            width: 80%;
            margin: 0 auto;
            border-collapse: collapse;
            margin-top: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Borde sombreado para el brillo */
          }

          .unresolved-todos-with-userids-table th,
          .unresolved-todos-with-userids-table td {
            border: 1px solid #dddddd;
            padding: 12px;
            text-align: center;
            background-color: #c35900;
            color: white;
          }

          .unresolved-todos-with-userids-table th {
            background-color: black;
            font-weight: bold;
            font-size: 20px;
          }

          .unresolved-todos-with-userids-table tr:nth-child(even) {
            background-color: #f9f9f9;
          }

          .unresolved-todos-with-userids-table tr:hover {
            background-color: #f2f2f2;
          }

          /* Agregamos el estilo para el hover en las filas */
          .unresolved-todos-with-userids-table tr:hover td {
            background-color: #000;
          }
        `}
      </style>
      <h2 style={{ margin: '30px 0', color: 'orange' }}>Lista de todos los pendientes sin resolver-ID y User ID</h2>
      <table className="unresolved-todos-with-userids-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {unresolvedTodos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TPSRIDUserID;