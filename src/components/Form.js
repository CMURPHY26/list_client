import React, { useState } from "react";
import Input from './Input.js'


function Form(props) {
    const [input, setInput] = useState({
        name: "",
        description: "",
    });

    const handleChange = (e) => {
        setInput({...input, [e.target.id]: e.target.value})
    }


    return (
        <>
        <form>
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