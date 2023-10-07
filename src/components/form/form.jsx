import { useState } from 'react';
import './form.css';

const Form = () => {

    const  [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        mensagem: '',
    })

    const handleInput = (event) => {
        event.preventDefault();
        const { value, id } = event.target;

        const data = {... formData, [id]: value};
        setFormData(data);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);

        isFormValid()
        ? alert(`Olá, ${formData.nome}! Seu login foi efetuado com sucesso!`)
        : alert('Verifique os campos digitados')
    }

    const isFormValid = () => {
        let validate = true;

        const data = Object.entries(formData);
       
        for(const [key] of data) {
            if(!formData[key].length) {
                validate = false;
        }
    }

        return validate;
    }

    return (
        <div className='container contato-container'>

            <section className="contato-formulario" aria-label="Formulário">

                <form className="form" action="./contato.html" onSubmit={handleSubmit}>

                    <div className="">
                        <label htmlFor="nome">Nome</label>
                        <input className='input-form' type="text" id="nome" name="nome" placeholder="Seu nome" onInput={handleInput}/>
                    </div>
                    <div className="">
                        <label htmlFor="telefone">Telefone</label>
                        <input className='input-form' type="text" id="telefone" name="telefone" placeholder="(21) 9999-9999" onInput={handleInput}/>
                    </div>

                </form>

                <form className="" action="./contato.html" onSubmit={handleSubmit}>

                    <div className="email-input input-long">
                        <label className="col-12" htmlFor="email">Email</label>
                        <input className="input2 input-email" type="email" id="email" name="email" placeholder="contato@email.com" onInput={handleInput}/>
                    </div>

                    <div className="input-line">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea className="input3" rows="5" id="mensagem" name="mensagem" placeholder="O que você precisa?" onInput={handleInput}></textarea>
                    </div>

                    <button className="botao-form ">Enviar Mensagem</button>

                </form>
            </section>

        </div>

    )
}

export default Form;