import React, { Component } from 'react'

import Style from '../../Common/Style';
import styled from 'styled-components';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        
      </Container>
    )
  }
}


const Container = styled.div`
  flex: 72px;
  background: ${Style.Dark};
`
