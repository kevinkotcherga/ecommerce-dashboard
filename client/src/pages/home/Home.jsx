import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import styled from "styled-components";
import './home.scss';
import axios from 'axios';

const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  font-weight: 500;
`

const Option = styled.option`

`

const Home = () => {

  // useState récupère le pays choisi avec onChange={handleFilters}
  const [country, setCountry] = useState({});
  // À chaque changement d'option du select, handleFilters récupère l'information du pays choisi
  const handleFilters = (element) => {
    const value = element.target.value;
    // Le pays choisi est stocké dans setCountry
    setCountry(value);
  };

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(country === 'All' ? 'http://localhost:3000/search.json' : `http://localhost:3000/search.json?q=${country}`);
        setFilteredProducts(response.data)
      } catch (err) {}
    };
    getProducts()
  }, [country]);

  const array = filteredProducts.memories

  const arr = array || [];

  return (
    <div className='home'>
      <Header />
      <div className="home__country">
        <span className='home__label'>Country</span>
        <Select name="country" onChange={handleFilters}>
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

export default Home;
