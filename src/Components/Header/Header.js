import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import CustomButton from '../Button/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

const Header = (props) => {
    const pathName = props?.location?.pathname
    return (
        <Navbar bg="light" expand="lg" sticky='top' className='header'>
            <Nav.Link as={NavLink} to='/' className='home_link'>
                <Navbar.Brand className='header_home'>
                    <HomeIcon />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className='header_left'>
                    <Nav.Link 
                    as={NavLink} 
                    to='/portfolio' 
                    className={pathName == '/portfolio' ? 'header_link_active' : 'header_link'}>
                        Portfolio
                    </Nav.Link>
                </Nav>

                <Nav.Link 
                    as={NavLink} 
                    to='/' 
                    className={pathName == '/' ? 'header_link_active' : 'header_link'}>
                        Resume
                </Nav.Link>
            
                <div className='header_right'>
                    <a href=""> <FacebookIcon/> </a>
                    <a href=""> <LinkedInIcon/> </a>
                    <a href=""> <GitHubIcon/> </a>
                </div>
                <CustomButton text={'Hire Me'} icon={<TelegramIcon/>}/>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default  withRouter(Header)
