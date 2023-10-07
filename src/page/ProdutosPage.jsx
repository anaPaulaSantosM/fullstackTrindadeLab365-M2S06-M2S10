import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import MenuProdutos from '../components/menuProdutos/menuProdutos';
import { useContext, useEffect } from 'react';
import { BannerContext } from '../shared/contexts/BannerContext';


export const ProdutosPage = () => {
  const {setData} = useContext(BannerContext)

  useEffect(() => {
     setData({titulo:'Nossos Produtos Personalizados', paragrafo: 'Confira os principais produtos que a DrPapel oferece para você'})
  }, []);


 
  return (
    <>
    <div className='container-fluid '>
      <Header/>
      <Banner/>
      <MenuProdutos/>  
      <Footer/>
    </div>
    
    </>
  )
};