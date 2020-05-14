import React from 'react'
import classes from './Cockpit.css'
const Cockpit = (props) =>{
    let buttonClass = '';
    let assignedClasses = [];
    if(props.persons.length <=2){
      assignedClasses.push(classes.red)
    }
    
    if(props.persons.length <=1){
      assignedClasses.push(classes.bold)
    }
    if(props.buttonChange){
        buttonClass =classes.Red
    }
    return(
            <div className={classes.Cockpit}>
                <h1>{props.appTitle}</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button
                className={buttonClass}
                onClick={props.cclick}>Toggle Name</button>
                
            </div>
    );
}

export default Cockpit;