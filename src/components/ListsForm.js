import React, { useState } from "react";
// import Input from "./Input.js";


function ListsForm(props) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");

   const handleSubmit = (e) => {
       e.preventDefault();

       const list = {
           name: name,
           category: category
       }
       
       props.handleSubmit(e, list);
       setName("");
       setCategory("");
       props.setFormShow(false)
    }

    return (
        <>
        <div className="form-title">
          <h2>Add a List</h2> 
        </div>
        <form onSubmit={handleSubmit}>
        <input
          onChange={e => setName(e.target.value)}
          name="name"
          placeholder="List Title"
          type="text"
          value={name}
          id="name"
        />
        <input
          onChange={e => setCategory(e.target.value)}
          name={"category"}
          placeholder={"List Category"}
          type={"text"}
          value={category}
          id={"category"}
        />
        <input
          type="submit"
          value="SUBMIT"
        />
        </form>
        </>
    )
}


export default ListsForm