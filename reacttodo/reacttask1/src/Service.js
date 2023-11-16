import React from "react";
import axios from "axios";
 
const DATABASE = "https://cat-fact.herokuapp.com/facts/"
class Service{
    getData(){
        return axios.get(DATABASE);
    }
   
}
export default  Service;
