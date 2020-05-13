import React from 'react'



function CompletedList({listItems, handleComplete, handleDelete}) {
    let completedListItems = []
    if(listItems) {
        listItems.map(item => {
            if(item.is_completed) {
                completedListItems.push(item)   
            }
        });
    }
    return (
            <div className="completed-container">
                {completedListItems.map( item => 
                
                        <div className="item" key={item.id}>
                                    <h2 className="completed-item">{item.name}</h2>
                                    <div className="list-item-buttons">
                                        <button className="add-item" onClick={() => handleComplete(item)}>&#10010;</button>
                                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                                    </div>
                        </div>
                    )
               }
            </div>
    )
}


export default CompletedList