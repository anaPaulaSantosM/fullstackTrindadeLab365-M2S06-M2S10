import styled from "styled-components";


export const LojasItem = styled.div`
    border-radius: 4px;
    background: var(--cor-0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    margin: 0 20px;
`

export const ImgLojas = styled.img`
    border-radius: 4px 4px 0 0;

    .img4 {
    width: 2vw;
    height: 2vw;
}
`
export const LojasConteudo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px 16px;
    padding: 32px;


    .lojas-conteudo h3, .lojas-tempo, .loja-dados {
    grid-column: 1/-1;
    color: var(--cor-11);
}
`
export const DadosLojas = styled.div`
    display: grid;
    gap: 8px;
    border-left: 2px solid var(--cor-2);
    padding-left: 12px;
    color: var(--cor-8);
    padding-bottom: 0px;
`

export const HoraLojas = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    width: 30vw !important;
`

export const HorarioLoja = styled.div`
    display: flex !important;
    justify-content: space-between !important;
    position: relative;
    width: 30vw;
`

export const Lojas = styled.section`
    border-radius: 20px 20px 0 0;
    width: 100vw;
`

export const CardMapa = styled.iframe`
    display: grid;
    border-radius: 20px;
    background: var(--cor-0);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    width: 100vw;
    margin-bottom: 5vw;
`

export const InfoLoja = styled.p`
    margin-bottom: 0px !important;
    padding-bottom: 0px;
    font-size: 120%;
    background-image: none !important;
`
