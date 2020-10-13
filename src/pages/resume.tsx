import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Button, Row, Col } from 'antd';
import SEO from '../components/Seo';

type ResumeState = {
  numPages: number | null;
  pageNumber: number;
};

export default () => {
  const [value, setValue] = useState<ResumeState>({
    numPages: null,
    pageNumber: 1,
  });

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setValue({
      ...value,
      numPages,
    });
  };

  const pageToggle = () => {
    if (value.pageNumber === 1) {
      setValue({
        ...value,
        pageNumber: 2,
      });
    } else {
      setValue({
        ...value,
        pageNumber: 1,
      });
    }
    return 1;
  };

  return (
    <div>
      <SEO
        title="Resume"
        description="My resume consists of my biodata of experience. You can hire me if you feel
          I'm good for any position in your organization. I'm open to various challenges that come
          in the way of building various web applications."
        path="resume"
      />
      <Document file="../resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={value.pageNumber} />
      </Document>
      <Row justify="center" style={{ background: 'lightslategray' }}>
        <Col span={2}>
          <p>{`Page ${value.pageNumber} of ${value.numPages}`}</p>
        </Col>
        <Col span={2}>
          <Button type="primary" onClick={pageToggle}>
            {value.pageNumber === 1 ? 'Next Page' : 'Previous Page'}
          </Button>
        </Col>
      </Row>
    </div>
  );
};
