import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/52800094?s=460&u=e7a97fa297d4320ec067dec0f15f8959fd36f1d8&v=4" alt="Jean Souza" />
                <div>
                    <strong>Jean Souza</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de Química avançada.
                        <br /><br />
                        Formado pelo canal manual do mundo e pelos professores da escola. O rei da ionização.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>

    );
}

export default TeacherItem;