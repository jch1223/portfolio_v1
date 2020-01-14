import { useState } from 'react';
import Layout from '../../layout/Layout';
import Container from '../../components/Container';
import ServiceModal from '../../components/ServiceModal';
import ContentTop from '../../components/ContentTop';
import TabTop from '../../components/TabTop';
import TabBottom from '../../components/TabBottom';
import styled from 'styled-components';

const MidContentStyeld = styled.div`
  text-align: center;
  margin-bottom: 110px;
  .title {
    font-size: 40px;
    font-weight: bold;
  }
  .content {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    margin-bottom: 40px;
    .title {
      font-size: 29px;
    }
    .content {
      font-size: 17px;
    }
  }
`;

const Service = props => {
  const [focus, setFocus] = useState('chabot');
  const [subFocus, setSubFocus] = useState('service');
  const [layer, setLayer] = useState(false);
  const [serviceName, setServiceName] = useState('');

  const layerHandler = e => {
    setLayer(true);
    setServiceName(e.target.name);
    console.log(serviceName);
  };

  const layerClose = e => {
    setLayer(!layer);
  };

  return (
    <Layout
      title={'자동차로 하나되는 세상, 차봇 ㅣ CHABOT service'}
      focus={focus}
      subFocus={subFocus}
    >
      <ContentTop
        title='Service'
        url={'/static/service'}
        img={'2_top_banner.jpg'}
        mImg={'m_2_top_banner.jpg'}
      ></ContentTop>
      <Container>
        <TabTop></TabTop>
        <MidContentStyeld className='midContent'>
          <div className='title'>B2B 서비스</div>
          <div className='content'>차봇만의 차별화된 서비스를 경험하세요</div>
        </MidContentStyeld>
      </Container>
      <TabBottom layerHandler={layerHandler}></TabBottom>
      {layer ? (
        <ServiceModal layer={layer} layerClose={layerClose} serviceName={serviceName} />
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default Service;
