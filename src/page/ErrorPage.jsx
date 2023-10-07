import Header from '../components/header/header';
import Erro from '../components/erro/erro';
import Footer from '../components/footer/footer';

export const ErrorPage = ( ) => {
  return (
    <>
        <div className='container-fluid '>
      <Header/>
      <Erro/>
      <Footer/>
    </div>
    
    </>
  )
};