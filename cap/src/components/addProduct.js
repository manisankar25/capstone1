import React, { Component } from 'react';
import mainstore from '../store/mainstore';
import * as userActions from '../actions/userAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


class Addproduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: "",
            productDesc: "",
            manufactures: "",
            price: "",
            quantity: ""
        }
    }

    productE = (e) => {

        this.setState({
            product: e.target.value
        })
    }
    productDescE = (e) => {

        this.setState({
            productDesc: e.target.value
        })
    }
    manufacturesE = (e) => {

        this.setState({
            manufactures: e.target.value
        })
    }
    priceE = (e) => {

        this.setState({
            price: e.target.value
        })
    }
    quantityE = (e) => {

        this.setState({
            quantity: e.target.value
        })
    }
    SubmitE = () => {
        this.props.actions.addUser(this.state).then((res) => {
            alert("ssss")
            this.props.history.push('/')
        })
    }
    render() {
        console.log("fff", this.props)
        return (<div>
            <h2>Add Product</h2>
            <form onSubmit={this.SubmitE}>
                <div>
                    <label>Product Name</label>
                    <input type="text" value={this.state.product} onChange={this.productE}></input>
                </div>
                <div>
                    <label>Product Decription</label>
                    <input type="text" value={this.state.productDesc} onChange={this.productDescE}></input>
                </div>
                <div>
                    <label>Manufacture</label>
                    <input type="text" value={this.state.manufactures} onChange={this.manufacturesE}></input>
                </div>
                <div>
                    <label>price</label>
                    <input type="number" value={this.state.price} onChange={this.priceE}></input>
                </div>
                <div>
                    <label>quantity</label>
                    <input type="number" value={this.state.quantity} onChange={this.quantityE}></input>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>)
    }
}

function mapStateToProps(state, ownProps) {
    console.log("state in allproducts", state)
    return {
        users: state.users
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

const ShowTheLocationWithRouter = withRouter(Addproduct);

export default connect(mapStateToProps, mapDispatchToProps)(ShowTheLocationWithRouter)