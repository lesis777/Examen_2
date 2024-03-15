import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TPRIDUserID = () => {
  const [resolvedTodos, setResolvedTodos] = useState([]);

  useEffect(() => {
    const fetchResolvedTodos = async () => {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
        const resolvedTodos = response.data.filter(todo => todo.completed);
        setResolvedTodos(resolvedTodos);
      } catch (error) {
        console.error('Error fetching resolved todos:', error);
      }
    };

    fetchResolvedTodos();
  }, []);

  return (
    <div style={{ textAlign: 'center', color: '#ff9900' }}>
      <style>
        {`
          .resolved-todos-userids-table {
            width: 80%;
            margin: 0 auto;
            border-collapse: collapse;
            margin-top: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Borde sombreado para el brillo */
          }

          .resolved-todos-userids-table th, .resolved-todos-userids-table td {
            border: 1px solid #dddddd;
            padding: 12px;
            text-align: center;
            color: white;
            background-color: #c35900; /* Color naranja para todas las celdas */
          }

          .resolved-todos-userids-table th {
            background-color: black;
            font-weight: bold;
            font-size: 20px;
          }

          .resolved-todos-userids-table td:hover,
          .resolved-todos-userids-table tr:hover td {
            background-color: #000; /* Cambio de color al pasar el cursor */
          }
        `}
      </style>
      <h2 style={{ margin: '30px 0', color: 'orange' }}>Lista de todos los pendientes resueltos-ID y User ID</h2>
      <table className="resolved-todos-userids-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {resolvedTodos.map(todo => (
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

export default TPRIDUserID;