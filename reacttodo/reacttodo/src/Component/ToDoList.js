import React from "react";
class ToDoList extends React.Component {
   componentDidUpdate(){
    //if(this.props.inputElement)
    //this.props.inputElement.current.focus();

   }
    render()
        {
    return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={this.props.addItem }>
                    <input type="text" placeholder="Task" value={this.props.currentItem.text} onChange={this.props.handleInput}/>
                    <button type="submit">Add Task</button>
                </form>
            </div>
        </div>
    )
}
}
export default ToDoList;