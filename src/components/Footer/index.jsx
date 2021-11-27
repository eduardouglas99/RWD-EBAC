import React from 'react';
import './styles.scss';
import IconArrowTop from '../../images/icon-arrow-top.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__section footer__section--first">
                <div className="container">
                    <p>
                        <strong>Observação:</strong>este site é uma amostra de desenvolvimento 
                        tecnológico de iniciativa independente, as informações aqui apresentadas podem estar eventualmente desatualizadas, 
                        por isso recomendamos sempre conferir as informações diretamente com o estabelecimento. A exibição dos locais, 
                        nesta página não caracteria recomendação de uso.
                    </p>
                </div>
            </div>
            <div className="footer__section footer__section--second">
                <div className="footer__container">
                    <p>
                        <strong>
                            Projeto Elaborado durante a RDW <a href="https://ebaconline.com.br/">E.B.A.C</a> 2021
                        </strong>
                        <small>
                            Projetado por <a href="http://" target="_blank">Marcelo Cavalcante</a> 
                            e <a href="http://" target="_blank">Miguel Maia</a>, 
                            desenvolvido por Aluno <a href="http://" target="_blank">Eduardo Douglas</a>. 
                        </small>
                    </p>
                    <a href="#top" className="button">
                        <img src={IconArrowTop} alt="Voltar ao topo"></img>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;