import React ,{Component} from 'react';

class Mult extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div  ClassName="mult-section">
                <div>Multiplication</div>
                <div>{this.props.num1*this.props.num2}</div>
            </div>

        )
        ;
    }
}
export default Mult;

