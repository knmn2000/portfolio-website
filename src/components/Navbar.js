import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { FaGuitar } from 'react-icons/fa';

import { CgFileDocument } from 'react-icons/cg';

function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed='top'
      expand='md'
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href='/'>
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
          <b className='purple'>
            {' '}
            KNMN<span style={{ fontSize: '1.15em' }}>2000</span>;
          </b>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto' defaultActiveKey='#home'>
            <Nav.Item style={isMobile ? { marginLeft: '0px' } : {}}>
              <Nav.Link as={Link} to='/' onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item style={isMobile ? { marginLeft: '0px' } : {}}>
              <Nav.Link
                as={Link}
                to='/about'
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: '2px' }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item style={isMobile ? { marginLeft: '0px' } : {}}>
              <Nav.Link
                as={Link}
                to='/guitar'
                onClick={() => updateExpanded(false)}
              >
                <FaGuitar style={{ marginBottom: '2px' }} /> Guitar
              </Nav.Link>
            </Nav.Item>

            {/* 
            <Nav.Item style={isMobile ? { marginLeft: '0px' } : {}}>
              <Nav.Link
                as={Link}
                to='/project'
                onClick={() => updateExpanded(false)}
              >
                <BsXDiamond style={{ marginBottom: '2px' }} /> Graphics
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item style={isMobile ? { marginLeft: '0px' } : {}}>
              <Nav.Link
                as={Link}
                to='/project'
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: '2px' }}
                />{' '}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={isMobile ? { marginLeft: '0px' } : {}}>
              <Nav.Link
                as={Link}
                to='/resume'
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: '2px' }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
