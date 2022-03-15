import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import pdf from '../../Assets/KaranMannan_Resume.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  'https://raw.githubusercontent.com/knmn2000/resume/62ca47a33a35d43ac64d280011ff688ec8f59249/KARAN_MANNAN_RESUME-FEB22.pdf';

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className='resume-section'>
        <Particle />
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant='primary' href={pdf} target='_blank'>
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className='resume'>
          <Document file={resumeLink}>
            <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
