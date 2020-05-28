import { useState } from 'react';
import Layout from '../../layout/Layout';
import Container from '../../components/Container';
import ContentTop from '../../components/ContentTop';
import TabTop from '../../components/TabTop';

const Project = (props) => {
  const [focus, setFocus] = useState('intro');
  const [subFocus, setSubFocus] = useState('project');

  return (
    <Layout focus={focus} subFocus={subFocus}>
      <ContentTop
        title='Project'
        url={'/static'}
        img={'top_banner.jpg'}
        mImg={'top_banner.jpg'}
      ></ContentTop>

      <Container></Container>
    </Layout>
  );
};

export default Project;
