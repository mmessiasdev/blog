import { ContainerColorTheme } from "../../styeles/container/style";
import { Container } from "../../styeles/container/style"
import TypeText from "../text";


interface props {
    href?: string;
}

const ContainerLink = ({href}: props) => {
    return (
        <>
            <a href={href}>
                <Container width="100%" disp="flex" direc="column" justify="center" aligh="center" margin="75px 0px">
                    <ContainerColorTheme maxwidth="900px" width="100%" maxheight="150px" radius="20px" pad="20px" overflow="hidden">
                        <TypeText tag="h3">Link Titlte</TypeText>
                        <TypeText tag="h5" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </TypeText>
                    </ContainerColorTheme>
                </Container>

            </a>
        </>
    )
}

export default ContainerLink;