import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from './Slice';

function Main() {
    const count = useSelector((state) => state.todo.count);
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const handleTodoDone = (id) => {
        dispatch(removeTodo(id));
      };
   
  return (
    <div className='main'>
        <section class="main">
		<input class="toggle-all" type="checkbox" />
		<label for="toggle-all">
			Mark all as complete
		</label>
        <ul className="todo-list">
          {count > 0 && todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <div className="view">
                <input
                  id={todo.id}
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleTodoDone(todo.id)}
                />
                <label>{todo.text}</label>
              </div>
            </li>
          ))} {count === 0 && <p>No todos</p>}
        </ul>
		
	</section>
    </div>
  )
}

export default Main