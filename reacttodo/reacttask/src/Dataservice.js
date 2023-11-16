import React from "react";
import axios from "axios";
 
const DATABASE = "https://jsonplaceholder.typicode.com/db"
 
class Dataservice{
    getData(){
        return axios.get(DATABASE);
    }
   
}
 
export default new Dataservice;
