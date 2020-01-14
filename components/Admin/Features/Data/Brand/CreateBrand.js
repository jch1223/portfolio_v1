import React, { Component } from 'react';
import {
  Container,
  Header,
  Body,
  Space,
  TitleWrapper,
  Title,
  SubTitle,
  Description,
  Contents,
  InputFrom,
  Input,
  SubmitButton,
  Dropdown
} from '../../Common/StyleComponent';
// import MutationCreator from '../../../API/Mutation';
// import client from '../../../client';

export default class CreateBrand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brandList: '',
      name: '',
      api_name: '',
      type: '',
      file: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.brandRegister = this.brandRegister.bind(this);
  }

  render() {
    return (
      <Container>
        <Header></Header>
        <Body>
          <Space space={'30px'} />
          <TitleWrapper>
            <Title>브랜드 등록</Title>
            <SubTitle>*만드는중</SubTitle>
          </TitleWrapper>
          <Description> 내용 넣을곳 </Description>
          <Space space={'30px'} />
          <Contents>
            <InputFrom>
              <Input
                type={'text'}
                name={'name'}
                placeholder={'브랜드 명'}
                onChange={this.handleChange}
              />
              <Space space={'10px'} />
              <Input
                type={'text'}
                name={'api_name'}
                placeholder={'브랜드 API 명'}
                onChange={this.handleChange}
              />
              <Space space={'10px'} />
              <Input
                type={'file'}
                name={'file'}
                required
                placeholder={''}
                onChange={this.handleChange}
              />
              <Space space={'10px'} />
              <Dropdown
                name={'type'}
                placeholder={'브랜드 타입'}
                value={this.state.type}
                onChange={this.handleChangeSelect}
                options={[
                  { value: 'domestic', label: '국내' },
                  { value: 'imported', label: '국외' }
                ]}
              />
              <Space space={'10px'} />
              <SubmitButton type='button' value='등록' onClick={this.brandRegister}></SubmitButton>
            </InputFrom>
          </Contents>
        </Body>
      </Container>
    );
  }

  async brandRegister() {
    const brand = {
      name: this.state.name,
      api_name: this.state.api_name,
      type: this.state.type,
      file: this.state.file
    };

    // const response = await client.mutate({mutation: MutationCreator.adminCreateBrand(), variables: {brand} });

    // if (response.data.adminCreateBrand === "success") {
    //     alert("등록 되었습니다!");
    //     this.props.history.push('/dashboard/brand');
    // } else {
    //     alert("등록에 실패하였습니다.")
    // }
  }

  handleChangeSelect = selectedOption => {
    this.setState({ type: selectedOption.value });
  };

  handleChange(e) {
    console.log('TCL: CreateBrand -> handleChange -> e.target.value', e.target.value);
    console.log('TCL: CreateBrand -> handleChange -> e.target.name', e.target.name);
    if (e.target.name === 'name') {
      this.setState({ name: e.target.value });
    } else if (e.target.name === 'api_name') {
      this.setState({ api_name: e.target.value });
    } else if (e.target.name === 'file') {
      this.setState({ file: e.target.files });
    }
  }
}
