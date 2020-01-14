import React, { Component } from 'react';
import styled from 'styled-components';
import Style from '../../Common/Style';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { InputGroup, Button } from 'react-bootstrap';

class CustomSelect extends Component {
  static propsTypes = {
    name: PropTypes.name,
    // options: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <Select
        placeholder={this.props.placeholder ? this.props.placeholder : null}
        name={this.props.name ? this.props.name : null}
        styles={{
          container: styles => ({ ...styles, flex: 1, display: 'flex', color: '#29adb2' }),
          control: styles => ({
            ...styles,
            flex: 1,
            display: 'flex',
            border: '1px #29adb2 solid',
            color: '#29adb2'
          }),
          singleValue: styles => ({ ...styles, color: '#29adb2 !import' })
        }}
        onChange={this.props.onChange ? this.props.onChange : this.handleChange}
        options={this.props.options ? this.props.options : null}></Select>
    );
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
}

export const CB_ButtonWrapper = styled.div`
  width: 100%;
  height: 80px;
  background: ${Style.Theme};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Header = styled.div`
  flex: 72px;
  display: flex;
  background: ${Style.Dark};
  padding: 0 40px;
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;

export const Contents = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${Style.White};
  padding: 40px 20px;
`;
export const InputFrom = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  flex: 1;
  font-size: 15px;
  border: 1px ${Style.Theme} solid;
  color: ${Style.Theme};
  border-radius: 5px;
  padding: 5px;
`;

export const Dropdown = styled(CustomSelect)`
  flex: 1;
  font-size: 15px;
  border: none;
  color: ${Style.Theme};
`;

export const SubmitButton = styled.input`
  background: ${Style.Red};
  color: ${Style.White};
  text-align: center;
  padding: 5px;
  border: 1px ${Style.Red} solid;
  border-radius: 5px;
  font-size: 12px;
`;

export const Space = styled.div.attrs(props => ({
  space: props.space || 0
}))`
  display: flex;
  width: 100%;
  flex: ${props => props.space};
`;

export const VSpace = styled.div.attrs(props => ({
  space: props.space || 0
}))`
  display: flex;
  flex: ${props => props.space};
`;

export const FlexEndWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 20px 0;
`;
export const Title = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  align-items: center;
  margin-right: 20px;
`;
export const SubTitle = styled.div`
  flex: 1;
  display: flex;
  font-size: 12px;
  color: ${Style.Blue};
  align-items: center;
`;
export const Description = styled.div`
  background: ${Style.White};
  padding: 40px 20px;
  font-weight: bold;
  color: ${Style.DarkSub};
`;

export const Table = styled.table`
  width: 100%;
`;
export const TableBody = styled.tbody`
  border-top: 2px ${Style.Theme} solid;
  background: ${Style.White};
  width: 100%;
`;
export const TableRow = styled.tr`
  display: flex;
  width: 100%;
  padding: 10px 20px;
  border-bottom: 1px ${Style.GrayPrimary} solid;

  :hover {
    background: ${Style.Gray};
  }
`;

export const TableData = styled.td`
  flex: 1;
  text-align: center;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

export const TableHeader = styled.th`
  flex: 1;
  text-align: center;
`;

export const RegisterButton = styled.div`
  width: 100px;
  background: ${Style.Red};
  color: ${Style.White};
  text-align: center;
  padding: 5px 0;
  border: 1px ${Style.Red} solid;
  border-radius: 5px;
  font-size: 12px;
`;
