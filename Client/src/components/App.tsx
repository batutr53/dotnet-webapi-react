import { useEffect, useState } from 'react';
import { IProduct } from '../model/IProduct';
import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router';
import Header from './Header';
import { ToastContainer } from 'react-toastify';


function App() {
  const [products,setProducts] =useState<IProduct[]>([]);

  useEffect(() => {
fetch("http://localhost:5097/api/Products")
.then(response => response.json())
.then(data => setProducts(data));
  },[]);

  return (
    <>
    <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar/>
    <CssBaseline/>
   <Header/>
   <Container>
    <Outlet/>
   </Container>
    </>
  )
}

export default App
