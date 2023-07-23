import logoConexos from '../../assets/logo-conexos-white.png'
import { HeaderStyled } from './style'
import { Container } from './style'
import { Menu } from './style'

export default function Header() {
    return (
        <>
            <HeaderStyled>
                <Container>
                    <img src={logoConexos} alt="Logo Conexos" />
                    <Menu>
                        <ul>
                            <li>
                                <a href="#">Início</a>
                            </li>
                            <li>
                                <a href="#">Serviços</a>
                            </li>
                            <li>
                                <a href="#">Relatórios</a>
                            </li>
                        </ul>
                    </Menu>
                </Container >
            </HeaderStyled>

        </>
    )
}