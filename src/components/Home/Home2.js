import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/math.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiFillCode } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I've always loved tinkering with electronics and have found
              <b className='purple'> programming </b>to be a great outlet for
              creativity.
              <br />
              <br />I am fluent in the classics &#8212;
              <i>
                <b className='purple'> C++, Javascript, Python and Rust</b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className='purple'>Web Technologies and Products </b> and
                also in areas related to{' '}
                <b className='purple'> Mobile app development </b>
                and
                <b className='purple'> Computer Networks</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className='purple'>Node.js</b> and
              <i>
                <b className='purple'>
                  {' '}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className='purple'> React.js</b> and{' '}
                <b className='purple'>Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/knmn2000'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/karan-mannan/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className='social-icons'>
                <a
                  href='https://leetcode.com/KapProDes/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillCode />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
