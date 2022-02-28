import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

import bajaj from '../../Assets/Projects/bajajfinsearch.png';
import crossboards from '../../Assets/Projects/crossboards.png';
import elonmusk from '../../Assets/Projects/elonmusk.jpg';
import jioguessr from '../../Assets/Projects/jioguessr.jpg';
import sonic from '../../Assets/Projects/sonic.jpg';
import retweet from '../../Assets/Projects/retweetbot.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My <strong className='purple'>Work </strong>
        </h1>
        <p style={{ color: 'white' }}>Here are a few projects I've worked on</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bajaj}
              title='Bajaj Finsearch'
              description='Developed a website search engine as part of the Bajaj HackRx 2.0 hackathon,
where our team was shortlisted from 2500+ teams.'
              github='https://github.com/knmn2000/Bajaj_FinSearch-hackrx2.0'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={sonic}
              title='Code Template Generator'
              description=' While working in the scraping team at Radicali, I built out a code template
generator which helped the developers build out scrapers much faster, as the
scraper’s codebase was very repetitive with over 190+ scrapers.'
              webapp='https://sonic-templater.herokuapp.com/'
              github='https://github.com/knmn2000/Miles-Prower'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={crossboards}
              title='CrossBoards'
              description='Made a React Native app and a ReactJS webapp to make copying text across
devices easier. All content is synced via Firestore, in real-time'
              github='https://github.com/knmn2000/crossBoards'
              webapp='https://crossboards.netlify.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={jioguessr}
              title='JioGuessr'
              description=' Open source version of the popular game GeoGuessr. The game drops you in a
random Google maps-street view location, and the player needs to guess where
they are by navigating around the streets and looking for clues.
'
              github='https://github.com/knmn2000/jioGuessr'
              webapp='https://jioguessr.netlify.com/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={elonmusk}
              title='MuskAPI'
              description='Scraped the twitter profile of Elon Musk for his tweets and made them available
as a service publicly'
              webapp='https://musk-api.netlify.app/'
              github='https://github.com/knmn2000/MuskAPI'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={retweet}
              title='Retweet Bot'
              description='A retweeting bot made with the purpose of getting the hashtag
ManipalFeesFiasco to trending, to protest against the college fees. This hashtag
achieved 20 on trending in India. The university made fee readjustments
following the online protests'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
