import React from "react";
import { 
    Buttons,
    Clock,
    Closed,
    Main,
    Times, 
} from "./Schedules.style";
import ButtonUsage from "../Button/Button";


const Schedules = () => {
    return (
        <Main>
            <Clock>
                <img src="./src/assets/images/icon-hour.png" alt="relógio logo"/>
                <p>Horário</p>
            </Clock>
            <Times>
                <form action="">
                    <label htmlFor="morning"> 
                        <input type="checkbox" name="" id="morning" />Manhã
                        <p style={{marginLeft: '650px'}}>06:00 às 12:00</p>
                    </label>
                    <label htmlFor="afternoon"> 
                        <input type="checkbox" name="" id="afternoon" />Tarde
                        <p style={{marginLeft: '665px'}}>12:01 às 18:00</p>
                    </label>
                    <label htmlFor="evening"> 
                        <input type="checkbox" name="" id="evening" />Noite
                        <p style={{marginLeft: '665px'}}>18:01 às 23:00</p>
                    </label>
                </form>
            </Times>
            <hr/>
            <Closed>
                <label htmlFor="closed"> 
                    <input type="checkbox" name="" id="closed" /> Exibir unidades fechadas
                </label>
                <p>Resultados encontrados: <span style={{fontWeight:'bolder'}}>0</span></p>
            </Closed>
            <Buttons>
                <ButtonUsage name='encontrar unidade' variant='contained' />
                <ButtonUsage name='limpar' variant='contained' colorButton='secondary' />
            </Buttons> 
        </Main>
    )
}

export default Schedules;