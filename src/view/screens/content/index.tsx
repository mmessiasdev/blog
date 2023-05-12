import ContentMd from "../../components/content/contentscreen/markdown";
import References from "../../components/content/contentscreen/referencies";
import Subtitle from "../../components/content/contentscreen/subtitle";
import TypeText from "../../components/content/text";
import DefaultTitle from "../../components/content/title";
import { Container } from "../../components/styeles/container/style";

const Content = () => {
    return(
        <>
        <Container>
            <DefaultTitle>
                <TypeText tag="h2">
                </TypeText>
            </DefaultTitle>
            <Container pad="100px 20%">
                <Subtitle subtitle="Text"/>
                <ContentMd/>
                <TypeText tag="h5">
                    Referências
                </TypeText>
                <References/>
            </Container>
        </Container>
        </>
    )
}

export default Content;