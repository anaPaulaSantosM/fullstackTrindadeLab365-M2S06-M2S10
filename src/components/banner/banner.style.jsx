import styled from 'styled-components';



export const Banner = styled.div`
    display: grid;
    align-items: center;
    background-image: url('../public/images/background/bg-1.png');
    background-repeat: cover;
    background-size: 100%;
    background-position: right;
    margin: 2vw 0 2vw 0;
`

export const BannerTtl = styled.h1`
    display: flex;

    justify-content: left;
    padding: 3vw 0 0 5vw !important;
    font-size: 3.5vw !important;
`

export const BannerParagrafo = styled.h6`
    display: flex;
    justify-content: left;
    padding: 0 0 2vw 5vw !important;
    font-size: 2vw !important;
`

/* 



.banner-h6 {

}
@media screen and (max-width: 576px) {

    .banner {
        margin: 15.5vw 0 2vw 0;
        height: 15vw !important;
    
    }

} */