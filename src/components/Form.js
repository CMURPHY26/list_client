import React, { useState } from "react";
import Input from './Input.js'


function Form(props) {
    const [input, setInput] = useState({
        name: "",
        description: "",
        list_id: props.listId
    });

    const handleChange = (e) => {
        setInput({...input, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {

        e.preventDefault();
 
        const listItem = {
            name: input.name,
            description: input.description,
            list_id: input.list_id
        }

        console.log(listItem)
        
        props.handleSubmit(e, listItem);
        setInput({...input,name:"",description:""});
     }

    return (
        <>
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
          type="submit"
          value="Submit"
        />
      </form>
        </>
    )
}


export default Form