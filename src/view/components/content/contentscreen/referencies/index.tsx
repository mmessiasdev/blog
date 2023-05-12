import { Container } from "../../../styeles/container/style"
import TypeText from "../../text"

interface props{
    href?: string;
    texturl?: string;
}

const References = ({ href, texturl }: props) => {
    return (
        <>
            <Container pad="10px 0px" margin="50px 0px 0px 0px" border="solid 1px grey" width="1px">
                <Container pad="0px 10px">
                    <a href={href} target="_blank">{texturl}</a>
                </Container>
            </Container>
        </>
    )
}

export default References;