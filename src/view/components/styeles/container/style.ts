import styled, { Props } from "styled-components";


export const Container = styled.div<Props>`
    width: ${p => p.width}; 
    display: ${p => p.disp};
    justify-content: ${p => p.justify};
    align-items: ${p => p.aligh};
    height: ${p => p.height};
    padding: ${p => p.pad};
    z-index: ${p => p.index};
    flex-direction: ${p => p.direc};
    overflow: ${p => p.overflow};
    border-radius: ${p => p.radius};
    position: ${p => p.posit};
    opacity: ${p => p.opacity};
    left: ${p => p.left};
    margin: ${p => p.margin};
    background-color: ${p => p.color};
    `
export const ContainerBackTheme = styled.div<Props>`
    width: ${p => p.width}; 
    display: ${p => p.disp};
    justify-content: ${p => p.justify};
    align-items: ${p => p.aligh};
    height: ${p => p.height};
    padding: ${p => p.pad};
    z-index: ${p => p.index};
    flex-direction: ${p => p.direc};
    overflow: ${p => p.overflow};
    border-radius: ${p => p.radius};
    position: ${p => p.posit};
    opacity: ${p => p.opacity};
    left: ${p => p.left};
    margin: ${p => p.margin};
    background-color: ${p => p.theme.colors.background};
    background-color: ${p => p.color};
    backdrop-filter: blur(${p => p.blur});
`
export const ContainerColorTheme = styled.div<Props>`
    width: ${p => p.width}; 
    display: ${p => p.disp};
    justify-content: ${p => p.justify};
    align-items: ${p => p.aligh};
    height: ${p => p.height};
    padding: ${p => p.pad};
    z-index: ${p => p.index};
    flex-direction: ${p => p.direc};
    overflow: ${p => p.overflow};
    border-radius: ${p => p.radius};
    position: ${p => p.posit};
    left: ${p => p.left};
    margin: ${p => p.margin};
    backdrop-filter: blur(${p => p.blur});
    background-color: ${p => p.theme.colors.secundaryback};

`


export const ContainerHeader = styled.div`
    height: 60px;
    display: flex;
    background-color: ${props => props.theme.colors.secundary};
    align-items: center;
    justify-content: space-around;
    padding: 0 30px;
    z-index: 100;
    border-radius: 15px 0px 0px 15px;
    position: fixed;
    margin-top: 20px;
`


export const BannerProject = styled.div`
    box-shadow: 0 0 500px ${p => p.theme.colors.secundary};
    width: min-content;
    /* border: 5px solid ${p => p.theme.colors.text}; */
    border-radius: 20px;
    background-color: ${p => p.theme.colors.secundary};
    overflow: hidden;
    width: 80%;
`


export const ContainerGridProj = styled.div`
    display: grid;  
    grid-gap: 0px;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    grid-template-rows: repeat(auto-fit);  
`