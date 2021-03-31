import React from 'react';
import {Bar} from 'react-chartjs-2';
import { connect } from 'react-redux';
import axios from 'axios';


const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
} 

class Barchart extends React.Component {
    constructor(props){
        super(props)
        this.state={
            totalData:[ {
                "id": 1,
                "product": "samsung s10",
                "productDesc": "good camera",
                "manufactures": "Sumsung",
                "price": 30000,
                "quantity": 1,
                "visited":2
              },
              {
                "id": 2,
                "product": "iPhone 10",
                "productDesc": "good performance",
                "manufactures": "Apple",
                "price": 50000,
                "quantity": 1,
                "visited":5
              },
              {
                "id": 3,
                "product": "Note 5pro",
                "productDesc": "budget Mobile",
                "manufactures": "MI",
                "price": 10000,
                "quantity": 1,
                "visited":8
              },
              {
                "id": 4,
                "product": "Honor Play",
                "productDesc": "good camera,gaming phone",
                "manufactures": "HONOR",
                "price": 15000,
                "quantity": 1,
                "visited":1
              },
              {
                "id": 5,
                "product": "Note10",
                "productDesc": "good camera,good display",
                "manufactures": "Real Me",
                "price": 20000,
                "quantity": 1,
                "visited":6
              }],
              labels:[],
              datasets:[]
              
        }
    }
    topviewedData(){
        this.state.totalData.sort(function(a, b) {
            return parseFloat(b.visited) - parseFloat(a.visited);
        });
        console.log("sorteeeeeeeee",this.state.totalData)
        let label=[];
        for(var i=0;i<6;i++){
            label.push(this.state.totalData[i].productDesc)
        }
        let visit=[];
        for(var i=0;i<6;i++){
            visit.push(this.state.totalData[i].visited)
        }
        console.log("labeeeeeeeeeee",label)
        console.log("vvvvvvv",visit)
        this.setState({
            labels:label,
            datasets:visit
        })



    }
    componentDidMount(){

        this.topviewedData()
    }
    
  render() {
     
      console.log("dataaaa",this.props.users.users)
    return (
      <div>
        <Bar
          data={state}
        />
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(Barchart)