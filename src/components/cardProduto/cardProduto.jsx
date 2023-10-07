import React, { useContext, useState } from 'react';
import { Button, Modal } from 'antd';
import '../main/main.css';
import  ModalProdutos  from '../modalProduto/modalProdutos'
import { ModalPContext } from '../../shared/contexts/ModalPContext';


const CardProduto = ({dataCard}) => {
      const {setDataModalP} = useContext(ModalPContext)

      const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);   
        setDataModalP(dataCard);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section className='card-prod'>
                <div className='kit-imgs'>
                    <img className="kit-img" src={dataCard?.imagemProduto || "../images/2.jpg"} alt="..." id='imagemProduto'></img>
                </div>
                <div class="desc-produto container">
                    <div class="desc">
                        <h3 class="h3-ttl" id='nomeKit'>{dataCard?.nomeKit || "Kit"}</h3>
                        <p class="description" id='descKit'>{dataCard?.descKit || "Descrição do kit"}</p>
                    </div>

                    <Button type="primary" onClick={showModal} className="botao-main">
                        MAIS SOBRE
                    </Button>
                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className='modal-pdt1'    >
                        <ModalProdutos/>
                    </Modal>

                </div>
            </section>
        </>
    )
}

export default CardProduto;



