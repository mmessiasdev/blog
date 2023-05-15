import { Link } from "react-router-dom";
import { ContainerColorTheme } from "../../styeles/container/style";
import { Container } from "../../styeles/container/style"
import TypeText from "../text";


interface props {
    href?: any;
    title?: string,
    desc?: string,
}

const ContainerLink = ({ href, title, desc }: props) => {
    return (
        <>
            <Link to={href}>
                <Container width="100%" disp="flex" direc="column" justify="center" aligh="center" margin="75px 0px">
                    <ContainerColorTheme maxwidth="900px" width="100%" radius="20px" pad="30px 20px" overflow="hidden">
                        <TypeText tag="h3">
                            {title}
                        </TypeText>
                        <TypeText tag="h5" >
                            {desc}
                        </TypeText>
                    </ContainerColorTheme>
                </Container>
            </Link>
        </>
    )
}

export default ContainerLink;