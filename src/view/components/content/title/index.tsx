import { ContainerColorTheme } from "../../styeles/container/style";
import TypeText from "../text";


interface props{
    children?: React.ReactNode;
}

const DefaultTitle = ({children}: props) => {
    return(
        <>
            <ContainerColorTheme height="275px" disp="flex" justify="center" aligh="center">
                {children}
            </ContainerColorTheme>
        </>
    )
}

export default DefaultTitle;