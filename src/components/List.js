import React from 'react'
import ListItem from './ListItem.js'



function List(props) {
    const {listItems, handleComplete, handleDelete, handleUpdate} = props;

    let listItemArr = []
    if(listItems) {
        listItems.forEach(item => {
            if(!item.is_completed) {
                listItemArr.push(item)   
            }
        });

    }
    return (
            <div className="item-container">
                {listItemArr.map( item => 
                <ListItem key={item.id} item={item} handleUpdate={handleUpdate} handleComplete={handleComplete} handleDelete={handleDelete}/>
                )}
            </div>
    )
}


export default List