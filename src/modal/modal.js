import "./modal.css"

function Modal ( {showModal  , addTodo} ){
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const todo = e.target.todo.value 
    addTodo(todo)
    showModal()
  }

  

  return (
    <>
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <div className="head">
          <h1>할 일 추가</h1>
          <button className="x" onClick={showModal}>x</button>
        </div>
        <div className="add-time-form">
        </div>
        <textarea
          placeholder="스케줄 내용"
          name = 'todo'
        ></textarea>
        <div className="button">
          <button type="submit" >
            확인
          </button>
        </div>
      </form>
      
    </div>

    </>
    
    
    
  )

}

export default Modal