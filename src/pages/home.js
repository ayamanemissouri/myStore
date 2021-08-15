import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Product from '../components/Product';
import { CardColumns, Row } from 'react-bootstrap';
import Sidebar from '../sidebar';


export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [activeProducts, setActiveProducts] = useState([]);

  useEffect(() => {
    fetch('https://cryptic-crag-81593.herokuapp.com/api/products')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.data);
        let productsTemp = data.data;
        let tempArray = productsTemp.filter((product) => {
          return product.isActive === true;
        });

        setActiveProducts(tempArray);
      });
  }, []);

  let bannerContent = {
    title: 'Welcome to Intellcap Store',
    description: 'Get your very own MyProducts',
    label: 'Be a MyOwner',
    destination: '/register',
    label2: 'Browse All Products',
    destination2: '/products',
  };

  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  let shuffledProducts = shuffle(activeProducts).slice(0, 3);
  let productComponents = shuffledProducts.map((product) => {
    return <Product key={product._id} productProp={product} />;
  });

  return (
    <>
      <Banner bannerProp={bannerContent} />
      <CardColumns className=' alignItem mt-5' > <Sidebar />
      <div><img src='https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=642&q=80'></img></div>
      </CardColumns>
      <Row className=' alignItem mt-5'>
        <h1>FEATURED</h1>
      </Row>
      <Row className=' alignItem mt-3'>{productComponents}</Row>
    </>
  );
}
