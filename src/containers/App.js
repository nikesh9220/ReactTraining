import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
 
  state = {
    persons: [
      { id:'N1', name: 'Max', age: 28 },
      { id:'N2', name: 'Manu', age: 29 },
      { id:'N3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }
  
  nameChangedHandler = (event,personIndex) => {
    const _personIndex = this.state.persons.findIndex(p =>{
        return p.id === personIndex
    });
    debugger;
    
    const _person = {
      ...this.state.persons[_personIndex] //Copy object using spread operator
    }
    _person.name = event.target.value;
    
    const _persons = [...this.state.persons];
    _persons[_personIndex] = _person;

    this.setState( {
      persons:_persons
    } )
  }
  toggleNameHandler =() =>{
    const showNameState = this.state.showName;
    this.setState({
      showName : ! showNameState
    })
  }
  
deleteNameHandler = (personIndex) =>{
  debugger;
  //const _persons=this.state.persons; // don not use like this it is called mutable state bcoz we are refrencing to thT ARRAY
  //unmutable state changing
  //We can also use const _persons=this.state.persons.slice() it will copy array
  const _persons = [...this.state.persons] //Unmutable state copy array by ES6 Spread operator.
  _persons.splice(personIndex,1)
  this.setState({
    persons:_persons
  })
}

  render () {
    let persons = null;
     if(this.state.showName){
       debugger;
        persons= 
        <Persons
          persons={this.state.persons}
          click={this.deleteNameHandler}
          changed={this.nameChangedHandler}
        />
      
    }
    
    return (
   <div className={classes.App}>
      <Cockpit
      persons= {this.state.persons}
      cclick={this.toggleNameHandler}
      buttonChange={this.state.showName}
      ></Cockpit>
      {persons}
        
      </div>
   
      
      
    );
  }
}

export default App;
