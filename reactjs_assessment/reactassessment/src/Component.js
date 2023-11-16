import Service from "./Service";
import axios from "axios";
import { useEffect, useState } from "react";
 
function Component() {
 
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      axios
        .get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then((result) => {
          console.log(result.data.data);
          setPosts(result.data.data);
        })
        .catch((error) => console.log(error));
    }, []);
   
    return (
      <div>
        <h1><center>DataBase Table</center></h1><hr />
        <table align="center" border={2} cellPadding={10}>
          <thead>
            <th>ID Nation</th>
            <th>Year</th>
            <th>Population</th>
          </thead>
          <tbody>
            {
              posts.map(
                data =>
                  <tr key={data.Nation}>
                    <td>{data["ID Nation"]}</td>
                    <td>{data.Year}</td>
                    <td>{data.Population}</td>
                  </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
export default Component;
