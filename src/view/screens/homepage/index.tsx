import TypeText from "../../components/content/text";
import DefaultTitle from "../../components/content/title";
import { Container } from "../../components/styeles/container/style"

const HomePage = () => {
    return (
        <>
            <Container width="100vw" height="100vh" justify="center" aligh="center">
                <DefaultTitle>
                    <Container disp="flex" pad="0px 100px">
                        <img height="100px" src="https://github.com/mmessiasdev/ImagesDeploy/assets/78608382/416159d0-801d-4a47-b893-251dffe5319a" />
                        <Container margin="0px 0px 0px 20px" width="400px">
                            <TypeText tag="h2">
                                M. Messias
                            </TypeText>
                            <TypeText tag="h4">
                                Developer, UI/UX designer and Software Engineer
                            </TypeText>
                        </Container>
                    </Container>
                </DefaultTitle>
                <Container pad="100px">
                    <TypeText tag="h1">Blog</TypeText>
                </Container>

            </Container>
        </>
    )
}

export default HomePage;