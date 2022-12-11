import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-8'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/addUser" element={<AddUser />} />
                            <Route path="/editUser/:id" element={<EditUser />} />
                        </Routes>
                    </div>
                    <div className='col-lg-2'></div>
                </div>
            </div>
        </BrowserRouter>


    );
}

export default App;
