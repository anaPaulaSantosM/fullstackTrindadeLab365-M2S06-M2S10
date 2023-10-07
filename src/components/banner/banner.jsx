import * as Styled from './banner.style';
import React, { useContext } from 'react';
import { BannerContext } from '../../shared/contexts/BannerContext';



const Banner = () => {
    const { data } = useContext(BannerContext)
    

    return (

        <>
            <Styled.Banner>
                <Styled.BannerTtl>{data.titulo}</Styled.BannerTtl>
                <Styled.BannerParagrafo>{data.paragrafo}</Styled.BannerParagrafo>
            </Styled.Banner>
        </>
    )
}

export default Banner;