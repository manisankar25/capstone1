import axios from 'axios';

export default class AllApiCall{
  static  LoadData(){
       return axios.get("http://localhost:3000/maindata")
       .then(res=>
        res.data
        );
    }


    static deleteProduct(id){
        return axios.delete('http://jsonplaceholder.typicode.com/photos/'+id).then(res=>{
        
        alert("product Successfully deleted")
        })
    }


}