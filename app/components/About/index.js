/**
 *
 * About
 *
 */

import {
  CloudTwoTone,
  ContactsTwoTone,
  FileWordTwoTone,
  HomeTwoTone,
  MailTwoTone,
  PhoneTwoTone,
} from '@ant-design/icons';
import { Github, Linkedin } from '@icons-pack/react-simple-icons';
import { Avatar, Layout, Typography } from 'antd';
import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
} from 'react-share';
import NameBar from '../NameBar';

const { Header, Content, Sider } = Layout;

const { Title } = Typography;

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  return <a href={`mailto:${email}${params}`}>{children}</a>;
};
const IconServ = ({ url, size }) => {
  const style = {
    marginRight: 4,
  };
  const u = url.toLowerCase();
  if (u.indexOf('github') >= 0) {
    return <Github size={size} color="black" style={style} />;
  }

  if (u.indexOf('linkedin') >= 0) {
    return <Linkedin size={size} color="black" style={style} />;
  }

  return null;
};
const styles = {
  noList: { listStyleType: 'none', padding: '.5rem' },
  noListFlex: { listStyleType: 'none', padding: '.5rem', display: 'flex' },
  title: { fontSize: '.75rem', display: 'inline' },

  icon: { fontSize: '1.5em', color: '#08c', marginRight: '.5rem' },
};

const About = props => {
  const { info } = props;
  const shareUrl = info.basics.url;
  const { title } = info.basics.label;
  const first = info.basics.name.split(' ')[0];
  const last = info.basics.name.split(' ')[1];

  return (
    <>
      <NameBar
        size={200}
        mHeight="116"
        text2={first}
        text1={last}
        open
        fill1="#001529"
        fill2="rgb(240, 242, 245)"
      />

      {/* <HomeFilled  style={styles.icon}  />
<ReadFilled style={styles.icon} />
<ProfileFilled style={styles.icon} />
<PhoneFilled style={styles.icon} />
<IdcardFilled style={styles.icon} />
<MessageFilled style={styles.icon} />
<MailFilled style={styles.icon} />
<RobotFilled style={styles.icon} />
<RocketFilled style={styles.icon} />
<EnvironmentFilled style={styles.icon} />
<HeartFilled style={styles.icon} />
<GoogleSquareFilled style={styles.icon} />
<FileWordFilled style={styles.icon} />
<ThunderboltTwoTone style={styles.icon} />
<CodeFilled style={styles.icon} />
<RocketTwoTone style={styles.icon} />
<ContactsFilled style={styles.icon} />
<Html5TwoTone style={styles.icon} />
<EnvironmentTwoTone style={styles.icon} />
<ProfileTwoTone style={styles.icon} />
<ScheduleTwoTone style={styles.icon} />
<IdcardTwoTone style={styles.icon} twoToneColor="#eb2f96" />
<GoogleCircleFilled style={styles.icon} />
<FireTwoTone style={styles.icon} />
<ContactsTwoTone style={styles.icon} />
<CodeTwoTone style={styles.icon} /> */}
      <Avatar
        alt="avatar"
        size={200}
        shape="square"
        src={info.basics.image}
        style={{ maxWidth: '200px' }}
      />

      {/* </div> */}

      <ul style={styles.noList}>
        <li>
          <Title level={5} style={styles.title}>
            {info.basics.label}
          </Title>
        </li>
        <li>
          <HomeTwoTone style={styles.icon} />
          <Title level={5} style={styles.title}>
            {info.basics.location.city}, {info.basics.location.region},
            {info.basics.location.countryCode}
          </Title>
        </li>
        <li>
          <Mailto
            email={info.basics.email}
            subject="Johnm.org Contact"
            body="Hello John!"
          >
            <MailTwoTone style={styles.icon} />
            <Title level={5} style={styles.title}>
              {info.basics.email}
            </Title>
          </Mailto>
        </li>
        <li>
          <a href={`tel:${info.phone}`}>
            <Title level={5} style={styles.title}>
              <PhoneTwoTone style={styles.icon} />

              {info.basics.phone}
            </Title>
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1Vv7l8rsQm-VdrjjnzWg4_xI7A3mGe76x/view?usp=sharing">
            <Title level={5} style={styles.title}>
              <CloudTwoTone style={styles.icon} />
              Google Docs Resume
            </Title>
          </a>
        </li>
        <li>
          <a href="5-28-21-jmres.docx" download>
            <Title level={5} style={styles.title}>
              <FileWordTwoTone style={styles.icon} />
              Word Resume
            </Title>
          </a>
        </li>
        <li>
          <a href="John_Marczak.vcf" download>
            <Title level={5} style={styles.title}>
              <ContactsTwoTone style={styles.icon} />
              My Vcard
            </Title>
          </a>
        </li>
        <li style={{marginTop:'5px'}}>
          This site was built with <a href="https://facebook.github.io/react/">React</a>, <a href="https://jsonresume.org/schema/">JSON Resume Schema</a>,
           <a href="https://registry.jsonresume.org/johnnyboyct">My JSON resume is here</a>. The full source code can be found in <a href="https://github.com/johnnyboyct/">my Github repo</a>.
        </li>
      </ul>
      <ul style={styles.noListFlex}>
        <li>
          <a
            href={info.basics.profiles[0].url}
            target="_blank"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
            }}
            rel="noreferrer"
          >
            <IconServ url={info.basics.profiles[0].url} size="32" />
          </a>
        </li>
        <li>
          <a
            href={info.basics.profiles[1].url}
            target="_blank"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
            }}
            rel="noreferrer"
          >
            <IconServ url={info.basics.profiles[1].url} size="32" />
          </a>
        </li>
        <li>
          <LinkedinShareButton
            url={shareUrl}
            className="Demo__some-network__share-button"
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </li>
        <li>
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body="body"
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </li>
        <li>
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </li>
        {/* <li>
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </li> */}
        <li>
          <RedditShareButton
            url={shareUrl}
            title={title}
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button"
          >
            <RedditIcon size={32} round />
          </RedditShareButton>
        </li>
      </ul>
    </>
  );
};

About.propTypes = {};

export default About;
