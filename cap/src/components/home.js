import React, { Component } from 'react';
import { connect } from 'react-redux';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }

    }
    componentDidMount() {
        this.setState({
            data: this.props.users.users
        })
    }

    render() {
        console.log("datatatattatata", this.props.users.users)
        const data = this.props.users.users;
        return (<div>
            <h1>Product List</h1>

            {
                this.props.users.users.map((dat) => {
                    return (
                        <div className="card-columns" style={{ display: "inline-block" }}>
                            <div className="card" style={{ width: "18rem",border:"solid 1px black",margin:"2px" }}>
                                <div className="card-header">
                                    {dat.product}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{dat.manufactures}</h5>
                                    <p className="card-text">{dat.productDesc}</p>
                                </div>
                            </div>
                        </div>)


                })

            }

        </div>)
    }
}

function mapStateToProps(state, ownProps) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Home)