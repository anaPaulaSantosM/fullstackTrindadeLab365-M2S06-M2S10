import styled from 'styled-components'

export const ModalBG = styled.div`
    display: flex;
    justify-items: column; 
    background: linear-gradient(135deg, LavenderBlush 40%, LightCyan) !important;   
    width: 32vw;
    border-radius: 1vw;

    
    .ant-modal-title, .ant-modal-header{
        color: transparent;
        border: 1px solid red;
    }
    `

export const KitImg = styled.div`
    display: flex !important;
    justify-content: left !important;
    width: 20vw !important;
    height: 30vh;
    margin: 0 0 0 0 !important;

    img{
        max-width: 15vw;
    }
`


export const DescProdutoModal = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 15vw !important;
    margin:  2vw 2vw 1vw 0;

`

export const ItensModal = styled.ul`
    margin-top: 2vw !important;
`

export const DescModal = styled.div`
    display: inline !important;
    width: 40vw !important;
`

export const FormSobre = styled.form`
    width: 70%;
    
`
