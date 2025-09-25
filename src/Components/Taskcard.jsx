import "../Components/Taskcard.css";
import { useState } from "react";
import check from'../Assets/check.png'
import edit from '../Assets/edit-100.png'
import save from '../Assets/checkmark-24.png'
import cancel from '../Assets/cancel-24.png'
import delet from '../Assets/delete.png'
const Taskcard = ({ tasks, deleteTask, toggleComplete, editTask }) => {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  function Item({ item }) {
    const isEditing = editingId === item.id;

    return (
      <li id={item.id} className="task_item">{isEditing ? (
          <>
            <input className='input_edit'
            type="text"
            value={editValue} 
            onChange={(e) => setEditValue(e.target.value)}
            />
            <button className='save_btn' onClick={() => {editTask(item.id, editValue);setEditingId(null);}}><img src={save} alt="save.png"/></button>
            <button className='cancel_btn' onClick={() => setEditingId(null)}><img src={cancel} alt="cancel.png"/></button>
          </>
        ) : (
          <>
            <p style={{textDecoration: item.is_completed ? "line-through": "none",}}>
              {item.title}
            </p>
            <section className="task_btns">
              <button className='complete_btn' onClick={() => toggleComplete(item.id)}>
                {item.is_completed ? <img src={check} width="24px" alt="check.png"/> : <img src={check} width="24px" alt="check.png"/>}
              </button>
              <button className='edit_btn' onClick={() => {setEditingId(item.id); setEditValue(item.title);}}>
                <img src={edit} width="24px" alt="edit.png"/>
              </button>
              <button className='delete_btn' onClick={() => deleteTask(item.id)}><img src={delet} width="24px" alt="delete.png"/></button>
            </section>
          </>
        )}
      </li>
    );
  }

  return (
    <>
      {tasks && tasks.length > 0 ? (
        <ol className="tasks_card">
          {tasks.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ol>
      ) : (
        <p className="empty_text">Seems lonely in here, what are you up to?</p>
      )}
    </>
  );
};

export default Taskcard;
