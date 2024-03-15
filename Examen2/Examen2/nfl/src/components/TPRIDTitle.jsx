import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TPRIDTitle = () => {
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
    <div style={{ textAlign: 'center', color: 'white' }}>
      <style>
        {`
          .resolved-todos-table {
            width: 80%;
            margin: 0 auto;
            margin-top: 20px;
            border-collapse: collapse;
          }

          .resolved-todos-table th, .resolved-todos-table td {
            border: 1px solid #dddddd;
            padding: 10px;
            text-align: center;
            background-color: #c35900;
          }

          .resolved-todos-table th {
            background-color: #000;
            color: white;
          }

          .resolved-todos-table tr:nth-child(even) {
            background-color: #f9f9f9;
          }

          .resolved-todos-table tr:hover {
            background-color: black;
          }

          .resolved-todos-table tr:hover td {
            color: white;
          }
        `}
      </style>
      <h2 style={{ margin: '30px 0',color:'orange' }}>Lista de todos los pendientes resueltos-ID y Título</h2>
      <table className="resolved-todos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
          </tr>
        </thead>
        <tbody>
          {resolvedTodos.map(todo => (
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

export default TPRIDTitle;