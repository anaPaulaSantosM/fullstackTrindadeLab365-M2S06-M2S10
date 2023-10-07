import React from 'react';
import '../menuProdutos/menuProdutos.css';




const MenuProdutos = () => {
    return (
        <>
        
        <section className='container container-produtos'>

        <div className='container-fluid icones-produtos'>

            <button className='menu-produto'>
                <img src="/images/Imagens_DrPapel/Topos/topocapa.jpg" className="img-thumbnail produtos-img" alt="..."/>
                <label htmlFor="" className='label-produto'>Topo de Bolo</label>
            </button>

            <button className='menu-produto'>
                <img src="/images/Imagens_DrPapel/CaixasBrinde/caixas-capa.jpg" className="img-thumbnail produtos-img" alt="..."/>
                <label htmlFor="" className='label-produto'>Lembrancinhas</label>
            </button>

            <button className='menu-produto'>
                <img src="/images/Imagens_DrPapel/Adesivos_Apliques/adesivos-capa.jpg" className="img-thumbnail produtos-img" alt="..."/>
                <label htmlFor="" className='label-produto'>Apliques</label>
            </button>

            <button className='menu-produto'>
                <img src="/images/Imagens_DrPapel/3D/capa3D.jpg" className="img-thumbnail produtos-img" alt="..."/>
                <label htmlFor="" className='label-produto'>3D</label>
            </button>

            <button className='menu-produto'>
                <img src="/images/Imagens_DrPapel/Mais/mais-capa.jpg" className="img-thumbnail produtos-img" alt="..."/>
                <label htmlFor="" className='label-produto'>Mais</label>
            </button>

        </div>

        </section>

        </>
        )
        }

        export default MenuProdutos;