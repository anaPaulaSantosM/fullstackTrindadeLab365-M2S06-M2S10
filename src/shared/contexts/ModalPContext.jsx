import { createContext, useState } from 'react';
import PropTypes from "prop-types";

export const ModalPContext = createContext({
        dataModalP: {
        imagemProdutoModal: '',
        nomeKit: '',
        descKit: '',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',

    },
    setDataModalP: () => {},
});

export const ModalPProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    const [dataModalP, setDataModalP] = useState({
        imagemProdutoModal: '',
        nomeKit: '',
        descKit: '',
        desc1: '',
        desc2: '',
        desc3: '',
        desc4: '',
      
    });

    return(
        <ModalPContext.Provider value={{dataModalP, setDataModalP, showModal, setShowModal}}>
         { children }
        </ModalPContext.Provider>
    )
};

    ModalPProvider.propTypes = {
       children: PropTypes.node.isRequired,
 };    