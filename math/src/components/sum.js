import React ,{Component} from 'react';

export default class Sum extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div  ClassName="sum-section">
                <div>Summation</div>
                <div>{this.props.var1+this.props.var2}</div>
            </div>

        )
        ;
    }
}
