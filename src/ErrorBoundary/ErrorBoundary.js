import React,{ Component } from "react";

class ErroBoundary extends Component{
    state = {
        hasError:false,
        errorMessege:''
    }
    componentDidCatch= (error,info) =>{
            this.setState({
                hasError:true,
                errorMessege:error
                
            })
    }
    render(){
        if(this.state.hasError){
            return <h1>{this.state.errorMessege}</h1>
        }
        else{
           return  this.props.children
        }
    }
}
export default ErroBoundary;