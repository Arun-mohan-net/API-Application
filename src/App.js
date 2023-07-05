
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Listuserspage} from './components/Listuserspage';
import {Edituserpage} from './components/Edituserpage';
import {Viewuserpage} from './components/Viewuserpage';
import {Adduserpage} from './components/AddUserpage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
 export default function App() {
  return (
   <BrowserRouter>
  <div>
  <Navbar  className="navbar navbar-expand-sm bg-primary navbar-dark" varient="dark">
      <Container>
        <Navbar.Brand href="/">API Application</Navbar.Brand>
        <Nav className="float-right">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/add">Add New</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    <Container className='pt-5'>
      <Routes>
        <Route index element={<Listuserspage/>}/>
        <Route path='add' element={<Adduserpage/>}/>
        <Route path="users/:Id/edit" element={<Edituserpage/>}/>
        <Route path="users/:userId" element={<Viewuserpage/>}/>

      </Routes>

    </Container>
  </div>
  </BrowserRouter>
    
  );   
}
