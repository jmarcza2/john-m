import AboutPage from 'containers/AboutPage/Loadable';
import CertificatesPage from 'containers/CertificatesPage/Loadable';
import EducationPage from 'containers/EducationPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import ProjectsPage from 'containers/ProjectsPage/Loadable';
import ReferencesPage from 'containers/ReferencesPage/Loadable';
import SkillsPage from 'containers/SkillsPage/Loadable';
import WorkPage from 'containers/WorkPage/Loadable';
import React from 'react';
import{
HomeTwoTone,
BankTwoTone,
MessageTwoTone,
StarTwoTone,
SafetyCertificateTwoTone,
FileTextTwoTone,
CalculatorTwoTone
} from '@ant-design/icons'
function makeRoutes(data) {
  const ROUTES = [
    {
      path: '/',
      key: 'ROOT',
      exact: true,
      name: 'Home',
      description:'About Me',
      icon: () =><HomeTwoTone />,
      component: () => <HomePage info={data} />,
    },

    {
      path: '/work',
      key: 'w',
      exact: true,
      name: 'Work',
      description:'My Work History',
      icon: () =><BankTwoTone   />,
      component: () => <WorkPage info={data.work} />,
    },
    {
      path: '/references',
      key: 'r',
      exact: true,
      name: 'References',
      description:'My References',
      icon: () =><MessageTwoTone   />,
      component: () => <ReferencesPage info={data.references} />,
    },
    {
      path: '/skills',
      key: 's',
      exact: true,
      name: 'Skills',
      description:'My Skills',
      icon: () =><StarTwoTone  />,

      component: () => <SkillsPage info={data.skills} />,
    },
    {
      path: '/certificates',
      key: 'c',
      exact: true,
      name: 'Certificates',
      description:'My Certificates',
      icon: () =><SafetyCertificateTwoTone  />,

      component: () => <CertificatesPage info={data.certificates} />,
    },
    {
      path: '/projects',
      key: 'p',
      exact: true,
      name: 'Projects',
      icon: () =><FileTextTwoTone  />,
      description:'My Projects',

      component: () => <ProjectsPage info={data.projects} />,
    },
    {
      path: '/education',
      key: 'e',
      exact: true,
      name: 'Education',
      description:'My Education',
      icon: () =><CalculatorTwoTone  />,
      component: () => <EducationPage info={data.education} />,
    },
  ];

  return ROUTES;
}

export default makeRoutes;
