import{Component}from   "react";


export default class Sample1_class extends Component{
    constructor(){
        super()
        
    }
    render(){
        return(
<h3>hello world{this.props.color}</h3>
        )
    }
}
