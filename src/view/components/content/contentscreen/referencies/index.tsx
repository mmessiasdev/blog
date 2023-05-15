import { Container } from "../../../styeles/container/style"
import 'react-html5video/dist/styles.css';

interface props{
    texturl?: string;
}

const References = ({ texturl }: props) => {
    return (
        <>
            <Container pad="10px 0px" margin="50px 0px 0px 0px" border="solid 1px grey" width="1px">
                <Container pad="0px 10px">
                    <a href={texturl} target="_blank">{texturl}</a>
                </Container>
            </Container>
            <Container pad="20px 0px 0px 0px">  
                <iframe width="100%" height="400px" src={texturl} title="YouTube video player" frameBorder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Container>
        </>
    )
}

export default References;