import { useEffect, useState } from "react";
import ContentMd from "../../components/content/contentscreen/markdown";
import References from "../../components/content/contentscreen/referencies";
import Subtitle from "../../components/content/contentscreen/subtitle";
import TypeText from "../../components/content/text";
import DefaultTitle from "../../components/content/title";
import { Container } from "../../components/styeles/container/style";
import { useParams } from "react-router-dom";

const Content = () => {

    const { id } = useParams();


    const [post, setPost] = useState<PostsModel>();


    useEffect(() => {
        fetch(`http://localhost:1337/api/contents/${id}?populate=*`).then(response => response.json()).then(data => setPost(data.data));
        console.log(post);
    }, [])


    return (
        <>
            <Container>
                <DefaultTitle>
                    <TypeText tag="h2">
                    </TypeText>
                </DefaultTitle>
                <Container pad="100px 20%">
                    {post &&
                        <>
                            <Subtitle subtitle={post.attributes.title} desc={post.attributes.desc} img={`http://localhost:1337${post.attributes.illustration.data.attributes.url}`}/>
                            <ContentMd markdown={post.attributes.markdown}/>
                        </>}
                    <TypeText tag="h5">
                        Referências
                    </TypeText>
                    <References />
                </Container>
            </Container>
        </>
    )
}

export default Content;