import React from 'react';
import cls from './Person.css';

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;
//     '@media (min-width : 500px)': {
//       width: '450px'      
//     }
//   `
const person = ( props ) => {
    // const style= {
    //   '@media (min-width : 500px)': {
    //     width: '450px'      }
    // }
    const random = Math.random();
    if(random > 0.7){
        throw new Error('Uppppppps!');
    }
    return (
          <div className={cls.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
       
    )
};

export default person;