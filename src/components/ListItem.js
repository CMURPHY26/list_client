import React, {useState} from 'react'
import Form from './Form.js'

function ListItem(props) {
    const {item, handleComplete, handleDelete, handleUpdate} = props;

    const [formVisible, setFormVisible] = useState();

    const toggleForm = () => {
        setFormVisible(!formVisible);
    }


    return (
        <div className="item" key={item.id}>
            {!formVisible ? (
                <>
                    <h2>{item.name}</h2> 
                    <p>{item.description}</p>
                    <div className="list-item-buttons">
                        {!item.is_completed ? 
                            <button onClick={() => handleComplete(item)}>&#10004;</button> 
                            : null}
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                        <button onClick={() => toggleForm()}>&#10000;</button>
                    </div>
                </>)
            : <Form item={item} toggleForm={toggleForm} handleSubmit={handleUpdate}/>}
        </div>
    )
}

export default ListItem