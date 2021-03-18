import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ActivityTimeline, TimelineMarker } from 'react-rainbow-components';

//import Todolist from './components/Todolist.js' 
//import Addlist from './components/Addlist.js'

//const iconStyles = { width: 32, height: 32 };
const container = { width: 500, margin: 'auto', marginTop: 36, };
//const List = <Todolist />

  
  const initialList = [
      {
        id: 'a',
        todo: 'Homework',
        
      },
      {
        id: 'b',
        todo: 'React',
      },
    ];



const App = ()=> {

        
    const [list, setList] = React.useState(initialList);
    const [todo, setTodo] = React.useState('');
    
      function handleAdd() {
        const newList = list.concat({ todo, id: uuidv4() });
     
        setList(newList);
     
        setTodo('');
      }
      
      function handleChange(event){
        setTodo(event.target.value);
      };

    return (
        <div style={container}>
            <div>
        <div>
          <form>
            <h2 className="label-wrapper">
              <label htmlFor="new-todo-input" className="label__lg">
                What needs to be done?
              </label>
            </h2>
        
        <AddTodo
          todo = {todo}
          onChange = {handleChange}
          onAdd = {handleAdd}
        />

        
        </form>
    
        <ActivityTimeline>
            <TimelineMarker
                description =  <List list={list} /> 
            />
        </ActivityTimeline>
    </div>
        </div>
    </div>);
    
};

const AddTodo = ({todo, onChange, onAdd}) =>{
    return(<div>
    <input type="text" value={todo} onChange={onChange} />
    <button type="button" onClick={onAdd}>
      Add
    </button>
  </div>);
    
  }
  

  const List = ({ list }) => (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.todo}</li>
      ))}
    </ul>
  );




export default App;
