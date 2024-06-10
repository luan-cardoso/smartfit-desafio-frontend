import React from "react";
import { Main } from "./Home.style";
import Intro from "../../components/Intro/Intro";
import OpeningHours from "../../components/OpeningHours/OpeningHours";

const Home = () => {
    return (
        <Main>
            <Intro/>
            <OpeningHours/>
        </Main>
    )
}

export default Home;