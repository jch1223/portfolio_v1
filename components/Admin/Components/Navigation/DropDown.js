import React, { PureComponent } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Style from '../../Common/Style';

class DropDown extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    subMenu: PropTypes.array.isRequired,
    isClicked: PropTypes.bool,
    onClick: PropTypes.func
  };

  static defaultProps = {
    isClicked: false
  };

  constructor(props) {
    super(props);
    this.state = {
      isClicked: props.isClicked
    };

    this.createSubMenu = this.createSubMenu.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
    this.createStyleComponent = this.createStyleComponent.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.isClicked !== null && this.props.isClicked !== prevProps.isClicked) {
      return this.setState({ isClicked: this.props.isClicked });
    }
  }

  render() {
    const { value, subMenu, isClicked } = this.props;

    const MainWrapper = this.createStyleComponent();

    return (
      <div>
        <MainWrapper>
          <MainButton onClick={this.toggleHandler} variant='link'>
            {value}
          </MainButton>
        </MainWrapper>
        {this.state.isClicked && this.createSubMenu(subMenu)}
      </div>
    );
  }

  createStyleComponent() {
    return styled.div`
      display: flex;
      width: 100%;
      height: 80px;
      background: ${this.state.isClicked ? Style.Theme : Style.Dark};
    `;
  }

  toggleHandler() {
    if (this.props.onClick) {
      return this.props.onClick(this.props.value);
    }

    this.setState(prevState => {
      return {
        isClicked: !prevState.isClicked
      };
    });
  }

  createSubMenu(subMenu) {
    return subMenu.map(({ subTitle, path }, i) => {
      return (
        <SubWrapper key={i}>
          <SubButton to={path} variant='link'>
            {subTitle}
          </SubButton>
        </SubWrapper>
      );
    });
  }
}

const MainButton = styled(Button)`
  outline: none;
  height: 100%;
  width: 100%;
  color: ${Style.White};
  border: 0;
  border-color: transform;
  border-radius: 0;
  .btn-primary {
    display: flex;
    background-color: transform;
  }
  :hover {
    text-decoration: none;
    color: ${Style.White};
    background: ${Style.Theme};
  }
`;

const SubWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: #22394a;
`;
const SubButton = styled(Link)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: ${Style.White};
  background: #2e2e2e;
  border: 0;
  border-color: transform;
  border-radius: 0;

  :hover {
    text-decoration: none;
    color: ${Style.White};
    background: ${Style.DarkSub};
  }
`;

export default DropDown;
