import Service from "./Service";
import axios from "axios";
import { useEffect, useState } from "react";
 
function Component() {
 
    const [posts,setPosts] = useState([])
   
    useEffect(()=>{
        axios
        .get("https://cat-fact.herokuapp.com/facts/")
        .then((result) => {
          console.log(result.data);
          setPosts(result.data);
        })
        .catch((error) => console.log(error));
    }, []);
       
 
    return (
        <div>
            <h1><center>Database Table</center></h1><hr />
            <table align="center" border={2} cellPadding={10}>
                <thead>
                <th>_id</th>
                    <th>user</th>
                    <th>text</th>
                    <th>__v</th>
                    <th>source</th>
                    <th>updatedAt</th>
                    <th>type</th>
                    <th>createdAt</th>
                    <th>deleted</th>
                    <th>used</th>
                </thead>
                <tbody>
                    {
                        posts.map(
                            data =>
                            <tr key={data._id}>
                            <td>{data.user}</td>
                            <td>{data._id}</td>
                            <td>{data.text}</td>
                            <td>{data.__v}</td>
                            <td>{data.source}</td>
                            <td>{data.updatedAt}</td>
                            <td>{data.type}</td>
                            <td>{data.createdAt}</td>
                            <td>{data.deleted}</td>
                            <td>{data.used}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default Component;
