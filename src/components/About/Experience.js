import React from 'react';

function Experience() {
  return (
    <>
      <div className='exp-div'>
        <ul style={{ textAlign: 'left', listStyleType: 'none' }}>
          <div style={{ borderBottom: '1px solid white', marginBottom: '5px' }}>
            <h3>
              {' '}
              Cisco - <b className='purple'>Technical Undergraduate Intern</b>
            </h3>
            <h4>Bangalore - 2022</h4>
          </div>
          <li>
            &spades; Currently working with a team to build a tool that suggests
            firewall rules and polices automatically, based on network activity
          </li>
          <li>&clubs; This Internship is currently ongoing</li>
        </ul>
      </div>

      <div className='exp-div'>
        <ul style={{ textAlign: 'left', listStyleType: 'none' }}>
          <div style={{ borderBottom: '1px solid white', marginBottom: '5px' }}>
            <h3>
              {' '}
              RADICALi - <b className='purple'>Software Engineering Intern</b>
            </h3>
            <h4>Singapore - 2020</h4>
            <b style={{ textDecoration: 'underline' }}>
              {' '}
              <a
                href='https://drive.google.com/file/d/1Ip-pjmb1nlCVIsr4dsY8nO6m4OcOxfmB/view'
                target='_blank'
                rel='noreferrer'
              >
                Letter of recommendation
              </a>
            </b>
          </div>
          <li>
            &spades; Worked on the front-end of the product, built with{' '}
            <b className='purple'>ReactJS + TypeScript</b>. Responsibilities
            included pushing out new features for the platform, fixing bugs,
            writing tests and making enhancements to the{' '}
            <b className='purple'>UI/UX</b>.
          </li>
          <li>
            &clubs; <b className='purple'>Wrote, tested and maintained </b>
            over 190 scrapers which scrape regulatory documents and related news
            items.
          </li>
          <li>
            &hearts; Responsible for overseeing the flow of the payloads through
            upstream services (<b className='purple'>Metabase, Kibana</b>) and
            providing corrections wherever required.
          </li>
          <li>
            &diams; Wrote<b className='purple'> 18% </b>of the scrapers in the
            codebase. Increased test coverage by <b className='purple'>20%</b>.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experience;
