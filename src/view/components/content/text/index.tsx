import { Container } from "../../styeles/container/style";

interface textProps {
    children: React.ReactNode;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    width?: string;
    height?: string;
}

const TypeText = ({ children, tag, width, height }: textProps) => {
    return (
        <>
            <Container width={width} height={height} overflow="hidden">
                {tag === "h1" && <h1 >{children}</h1>}
                {tag === "h2" && <h2 >{children}</h2>}
                {tag === "h3" && <h3 >{children}</h3>}
                {tag === "h4" && <h4 >{children}</h4>}
                {tag === "h5" && <h5 >{children}</h5>}
                {tag === "h6" && <h6 >{children}</h6>}

            </Container>
        </>
    )
}

export default TypeText;