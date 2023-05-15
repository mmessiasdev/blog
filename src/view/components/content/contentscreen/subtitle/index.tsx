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
            <Container>
                <TypeText tag="h3">
                    {subtitle}
                </TypeText>
                <Container disp="flex" justify="space-between" margin="100px 0px 0px 0px" className="subtitleContent">
                    <TypeText width="50%" tag="h5" className="subtitleContent">
                        {desc}
                    </TypeText>
                    <Container className="subtitleContent" width="40%" height="400px" disp="flex" justify="center" overflow="hidden" radius="20px">
                        <img className="img" src={img} alt="wallpaper" />
                    </Container>
                </Container>
            </Container>
        </>
    )
}

export default Subtitle;