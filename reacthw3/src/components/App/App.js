import React, { Component } from 'react';
import AppTitle from '../AppTitle/AppTitle';
import AppSearch from '../AppSearch/AppSearch';
import TodoList from '../TodoList/TodoList';
import AddForm from '../addForm/addForm';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  maxId = 10;
  
  createTodo(items) {
		return {
			items,
			important: false,
			done: false,
			id: this.maxId++
		};
	}

state = {
		stateTodo: [ this.createTodo('111111'), this.createTodo('22222'), this.createTodo('33333') ]
  };
  
  addTodo = (items) => {
		this.setState((prevState) => {
			return {
				stateTodo: prevState.stateTodo.concat(this.createTodo(items))
			};
		});
  };
  
  deleteItem = (id) => {
		this.setState((prevState) => {
			return {
				stateTodo: prevState.stateTodo.filter((item) => item.id !== id)
			};
		});
  };

  importants = (id)=> {
	this.setState((prevState) => {
		const nextState = prevState.stateTodo.map((item) => {
			if (item.id === id) {
				item.important = !item.important;
			}
			return item;
		});
		return {
			stateTodo: nextState
		};
	});	
  };

  
  toggleImportant = (id) => {
		this.setState((prevState) => {
			const nextState = prevState.stateTodo.map((item) => {
				if (item.id === id) {
					item.done = !item.done;
				}
				return item;
			});
			return {
				stateTodo: nextState
			};
		});
	};

  filterItemActive = () => {
	this.setState((prevState) => {
		return {
			stateTodo: prevState.stateTodo.filter((item) => item.important)
		};
	});
  };

  filterItemDone = () => {
	this.setState((prevState) => {
		return {
			stateTodo: prevState.stateTodo.filter((item) => item.done)
		};
	});
  };

  allItem = () => {
	this.setState((prevState) => {
		return {
			stateTodo: prevState.stateTodo.filter((item) => item.id)
		};
	});
  };
	// this.setState(() => {
	//   const qw =  this.stateTodo
	//   let we = qw.filter((item) => item.done)
	// this.setState(() => {
	// 	return {
	// 		stateTodo: this.stateTodo
	// 	};
	// });
	// })
  




  render() {
    const { stateTodo } = this.state;
    const todo = stateTodo.filter((item) => !item.done).length;
    const done = stateTodo.length - todo;
    return (
      <div className='App'>
        <AppTitle tD={todo} done={done} />
        <div className='d-flex'> 
          <AppSearch onAllItem={this.allItem} onFilterItemActive={this.filterItemActive} 
		  onFilterItemDone={this.filterItemDone}/> 
        </div>  
        <TodoList todos={stateTodo} onDelete={this.deleteItem} 
			onToggle={this.toggleImportant} onImportants={this.importants} />
        <AddForm onAdd={this.addTodo} />
      </div>
      );
    }
  }
  
  export default App;
