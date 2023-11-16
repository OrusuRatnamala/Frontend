import React from 'react';
import './App.css';
import ToDoItem from './Component/ToDoItem';
import ToDoList  from './Component/ToDoList';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: { text: '', key: '' }
    }
  }
  inputElement=React.createRef
  addItem = e => {
    const newItem = this.state.currentItem
    e.preventDefault();
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  render() {
    return (
      <div className="App">
        <ToDoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <ToDoItem entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
 
}
export default App;
 
