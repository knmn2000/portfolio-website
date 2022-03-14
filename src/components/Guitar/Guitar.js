import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Particle from '../Particle';
import InstagramEmbed from 'react-instagram-embed';
import { IFrame } from './Iframe';
// " src="/embed" frameborder="0"></iframe>`;
const videoLinks = [
  'https://www.instagram.com/reel/CX9DfgSqnL3',
  'https://www.instagram.com/reel/CYBFfhlqbGq',
  'https://www.instagram.com/p/CXoK-AbhMeC',
  'https://www.instagram.com/p/CXdrwyYB1JI',
  'https://www.instagram.com/p/CUyzgC6hF-Q',
  'https://www.instagram.com/p/BsdXvsIn0yx',
  'https://www.instagram.com/p/CUsYvWFKhaf',
  'https://www.instagram.com/p/CZqx0p_BPXl',
  'https://www.instagram.com/p/CUr5-gpKgbm',
  'https://www.instagram.com/p/CG6itrUnuaT',
  'https://www.instagram.com/p/CUr4ZAnAAI9',
  'https://www.instagram.com/p/CUrBRuPBap1',
  'https://www.instagram.com/p/B9_NUXyDXAV',
  'https://www.instagram.com/p/BvewCpUA60z',
  'https://www.instagram.com/p/CSCLHgPB3Lb',
  'https://www.instagram.com/p/CR_RBNGBnKj',
  'https://www.instagram.com/p/BySQq4eHYta',
];
function Guitar() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My <strong className='purple'>Guitar Videos</strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few of my guitar videos i've made over the years
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {videoLinks.map((link, index) => {
            return (
              <Col md={4} className='project-card' key={link + index}>
                <Card className='project-card-view'>
                  <Card.Body style={{ height: '500px' }}>
                    <iframe
                      width='100%'
                      height='100%'
                      title='instagram post'
                      style={{ padding: 0, margin: 0 }}
                      src={
                        'data:text/html,' +
                        encodeURIComponent(
                          `<iframe style="padding: 0;margin: 0;width: 100%;height: 100%;" src="${link}/embed" frameborder="0"></iframe>`
                        )
                      }
                    />
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Guitar;
