import { Container } from "../../../styeles/container/style";
import TypeText from "../../text";
import Highlight from "react-highlight";

interface props{
    markdown?: React.ReactNode;
    title?: string;
    inner: boolean;
    language: string;
}

const ContentMd = ({ markdown, title, inner, language }: props) => {
    return (
        <>
            <Container pad="75px 0px" className="markdownContainer">
                <Container pad="50px 0px" disp="flex" aligh="center">
                    <Container border="solid 1px grey" width="1px" height="30px" margin="0px 20px 0px 0px" />
                    <TypeText tag="h2">{title}</TypeText>

                </Container>
                <Highlight innerHTML={inner} className={language}>
                    {markdown}

                </Highlight>
            </Container>
        </>
    )   
}

export default ContentMd;