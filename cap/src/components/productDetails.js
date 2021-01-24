import React,{Component} from 'react';
export default class ProductDetails extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("aaaaaaaaaaaaaaaaaa",this.props.location)
        return(<div>
            <h3>Product Details</h3>

        </div>)
    }
}