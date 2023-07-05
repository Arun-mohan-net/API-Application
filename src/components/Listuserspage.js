import { Table, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css"
export function Listuserspage(){

const [data, setData] = useState([]);
const fetchusers = async ()=>{
    const response = await axios.get("http://localhost:8000/users");
    setData(response.data);
}

useEffect(()=>{
    fetchusers();
},[])

const deleteUser = (user) =>{
    axios.delete(
        "http://localhost:8000/users/"+user.id
    ).then(()=>{
        alert(user.name + "Deleted!");
        fetchusers();
    })
}
    return <Table striped borded hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map(
                    (user,index)=><tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>
                        <Link to={"/users/"+user.id}>,
                        <Button varient="primary" size="sm">View</Button>
                        </Link>
                        
                        <Link to={"/users/"+user.id+"/edit"}>
                            <Button className="btn-info align" size="sm">Edit</Button>
                        </Link>
                
                        <Button className="btn-danger align" size="sm" onClick={()=>deleteUser(user)}>Delete</Button>
    
                    </td>
                </tr>
                )
            }
        </tbody>
        
        
        
        
        
     </Table>
}