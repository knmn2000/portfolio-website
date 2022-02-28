import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Folks, I am <span className='purple'>Karan Mannan </span>
            from <span className='purple'> Haryana, India.</span>
            <br />I am a Computer Science Undergrad from Manipal Univesity
            Jaipur
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Playing Fingerstyle Guitar
            </li>
            <li className='about-activity'>
              <ImPointRight /> Trying my hand at Photoshop
            </li>
            <li className='about-activity'>
              <ImPointRight /> Making 3D models using Blender
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: 'rgb(155 126 172)' }}>
            "Be Brave enough to be Bad at something new!"{' '}
          </p>
          <footer className='blockquote-footer'>James Acuff</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
