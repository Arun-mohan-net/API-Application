import {Card,Form,Button}from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export function Adduserpage(){
    const navigate = useNavigate("");
    const [name,setName] = useState("");
    const [email,setemail] = useState("");
    const [age,setAge] = useState("");
    const [premiumMember,setpremiumMember] = useState(false);
    const submitUser = async (event)=>{
        event.preventDefault();
        const response = await axios.post(
            "http://localhost:8000/users",
           {
            name: name,
            email: email,
            age: parseInt(age),
            premiumMember: premiumMember
           }

        );
        const id = response.data.id;
        navigate("/users/"+id);
        

    }

    return <div className="raw justify-content-center">
        <div className="col-md-4">
         <Card className="p-4">
            <Form className onSubmit={submitUser}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" required placeholder="Enter name" value={name} onChange={(event)=>setName(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>email</Form.Label>
                    <Form.Control type="name" required placeholder="name@example" value={email} onChange={(event)=>setemail(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" required placeholder="Age" value={age} onChange={(event)=>setAge(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="premium User" checked={premiumMember} onChange={()=>setpremiumMember(!premiumMember)}/>                
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add New User
                </Button>
            </Form>
         </Card>
        </div>
    </div>
}