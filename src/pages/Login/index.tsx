import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextoPrincipal from "../../components/TextoPrincipal";
import Formulario from "../../components/Formulario";

export default function Login() {
    return (
        <>
            <Header />
            <TextoPrincipal
                titulo="Painel de Controle"
                descricao="Área exclusiva para funcionários."
            />
            <Formulario />

            <Footer />
        </>
    );
}