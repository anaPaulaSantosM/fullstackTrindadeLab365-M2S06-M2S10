import { createContext, useState } from 'react';
import PropTypes from "prop-types";

export const BannerContext = createContext({
    data: {
        titulo: '',
        paragrafo: '',
    },
    setData: () => {},
});

export const BannerProvider = ({ children }) => {
    const [data, setData] = useState({
        titulo: 'Papelaria Personalizada',
        paragrafo: 'Deixe os momentos especiais inesquecíveis com os ítens da Dr.Papel.',
    });

    return(
        <BannerContext.Provider value={{data, setData}}>
         { children }
        </BannerContext.Provider>
    )
};

    BannerProvider.propTypes = {
       children: PropTypes.node.isRequired,
 };    