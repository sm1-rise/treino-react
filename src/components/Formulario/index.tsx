
import Button from "../Button";
import { Container, Form } from "./style";

export default function Formulario() {
    return (
        <>
            <Container>
                <Form>
                    <p>código de acesso</p>
                    <input type="text" id="login" name="login-acesso" required />
                    <p>senha</p>
                    <input type="text" id="senha" name="senha-acesso" required />
                    <Button text="entrar" />
                </Form>
            </Container>
        </>
    );
}
