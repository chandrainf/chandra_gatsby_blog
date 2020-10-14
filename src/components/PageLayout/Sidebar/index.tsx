import React from 'react';
import { Affix, Layout, Row, Col } from 'antd';
import FA from 'react-fontawesome';
import * as FeatherIcon from 'react-feather';
// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
import Config from '../../../../config';

const { Content } = Layout;
const { github, linkedin } = Config.social;

const DomContent = () => (
  <aside>
    <div className={style.profileAvatar} />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2>
          <span>Chandra</span> <span> Pratama </span>
        </h2>
      </div>
      <div className={`${style.badge} ${style.badgeGray}`}>
        Self Taught Programmer
      </div>
      <div className="centerAlign box">
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <FA name="linkedin" />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FA name="github" />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FA name="linkedin" />
        </a>
      </div>
      <ul className={`box ${style.badge} contactBlock`}>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon.Calendar size="19" />{' '}
          </span>
          &nbsp; &nbsp; March 13,1992
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon.MapPin size="19" />
          </span>{' '}
          &nbsp; &nbsp; Payakumbuh, Indonesia
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon.Mail size="19" />
          </span>{' '}
          &nbsp; &nbsp;
          <a
            href="mailto:&#114;&#111;&#108;&#119;&#105;&#110;&#109;&#111;&#110;&#116;&#101;&#105;&#114;&#111;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
            target="_top"
          >
            <span className={style.emailHider}>@</span>
          </a>
        </li>
      </ul>
      <div className={style.resumeDownload}>
        <a href="../resume.pdf" download target="_blank">
          Download CV
        </a>
      </div>
    </div>
  </aside>
);

const Sidebar = (props: { children: any }) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent />;
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
              {domContent}
            </Col>
            <Col sm={24} md={15} lg={18}>
              <Layout
                className={`${style.background} ${style.boxContent} borderRadiusSection`}
              >
                {children}
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props: { children: any }) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout
              className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}
            >
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;

/*
<a href={instagram} target="_blank" rel="noopener noreferrer">
  <FA name="instagram" />
</a>
<a href={facebook} target="_blank" rel="noopener noreferrer">
  <FA name="facebook-f" />
</a>
<a href={twitter} target="_blank" rel="noopener noreferrer">
  <FA name="twitter" />
</a>
<<<<<<< HEAD

*/
=======
*/
>>>>>>> 1891c811e04e60ffa74a27a7107d6442c7c4baf8
