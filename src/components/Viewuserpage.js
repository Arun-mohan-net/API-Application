
import {Card, Table} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
export function Viewuserpage(){
    const {userId} = useParams();
    const [user, setUser] = useState(undefined);
    const fetchUser = async ()=>{
        const response = await axios.get("http://localhost:8000/users/"+userId);
        setUser (response.data);
    }
    useEffect(()=>{fetchUser()}, [userId]);
    if(user === undefined)
    return <div>Loading!!!</div>;
    return <Card>
        <Table>
            <tbody>
                <tr>
                    <td>ID</td>
                    <td>{userId}</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>EMAIL</td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td>AGE</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>PREMIUM USER</td>
                    <td>{user.premiumMember ? "yes": "No"}</td>
                </tr>
            </tbody>
        </Table>
    </Card>
}