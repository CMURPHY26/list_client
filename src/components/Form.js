import React, { useState, useEffect } from "react";
import Input from './Input.js'


function Form(props) {
    const {item, setFormShow} = props
    const [input, setInput] = useState({
        name: item.name,
        description: item.description,
        list_id: item.listId
    });
 
    const handleChange = (e) => {
        setInput({...input, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {

        e.preventDefault();
 
        const listItem = {
            name: input.name,
            description: input.description,
            list_id: item.list_id,
            id: item.id
        }
        console.log(listItem)
        props.handleSubmit(e, listItem);
        setInput({...input,name:"",description:""});
        setFormShow(false);
     }

    return (
        <>
        <div className="form-title">
          {item.name !== "" ?
            <h2>Update this List Item</h2> 
          : 
          <h2>Add a List Item</h2>
          }
        </div>
        
        <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          name={"name"}
          placeholder={"List Item Title"}
          type={"text"}
          value={input.name}
          id={"name"}
        />
        <Input
          handleChange={handleChange}
          name={"description"}
          placeholder={"List Item Description"}
          type={"text"}
          value={input.description}
          id={"description"}
        />
        <input
          id="submit"
          type="submit"
          value={item.name !== "" ? "Update" : "Submit"}
        />
      </form>
        </>
    )
}


export default Form