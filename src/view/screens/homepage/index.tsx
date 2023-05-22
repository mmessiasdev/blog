import { useEffect, useState } from "react";
import ContainerLink from "../../components/content/containerlink";
import TypeText from "../../components/content/text";
import DefaultTitle from "../../components/content/title";
import { Container } from "../../components/styeles/container/style";
import { Avatar } from "@mui/material";
import Footer from "../../components/content/footer";
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";





const HomePage = () => {

    const [initPage, setInitPage] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setInitPage(true);
        setTimeout(() => {
            setInitPage(false)
        }, 2500)
    }, [])


    const [post, setPosts] = useState<PostsModel[]>([]);

    const resFunction = async () => {
        try {
            const data = await axios
                .get(`${process.env.REACT_APP_BASEURL}/api/content-blogs`).then((res) => {
                    console.log(res);
                    setPosts(res.data.data);
                });
            console.log(post);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            resFunction();
            setLoading(true);

        }, 0)
    }, [])


    return (
        <>
            {
                initPage ? <div><h1 className="textanimation">M. Messias</h1></div> : <Container width="100vw" height="100vh" justify="center" aligh="center">
                    <DefaultTitle>
                        <Container disp="flex" pad="0px 100px">
                            <Container width="30%" disp="flex" justify="center" aligh="center">
                                <Avatar sx={{ width: 100, height: 100 }} alt="Perfil" src="https://github.com/mmessiasdev/ImagesDeploy/assets/78608382/416159d0-801d-4a47-b893-251dffe5319a" />
                            </Container>
                            <Container margin="0px 0px 0px 20px" width="70%">
                                <TypeText tag="h2">
                                    M. Messias
                                </TypeText>
                                <TypeText tag="h4">
                                    Developer, UI/UX designer and Software Engineer
                                </TypeText>
                            </Container>
                        </Container>
                    </DefaultTitle>
                    <Container pad="0px 10%">
                        <Container pad="100px 0px 0px 0px">
                            <TypeText tag="h1">Blog</TypeText>
                        </Container>
                        {loading ? <div>
                            {post.map((res) => {
                                return (
                                    <>
                                        <ContainerLink href={`/content/${res.id}`} title={res.attributes.supertitle} desc={res.attributes.superdesc} />

                                    </>
                                )
                            })}
                        </div> : <Container pad="100px 0px 0px" width="100%" disp="flex" justify="center"><Spinner animation="grow" variant="" /></Container>}
                        <Footer />
                    </Container>

                </Container>

            }
        </>
    )
}

export default HomePage;