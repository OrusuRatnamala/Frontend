import Dataservice from "./Dataservice";
import { useEffect, useState } from "react";
 
function DataComponent() {
 
    const [database,setData] = useState([])
   
    useEffect(()=>{
        getData()
    },[])
 
    const getData = () =>{
        Dataservice.getData().then((Response) =>{
            setData(Response.data.posts)
            console.log(Response.data.posts);
            console.log(Response.data);
        });
    };
 
    return (
        <div>
            <h1><center>Database Table</center></h1><hr />
            <table align="center" border={2} cellPadding={10}>
                <thead>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </thead>
                <tbody>
                    {
                        database.map(
                            database =>
                                <tr key={database.id}>
                                    <td>{database.userId}</td>
                                    <td>{database.id}</td>
                                    <td>{database.title}</td>
                                    <td>{database.body}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default DataComponent;
