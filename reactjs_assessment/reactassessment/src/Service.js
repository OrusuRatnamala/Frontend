import React from "react";
import axios from "axios";
 
const DATABASE = "https://jsonplaceholder.typicode.com/d"
class Service{
    getData(){
        return axios.get(DATABASE);
    }
   
}
export default  Service;
