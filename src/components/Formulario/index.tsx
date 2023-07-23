import Button from "../Button";
import { Container } from "./style";

export default function Formulario() {
    return (
        <>
            <Container>
                <form>
                    <label>código de acesso</label>
                    <input type="text" id="login" name="login-acesso" required />
                    <label>senha</label>
                    <input type="text" id="senha" name="senha-acesso" required />
                    <Button />
                </form>
            </Container>
        </>
    );
}
