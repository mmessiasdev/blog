import { useEffect, useState } from "react";
import ContainerLink from "../../components/content/containerlink";
import TypeText from "../../components/content/text";
import DefaultTitle from "../../components/content/title";
import { Container } from "../../components/styeles/container/style";
import { Avatar } from "@mui/material";





const HomePage = () => {

    const [post, setPosts] = useState<PostsModel[]>([]);

    useEffect(() => {
        fetch("http://localhost:1337/api/contents/").then(response => response.json()).then(data => setPosts(data.data));
        console.log(post);
    }, [])


    return (
        <>
            <Container width="100vw" height="100vh" justify="center" aligh="center">
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
                <Container pad="10%">
                    <TypeText tag="h1">Blog</TypeText>
                    {post.map((res) => {
                        return (
                            <>
                                <ContainerLink href={`/content/${res.id}`} title={res.attributes.supertitle} desc={res.attributes.superdesc} />

                            </>
                        )
                    })}
                </Container>

            </Container>
        </>
    )
}

export default HomePage;