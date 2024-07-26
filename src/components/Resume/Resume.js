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
  'https://github.com/user-attachments/files/16389628/karan_mannan_resume_2024.pdf';

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
