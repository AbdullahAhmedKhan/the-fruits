import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img width='160' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto menu-bar">
                            <Link to='/'>Home</Link>
                            <Link to='/inventory'>Manage Inventory</Link>


                            {
                                user ?
                                    <Link to='/myitem'>My Item</Link>
                                    :
                                    ''
                            }
                            {
                                user ?
                                    <Link to='/AddInventory'>Add Item</Link>
                                    :
                                    ''
                            }
                            <Link to='/blogs'>Blogs</Link>
                        </Nav>
                        <Nav>
                            <Nav className='menu-bar'>
                                {
                                    user ?
                                        <Link to="/login"><span className='sign-btn bg-danger' onClick={handleSignOut}>Signout</span></Link>
                                        :
                                        <Link to="/login"><span className='sign-btn'>Login</span></Link>

                                }
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;