import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import { Colapse } from './../components/colapse/colapse';
import { useContext, useEffect } from 'react';
import { BannerContext } from '../shared/contexts/BannerContext';


/* import { Input } from 'react-bootstrap'; */
import  InputComponentFAQ from '../components/InputComponent/InputFAQComponent';


export const FAQPage = ( ) => {  
   const {setData} = useContext(BannerContext)
  
    useEffect(() => {
       setData({titulo:'Dúvidas?', paragrafo: 'Confira as principais dúvidas dos nossos clientes. Utilize a pesquisa para facilidar.'})
    }, []);

  return (
    
    
    <>
    <div className='container-fluid '>
      <Header/>
      <Banner/>

      <InputComponentFAQ/>
    
      <Colapse/>
      <Footer/>
    </div>
    
    </>
  )
};