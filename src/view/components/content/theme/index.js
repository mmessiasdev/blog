import { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';
import { Container, ContainerHeader } from '../../styeles/container/style';
import { FaMoon } from 'react-icons/fa';



const ThemeContainer = ({toggleTheme}) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <>
            <ContainerHeader >
                <Container pad='0px 10px'>
                    <FaMoon />
                </Container>
                <Switch
                    onChange={toggleTheme}
                    checked={title == 'light'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={30}
                    handleDiameter={20}
                    offColor={shade(0.15, colors.background)}
                    onColor={shade(0, colors.background)}
                    onHandleColor={shade(0, colors.text)}
                    offHandleColor={shade(0, colors.text)}
                />
            </ContainerHeader>
        </>
    )
};

export default ThemeContainer;