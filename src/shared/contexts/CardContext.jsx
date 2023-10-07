import { createContext, useState } from 'react';
import PropTypes from "prop-types";

export const CardContext = createContext({
    dataCard: {
        imagemProduto: '',
        nomeKit: '',
        descKit: '',

        },
    setDataCard: () => {},
});

export const CardProvider = ({ children }) => {
    const [dataCard, setDataCard] = useState({
        imagemProduto: '../../public/images/kitBig.jpg',
        nomeKit: 'Big Party ',
        descKit: 'Ideal para a sua Big Festa!',

    });

    return(
        <CardContext.Provider value={{dataCard, setDataCard}}>
         { children }
        </CardContext.Provider>
    )
};

    CardProvider.propTypes = {
       children: PropTypes.node.isRequired,
 };    