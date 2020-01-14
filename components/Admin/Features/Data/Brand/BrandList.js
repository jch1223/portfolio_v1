import React, { Component } from 'react'

import {Query} from '@apollo/react-components';
import QueryCreator from '../../../API/Query';

import ListTable from '../../Common/ListTable';
import { Container, Header, Body, Space, FlexEndWrapper } from '../../Common/StyleComponent';
import Filter from '../../Common/Filter'

export default class BrandList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemType: "Brand",
      brandId: null,
    }

    this.selectHandler = this.selectHandler.bind(this);
    // this.spreadList = this.spreadList.bind(this);
  }

  render() {
    return (
      <Container>
        <Header>

        </Header>
        <Body>
          <Space space="60px"/>
          <Query query={QueryCreator.adminGetAllBrands()}>
              {({loading, error, data}) => {
                if (loading) return null;
                if (error) return <div>{error.message}</div>
                let tempArray = [{value: null, label: "전체"}]
                data.adminGetAllBrands.map(element => {
                  tempArray.push({value: element.id, label: element.name});
                });
                
                return(
                  <Filter
                    useSelect={true}
                    selectName={"brand"}
                    selectPlaceholder={"브랜드 목록"}
                    selectHandler={this.selectHandler}
                    selectOption={tempArray}
                    useInput={false}
                    placeholder={"브랜드명을 적어주세요."}
                  />
                )
          }}
          </Query>
          <Space space="30px"/>
          <Query query={this.state.brandId? QueryCreator.adminGetBrandById(this.state.brandId):QueryCreator.adminGetAllBrands()}>
              {({loading, error, data}) => {
                if (loading) return null;
                if (error) return <div>{error.message}</div>
                return (
                    <ListTable 
                      tableTitle={"브랜드 관리"} 
                      subTitle={"* 현재 더미데이터를 넣어 정확한 브랜드가 아닐 수 있습니다."} 
                      itemType={this.state.itemType} 
                      itemHeader={["브랜드코드", "브랜드 로고", "브랜드명", "API이름", "타입"]} 
                      itemList={this.state.brandId? [data.adminGetBrandById]:data.adminGetAllBrands}
                      useRegister={true}
                      buttonUrl={"/dashboard/brand/register"}
                      usePagination={true}
                    />
                );
              }}
          </Query>
        </Body>
      </Container>
    );
  }

  selectHandler = selectedOption => {
    this.setState({brandId: selectedOption.value});
  }

  // spreadList() {
  //   console.log("TCL: spreadList -> this.state.brandId", this.state.brandId)
  //   return (
      
  //   )
  // }


}