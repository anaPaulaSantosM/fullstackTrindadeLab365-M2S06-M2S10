import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import Main from '../components/main/main';
import Footer from '../components/footer/footer';
import Slider from '../components/slider/slider';
import CardProduto from '../components/cardProduto/cardProduto';

import { useContext, useEffect } from 'react';
import { BannerContext } from '../shared/contexts/BannerContext';


  


export const HomePage = () => {

  const { setData } = useContext(BannerContext)
  useEffect(() => {
    setData({       
      titulo: 'Papelaria Personalizada', 
      paragrafo: 'Deixe os momentos especiais inesquecíveis com os ítens da Dr.Papel.'}) 
      }, []);

      const cards = [
        {
        id:'1',
        imagemProduto: '../images/2.jpg',
        imagemProdutoModal: '../images/kitMini.jpg',
        nomeKit: 'Mini Party',
        descKit: 'Um Kit Perfeito para Decorar sua Festa em casa!',
        desc1: 'Topo de Bolo e Docinhos',
        desc2: 'Varal de Bandeirinhas',
        desc3: 'Caixinhas de Lembrancinha',
        desc4: 'Convite Digital',

      },
        {
        id:'2',
        imagemProduto: '../images/3.jpg',
        imagemProdutoModal: '../images/kitFriends.jpg',
        nomeKit: 'Friends Party',
        descKit: 'Um Kit Decoração em Papelaria Personalizada para deixar aquela festa com os colegas e amigos ainda mais especial!',
        desc1: 'Topo de Bolo e Docinhos',
        desc2: 'Varal de Bandeirinhas',
        desc3: 'Caixinhas de Lembrancinha',
        desc4: 'Convite Digital',

      },
        {
        id:'3',
        imagemProduto: '../images/1.jpg',
        imagemProdutoModal: '../images/kitBig.jpg',
        nomeKit: 'Big Party',
        descKit: 'Um Kit Festa para aquele encontro cheio de amigos e familiares ficar ainda mais alegre e festivo!',
        desc1: 'Topo de Bolo e Docinhos',
        desc2: 'Varal de Bandeirinhas',
        desc3: 'Caixinhas de Lembrancinha',
        desc4: 'Convite Digital',
      },

      ]



  return (
    <>
      <div className='container-fluid '>
        <Header />
        <Banner />
        <Slider/>  
        <Main>
           { cards.map(produto => <CardProduto key={produto.id} dataCard={produto}/>)}
         
        </Main>
        <Footer/>
      </div>
    </>
  )
}
