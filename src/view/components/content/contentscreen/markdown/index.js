import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Container } from "../../../styeles/container/style";
import TypeText from "../../text";
import Highlight from "react-highlight";


// interface props {
//     markdown?: any;
//     title?: string;
// }

const ContentMd = ({ markdown, title }) => {
    return (
        <>
            <Container pad="150px 0px" className="markdownContainer">
                <Container pad="50px 0px" disp="flex" aligh="center">
                    <Container border="solid 1px grey" width="1px" height="30px" margin="0px 20px 0px 0px" />
                    <TypeText tag="h2">{title}</TypeText>

                </Container>
                <Highlight language="javascript">
                    {markdown}


                </Highlight>
                {/* <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} /> */}
            </Container>
        </>
    )
}

export default ContentMd;