import './App.css';
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const textAdder = document.getElementById('textAdder')

  function handleSubmit (e) {
    e.preventDefault()
    if (!textAdder.value) return alert(`please add a to-do item`)

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    }

    setTodos([...todos, newTodo])
    setTodo('')
  }

  function deleteTodo(id) {
    if (window.confirm(`The item will be deleted, are you sure?`)) {
      const updatedTodo = [...todos].filter((todo) => todo.id !== id)
      setTodos(updatedTodo)
     }


  }

  return (
    <>
      <form className="d-flex justify-content-center align-middle" onSubmit={handleSubmit}>

            <div className="list-group w-75 mt-5" id="container">
          <a
            href="/#"
            className="list-group-item list-group-item-secondary d-flex flex-column align-items-center"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between"></div>
            <h1 className="m-3 text-center text-uppercase">My to-do list</h1>
            <div className="input-group mb-3 w-75">
              <button
                className="btn btn-outline-primary hover-shadow"
                type="submit"
                id="button-addon1"
              >
                Add Item
              </button>
              <input
                type="text"
                className="form-control"
                id="textAdder"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                placeholder="Please type a to-do"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
            </div>
          </a>
              <div id="list-container" style={{
                  borderBottomLeftRadius: "6px !important",
                  borderBottomRightRadius: "6px !important"
                }}
              >
                {todos.map((todo) => {
                  return (
                    
                    <a href="/#" className="list-group-item list-group-item-action d-flex m-auto" key={todo.id}>
                        <input
                          className="form-check-input mt-auto mb-auto"
                          type="checkbox"
                          id ="btncheck1"
                          defaultValue=""
                          aria-label="Checkbox for following text input"
                        />
                        <p className="m-auto fs-5 text-capitalize overflow-auto" id="textP">
                          {todo.text}
                        </p>
                        <button type="button" className="btn btn-danger" 
                        id="removeBtn"
                        onClick={() => deleteTodo(todo.id)}
                        >
                          Remove
                        </button>
                    </a>
                    
                  )
                })}
                

              </div>
        </div>
      </form>
    </>

  );
}

export default App;
