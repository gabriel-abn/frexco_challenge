import React from "react";
import { Container } from "./components/Conteiner/styles";
import MainInput from "./components/UserInsert/UserInput";
import { GlobalStyle } from "./global/globalStyles";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Container>
                <MainInput />
            </Container>
        </div>
    );
}

export default App;
