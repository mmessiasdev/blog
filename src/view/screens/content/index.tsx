import { useEffect, useState } from "react";
import ContentMd from "../../components/content/contentscreen/markdown";
import References from "../../components/content/contentscreen/referencies";
import Subtitle from "../../components/content/contentscreen/subtitle";
import TypeText from "../../components/content/text";
import DefaultTitle from "../../components/content/title";
import { Container, ContainerContent } from "../../components/styeles/container/style";
import { useParams } from "react-router-dom";
import Footer from "../../components/content/footer";


const Content = () => {

    const [initPage, setInitPage] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setInitPage(true);
        setTimeout(() => {
            setInitPage(false)
        }, 2500)
    }, [])

    const { id } = useParams();


    const [post, setPost] = useState<PostsModel>();


    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASEURL}/api/content-blogs/${id}?populate=*`).then(response => response.json()).then(data => setPost(data.data));
        console.log(post);
        setLoading(true);
    }, [])


    return (
        <>
            {
                initPage ? <div><h1 className="textanimation">M. Messias</h1></div> : <div>
                    {post &&
                        <Container>
                            <DefaultTitle>
                                <Container pad="0px 10%">
                                    <TypeText tag="h2">
                                        {post.attributes.supertitle}
                                    </TypeText>
                                </Container>
                            </DefaultTitle>
                            <ContainerContent className="contentScreen" pad="0px 10%">
                                {post.attributes.subtitle &&
                                    <Subtitle subtitle={post.attributes.subtitle} desc={post.attributes.subdesc} img={`${post.attributes.illustration.data.attributes.url}`} />}
                                {post.attributes.markdown &&
                                    <ContentMd title={post.attributes.supertitle} markdown={
                                        post.attributes.markdown} inner={post.attributes.innerHtml} language={post.attributes.language} />
                                }
                                {post.attributes.reference &&
                                    <References texturl={post.attributes.reference} />
                                }
                                <Footer />
                            </ContainerContent>
                        </Container>
                    }
                </div>

            }
        </>
    )
}

export default Content;