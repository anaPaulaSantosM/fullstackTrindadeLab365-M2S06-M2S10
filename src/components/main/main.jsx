import './main.css';
import React from 'react';


const Main = ({ children }) => {
    return (
        <div className='main '>
            <section className='kits container'>
                <h1 className='kits-ttl'>Kits Festas</h1>
                <p className='p-main'>Praticidade na escolha e economia na hora de montar a sua festa personalizada</p>
            </section>
            { children } 
        </div>

    )
}

export default Main;