import React from 'react';
import { useState, useEffect, useRef } from 'react';


const EditMessage = (props) => {
  
  const [editMessage, setEdit] = useState("")

  const handleUpdate = (e, message) => {
    e.preventDefault();
    let edit = {body: editMessage, id: message.id, channel_id: message.channel_id}
    props.updateMessage(edit)
      .then(() => {
        handleClick(e, edit.id);
        setEdit("")
      })
  }

  useEffect(() => {
    const handler = event => {
      if(event.key === "Escape") {
        let messages = Array.from(document.getElementsByClassName('message-body'));
        let edits = Array.from(document.getElementsByClassName('message-edit'));
        messages.forEach(message => {
          if(message.classList.contains('inActive')) {
            message.classList.toggle('inActive')
          }
        })
        edits.forEach(edit => {
          if(!edit.classList.contains('inActive')) {
            edit.classList.toggle('inActive')
          }
        })
      }
    }

    document.addEventListener('keydown', handler);

    return () => document.removeEventListener('keydown', handler);
  }) 
  const handleClick = (e, messageId) => {
    if(e.key === "Escape" || e.type === "click" || e.type === "submit") {
      let elements = document.getElementsByClassName(messageId);
      elements[0].classList.toggle("inActive")
      elements[1].classList.toggle("inActive")
    }
  }
  
  return (
    <form onSubmit={e => handleUpdate(e, props.message)} className={`message-edit ${props.message.id} inActive`}>
      <input onKeyUp={e => handleClick(e, props.message.id)} className="channel-message-edit-input" type="text" placeholder={props.message.body} onChange={(e) => setEdit(e.currentTarget.value)} value={editMessage}></input>
      <div className="message-edit-options">
        <div>escape to <span className="save" onClick={e => handleClick(e, props.message.id)}>cancel</span>  •</div>
        <div>enter to <span className="save" onClick={e => handleUpdate(e, props.message)}>save</span></div>
      </div>
      {editMessage.length ? <button className="hidden-button" type="submit">Submit</button> : <button className="hidden-button" disabled type="submit">Submit</button>}
    </form>
  )
}

export default EditMessage;