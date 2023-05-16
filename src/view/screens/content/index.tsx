import { useEffect, useState } from "react";
import ContentMd from "../../components/content/contentscreen/markdown";
import References from "../../components/content/contentscreen/referencies";
import Subtitle from "../../components/content/contentscreen/subtitle";
import TypeText from "../../components/content/text";
import DefaultTitle from "../../components/content/title";
import { Container, ContainerContent } from "../../components/styeles/container/style";
import { useParams } from "react-router-dom";
import Highlight from "react-highlight";



const Content = () => {

    const { id } = useParams();


    const [post, setPost] = useState<PostsModel>();


    useEffect(() => {
        fetch(`http://localhost:1337/api/contents/${id}?populate=*`).then(response => response.json()).then(data => setPost(data.data));
        console.log(post);
    }, [])


    return (
        <>
            {post &&
                <Container>
                    <DefaultTitle>
                        <Container pad="0px 50px">
                            <TypeText tag="h2">
                                {post.attributes.supertitle}
                            </TypeText>

                        </Container>
                    </DefaultTitle>
                    <ContainerContent pad="0px 20%" className="contentScreen">
                        <Subtitle subtitle={post.attributes.title} desc={post.attributes.desc} img={`http://localhost:1337${post.attributes.illustration.data.attributes.url}`} />
                        {post.attributes.markdown &&
                            <ContentMd title={post.attributes.supertitle} markdown={
                                post.attributes.markdown} inner={post.attributes.innerHtml} language={post.attributes.language} />
                        }
                        <References texturl={post.attributes.reference} />
                    </ContainerContent>
                </Container>
            }
        </>
    )
}

export default Content;