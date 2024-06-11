import React from "react";
import { Main } from "./Intro.style";

const Intro = () => {
    return (
       <Main>
            <h1>
                REABERTURA <br/> SMART FIT
            </h1>
            <div style={{
                backgroundColor: '#202020',
                width: '80px',
                height: '7px',
                marginBottom:'40px'
            }}>
            </div>
            <p>
                O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
            </p>
       </Main>
    )
}

export default Intro;