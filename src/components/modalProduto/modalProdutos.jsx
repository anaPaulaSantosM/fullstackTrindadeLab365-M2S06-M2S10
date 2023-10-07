import React, { useContext } from 'react';
import './modalProdutos.style.jsx';
import { ModalPContext } from '../../shared/contexts/ModalPContext';
import * as Styled from './modalProdutos.style.jsx'

const ModalProdutos = () => {

    const { dataModalP } = useContext(ModalPContext);

   
    return (

        <Styled.ModalBG>
        <Styled.KitImg>
            <img src={dataModalP?.imagemProdutoModal} className="kit-img" alt="..."></img>
        </Styled.KitImg>
        <Styled.DescProdutoModal id='imagemProduto'>
                    <Styled.DescModal>
                        <h3 class="h3-ttl" id='nomeKit'>{dataModalP?.nomeKit}</h3>
                        <p class="description" id='descKit' >{dataModalP?.descKit}</p>
                    </Styled.DescModal>


                    <Styled.FormSobre>
                        <Styled.DescModal>
                            <li class="li-desc" id='desc1'>{dataModalP?.desc1}</li>
                            <li class="li-desc" id='desc2'>{dataModalP?.desc2}</li>
                            <li class="li-desc" id='desc3'>{dataModalP?.desc3}</li>
                            <li class="li-desc" id='desc4'>{dataModalP?.desc4}</li>
                        </Styled.DescModal>
                    </Styled.FormSobre>
            </Styled.DescProdutoModal>
        </Styled.ModalBG>

        )
    }

  
export default ModalProdutos