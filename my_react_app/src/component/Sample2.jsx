import{Component, component}from   "react";


class Sample2_class extends Component{
    constructor(){
        super()
        this.state={color:'red',width:'2000px'}
    }
    render(){
        return(
<h3>hello world{this.state.color}{this.state.width}</h3>
        )
    }
}
export default Sample2_class