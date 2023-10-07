import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import Form from '../components/form/form';
import Card from '../components/card/card';
import Footer from '../components/footer/footer';
import { useContext, useEffect } from 'react';
import { BannerContext } from '../shared/contexts/BannerContext';


export const ContatoPage = ( ) => {
    const {setData} = useContext(BannerContext)
  
    useEffect(() => {
       setData({titulo:'Contate-nos', paragrafo: 'Envie sua sugestão, dúvida ou reclamação no formulario abaixo'})
    }, []);

  return (

    <>
      <Header/>
      <Banner/>
      <Form/>
      <Card/>
      <Footer/>
   </>
  )
}
