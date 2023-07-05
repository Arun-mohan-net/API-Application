import {Card, Form, FormGroup, Button} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
export function Edituserpage(){
    const {Id} = useParams();
   
    const [name,setName] = useState("");
    const [email,setemail] = useState("");
    const [age,setAge] = useState("");
    const navigate = useNavigate();
    const [premiumMember,setpremiumMember] = useState(false);
    const fetchuser = async ()=>{
        
        const response = await axios.get("http://localhost:8000/users/"+Id);
       const user = response.data;
       setName(user.name);
       setemail(user.email);
       setAge(user.age);
       setpremiumMember(user.premiumMember);
    }

    useEffect(()=>fetchuser, [Id]);
    const updateUser = async (event)=>{
        event.preventDefault();
        const response = await axios.patch(
            "http://localhost:8000/users/"+Id,
            {
                name: name,
                email: email,
                age: parseInt(age),
                premiumMember: premiumMember
            }
        );
        const id = response.data.id;
        navigate("/users/"+id)
    }

    return <div className="raw justify-content-center">
        <div className="col-md-4">
         <Card className="p-4">
            <Form onSubmit={updateUser}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" required placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required placeholder="name@example" value={email} onChange={(event) => setemail(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" required placeholder="Age" value={age} onChange={(event) => setAge(event.target.value)}/>
                </Form.Group>
                <FormGroup className="mb-3">
                    <Form.Check type="checkbox" label="premium User" checked={premiumMember} onChange={() => setpremiumMember(!premiumMember)}/>                
                </FormGroup>
                <Button variant="primary" type="submit">
                    Save
                </Button>
            </Form>
         </Card>
        </div>
    </div>

}









