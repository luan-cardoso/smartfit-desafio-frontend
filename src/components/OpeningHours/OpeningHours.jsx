import React from "react";
import { 
    Clock,
    Main, 
} from "./OpeningHours.style";


const OpeningHours = () => {
    return (
        <Main>
            <Clock>
                <img src="./src/assets/images/icon-hour.png" alt="relógio logo"/>
                <p>Horário</p>
            </Clock>
        </Main>
    )
}

export default OpeningHours;