import React, { useEffect, useState } from "react";
import axios from "axios";
import parse from 'html-react-parser';

import { 
    Address,
    Card, 
    CardStyled, 
    Icons, 
    IsOpened, 
    Main, 
    Schedule, 
    Title, 

} from "./Home.style";

import Intro from "../../components/Intro/Intro";
import Schedules from "../../components/Schedules/Schedules";
import RequiredItems from "../../components/RequiredItems/RequiredItems";
 
const Home = () => {

const [locationsList, setLocationsList] = useState([]);
useEffect(() => {
    axios
    .get('https://test-frontend-developer.s3.amazonaws.com/data/locations.json')
    .then((res) => {
        setLocationsList(res.data.locations);
    })
    .catch((err) => console.log(err));
}, []);


//Funções para setar os icones
const getMaskImageForCondition = (condition) => {
    switch (condition) {

        case 'required':
            return '../src/assets/images/required-mask.png'
        case 'recommended':
            return '../src/assets/images/recommended-mask.png'
    }
}
const getTowelImageForCondition = (condition) => {
    switch (condition) {

        case 'required':
            return '../src/assets/images/required-towel.png'
        case 'recommended':
            return '../src/assets/images/recommended-towel.png'
    }
}
const getFountainImageForCondition = (condition) => {
    switch (condition) {

        case 'partial':
            return '../src/assets/images/partial-fountain.png'
        case 'not_allowed':
            return '../src/assets/images/forbidden-fountain.png'
    }
}
const getLockerroomImageForCondition = (condition) => {
    switch (condition) {

        case 'allowed':
            return '../src/assets/images/required-lockerroom.png'
        case 'partial':
            return '../src/assets/images/partial-lockerroom.png'
        case 'closed':
            return '../src/assets/images/forbidden-lockerroom.png'
    }
}

//Função para mapear os horários
const renderSchedules = (schedules) => {
    if (!schedules) return <p>Horários não disponíveis</p>;
    return schedules.map((schedule, index) => (
        <div key={index}>
            <h4>{schedule.weekdays}</h4> 
            <p>{schedule.hour}</p>
        </div>
    ));
}
      
return (
    <Main>
        <Intro/>
        <Schedules/>
        <RequiredItems/>
        <CardStyled>
            {locationsList.map((location) =>

                <Card key={location.id}>
                    <IsOpened>
                        {location.opened ? <p style={{color:'#2FC022'}}>Aberto</p> : <p style={{color:'#dc0a17'}}>Fechado</p>}
                    </IsOpened>

                    <Title>
                        {location.title}
                    </Title>
                    
                    <Address dangerouslySetInnerHTML={{__html: location.content}}/>
                   
                    <hr style={{marginBottom:'20px'}}/>

                    {location.opened ? 
                        <Icons>
                            <img src={getMaskImageForCondition(location.mask)}/>
                            <img src={getTowelImageForCondition(location.towel)}/>
                            <img src={getFountainImageForCondition(location.fountain)}/>
                            <img src={getLockerroomImageForCondition(location.locker_room)}/>
                        </Icons> 
                        : 
                        <div>
                        </div> 
                    }
                
                    
                    {location.opened ? 
                        <Schedule>
                            {renderSchedules(location.schedules)}
                        </Schedule> 
                        : 
                        <div>
                        </div> 
                    }
                   
                </Card>

            )}
        </CardStyled>
    </Main>
)
}

export default Home;