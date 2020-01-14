import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Style from '../../Common/Style';
import { Dropdown, Input, VSpace } from './StyleComponent';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  static propTypes = {
    //Select
    useSelect: PropTypes.bool,
    selectName: PropTypes.string,
    selectHandler: PropTypes.func,
    selectOption: PropTypes.array,
    selectPlaceholder: PropTypes.string,

    //Input
    useInput: PropTypes.bool,
    buttonText: PropTypes.bool,
    placeholder: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        {this.props.useInput && (
          <Fragment>
            <Button>{this.props.buttonText ? this.props.buttonText : '조회'}</Button>
            <Input placeholder={this.props.placeholder ? this.props.placeholder : null}></Input>
          </Fragment>
        )}
        <VSpace space={'30px'} />
        {this.props.useSelect ? (
          <Dropdown
            name={this.props.selectName ? this.props.selectName : ''}
            placeholder={this.props.selectPlaceholder ? this.props.selectPlaceholder : ''}
            value={this.state.type}
            onChange={this.props.selectHandler ? this.props.selectHandler : this.handleChangeSelect}
            options={this.props.selectOption ? this.props.selectOption : []}
          />
        ) : null}
      </Container>
    );
  }
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  background: ${Style.GrayLight};
  border-top: 1px ${Style.GrayPrimary} solid;
  padding: 40px 20px;
`;

const Button = styled.button`
  display: flex;
  align-item: center;
  align-content: center;
  justify-content: center;
  background: ${Style.Theme};
  color: ${Style.White};
  width: 100px;
  border: none;
  border-radius: 5px;
  margin-left: 20px;
`;
