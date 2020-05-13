import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErroBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {
 
  state = {
    persons: [
      { id:'N1', name: 'Max', age: 28 },
      { id:'N2', name: 'Manu', age: 29 },
      { id:'N3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }
  
  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ],
  //     showName : false
  //   } )
  // }

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
    let buttonClass = '';
    if(this.state.showName){
        persons= 
        <div>
          {
          this.state.persons.map((person,index) =>{
              return <ErroBoundary Key={person.id}>
                <Person click={() =>this.deleteNameHandler(index)} Key={person.id} name={person.name} age={person.age} 
              changed={(event) => this.nameChangedHandler(event,person.id)}/>
                </ErroBoundary>
          })
          }
        
        </div> 
        buttonClass = classes.Red;
        // style.backgroundColor = 'red';
        // style[":hover"] ={
        //   backgroundColor:'salmon',
        //   color:'black'
        // }
    }
    let assignedClasses = [];
    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red)
    }
    
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold)
    }
    return (
   
       <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
         className={buttonClass}
          onClick={this.toggleNameHandler}>Toggle Name</button>

      {persons}
        
      </div>
   
      
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
