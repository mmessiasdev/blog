import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Container } from "../../../styeles/container/style";


interface props{
    markdown?: any;
}

const ContentMd = ({ markdown }: props) => {
    return (
        <>
            <Container pad="75px 0px" className="markdownContainer">
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />
            </Container>
        </>
    )
}

export default ContentMd;