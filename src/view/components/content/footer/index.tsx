import { Container } from "../../styeles/container/style";

import Perfil from '../../../assets/circularphoto.png'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <Container width="100%" direc="column" disp="flex" justify="center" aligh="center" margin="200px 0px 0px 0px">
                <h1>Sobre</h1>
                <Container disp="flex" pad="100px 50px 100px 50px"
                    className="aboutContent">
                    <Container width="70%" pad="0px 25px 0px 0px" className="aboutDesc">
                        <p className="desc">
                            Desenvolvedor experiente com habilidades em diversas tecnologias, incluindo Flutter, React, AWS, Strapi, Python, Firebase e SQL. Com projetos bem-sucedidos em desenvolvimento de aplicativos móveis, desenvolvimento web, gerenciamento de banco de dados e soluções em nuvem, sou capaz de oferecer um conjunto único de habilidades que impulsionam o sucesso do projeto. Combinando minha paixão por programação com minha atenção aos detalhes, estou sempre buscando aprender e implementar novas tecnologias para ajudar a transformar ideias em soluções inovadoras e eficazes.
                        </p>

                    </Container>
                    <Container disp="flex" pad="0px 50px" direc="column" width="30%" className="aboutName">
                        <img height="100px" width="100px" src="https://user-images.githubusercontent.com/78608382/234113642-3e6a2a32-d405-4895-b05d-57a1d5d7b9fe.png" alt="by M. Messias Developer" />  
                        <Container pad="20px 0px">
                            <h5>M. Messias</h5>
                            Developer, UI/UX designer
                            and Software
                            Engineer
                        </Container>
                    </Container>
                </Container>
            </Container>
            <Container direc="column" aligh="center" disp="flex" justify="center" pad="100px 50px" className="linkPadding">
                <Container disp="flex" className="linkContent">
                    <Container pad="30px" className="linkPadding">
                        <h4>Converse comigo</h4>
                        <Container disp="flex" aligh="center" justify="start" pad="20px 0px 0px 0px">
                            <FaWhatsapp />
                            <a href="https://api.whatsapp.com/send?phone=5577991057040" target="_blank" rel="noreferrer">WhatsApp</a>

                        </Container>
                        <Container disp="flex" aligh="center" justify="start" pad="20px 0px 0px 0px">
                            <FaInstagram />
                            <a href="https://www.instagram.com/mmessiasdev/" target="_blank" rel="noreferrer">Instagram</a>
                        </Container>

                    </Container>
                    <Container pad="30px" className="linkPadding">
                        <h4>Meus Trabalhos</h4>
                        <Container disp="flex" aligh="center" justify="start" pad="20px 0px 0px 0px">
                            <FaGithub />
                            <a href="https://github.com/mmessiasdev/" target="_blank" rel="noreferrer">GitHub</a>

                        </Container>
                        <Container disp="flex" aligh="center" justify="start" pad="20px 0px 0px 0px">
                            <FaLinkedin />
                            <a href="https://www.linkedin.com/in/mmessiasdev/" target="_blank" rel="noreferrer">Linkedin</a>
                        </Container>
                        <Container disp="flex" aligh="center" justify="start" pad="20px 0px 0px 0px">
                            <FaInstagram />
                            <a href="https://www.instagram.com/mmessiasdev/" target="_blank" rel="noreferrer">Instagram</a>
                        </Container>

                    </Container>
                    <Container pad="30px" className="linkPadding">
                        <h4>Comunicação</h4>
                        <Container disp="flex" aligh="center" justify="start" pad="20px 0px 0px 0px">
                            <FaYoutube />
                            <a href="https://www.youtube.com/channel/UCHSrdW4QVmr-CjVW3KP2FAw" target="_blank" rel="noreferrer">YouTube</a>

                        </Container>

                    </Container>
                </Container>
                <Container pad="100px 0px 0px 0px">
                    Copyright M. Messias © 2023

                </Container>
            </Container>
        </>
    )
}

export default Footer;