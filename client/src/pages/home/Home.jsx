import React from 'react'
import Header from '../../components/header/Header'
import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  font-weight: 500;
`

const Option = styled.option`

`

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <div className="home__country">
        <span className='home__label'>Country</span>
        <Select name="country">
          <Option defaultValue >
            All
          </Option>
          <Option>France</Option>
          <Option>Norway</Option>
          <Option>Germany</Option>
          <Option>Netherlands</Option>
          <Option>Australia</Option>
          <Option>EIRE</Option>
          <Option>United</Option>
        </Select>
      </div>
    </div>
  )
}

export default Home
