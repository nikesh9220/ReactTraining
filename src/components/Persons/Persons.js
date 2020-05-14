import React,{Component} from 'react'
import Person from './Person/Person'

class Persons extends Component{
    shouldComponentUpdate(nextPros,nextState){
        console.log('[Person Js] ShouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(prevPrp,prevState){
        console.log('[Person Js] getSnapshotBforeUpdate')
    }
    render(){
        console.log('[Person Js] rendring')
        return(
            this.props.persons.map((person,index) =>{
                return <Person click={this.props.click} 
                key={person.id} 
                name={person.name} 
                age={person.age} 
                changed={(event) => this.props.changed(event,person.id)}/>
            })
        )
    }
}
export default Persons;