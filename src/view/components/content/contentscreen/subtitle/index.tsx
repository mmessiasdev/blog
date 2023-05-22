import Highlight from "react-highlight";
import { Container } from "../../../styeles/container/style";
import TypeText from "../../text";

interface props {
    subtitle?: string;
    desc?: string;
    img?: string;
}

const Subtitle = ({ subtitle, desc, img }: props) => {
    return (
        <>
            <Container pad="75px 10%">
                <TypeText tag="h3">
                    {subtitle}
                </TypeText>
                <Container disp="flex" justify="space-between" margin="100px 0px 0px 0px" className="subtitleContent">
                    <TypeText width="50%" tag="h5" className="subtitleContent">
                        <Highlight innerHTML>{desc}</Highlight>
                    </TypeText>
                    <Container className="subtitleContent" width="40%" height="auto" disp="flex" justify="center" overflow="hidden" radius="20px">
                        <img className="img" src={img} alt="wallpaper" />
                    </Container>
                </Container>
            </Container>
        </>
    )
}

export default Subtitle;