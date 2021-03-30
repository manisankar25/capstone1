import axios from 'axios';

export default class AllApiCall{
  static  LoadData(){
       return axios.get("http://localhost:3000/maindata")
       .then(res=>
        res.data
        );
    }

    static addData(user){
        debugger;
        return axios.post("http://localhost:3000/maindata",user)
        .then(()=>{
            alert("success")
        })
    }


    static deleteProduct(id){
        return axios.delete('http://jsonplaceholder.typicode.com/photos/'+id).then(res=>{
        
        alert("product Successfully deleted")
        })
    }
    static saveUser(user){
        return axios.post('http://localhost:3000/userdetails',user).then(res=>{
            console.log(res.data);
            alert("successful saved")
        })
    }


}





















