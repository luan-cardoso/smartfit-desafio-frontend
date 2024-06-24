import React from "react";
import { 
    Items,
    ItemsIcons,
    Main, 
    Title, 
} from "./RequiredItems.style";

const RequiredItems = () => {
    return (
      <Main>

        <Title>
            <p style={{marginLeft: '70px'}}>Máscara</p>
            <p style={{marginLeft: '20px'}}>Toalha</p>
            <p style={{marginRight: '0px'}}>Bebedouro</p>
            <p style={{marginRight: '110px'}}>Vestiários</p>
        </Title>

        <Items>
            <ItemsIcons>
                <img src="../src/assets/images/required-mask.png"/>
                <p>Obrigatório</p>
            </ItemsIcons>
                
            <ItemsIcons style={{marginRight:'50px'}}>
                <img src="../src/assets/images/recommended-mask.png"/>
                <p>Recomendado</p>
            </ItemsIcons>

            <ItemsIcons>
                <img src="../src/assets/images/required-towel.png"/>
                <p>Obrigatório</p>
            </ItemsIcons>

            <ItemsIcons style={{marginRight:'50px'}}>
                <img src="../src/assets/images/recommended-towel.png"/>
                <p>Recomendado</p>
            </ItemsIcons>

            <ItemsIcons>
                <img src="../src/assets/images/partial-fountain.png"/>
                <p>Parcial</p>
            </ItemsIcons>

            <ItemsIcons style={{marginRight:'50px'}}>
                <img src="../src/assets/images/forbidden-fountain.png"/>
                <p>Proibido</p>
            </ItemsIcons>

            <ItemsIcons>
                <img src="../src/assets/images/required-lockerroom.png"/>
                <p>Liberado</p>
            </ItemsIcons>

            <ItemsIcons>
                <img src="../src/assets/images/partial-lockerroom.png"/>
                <p>Parcial</p>
            </ItemsIcons>

            <ItemsIcons>
                <img src="../src/assets/images/forbidden-lockerroom.png"/>
                <p>Fechado</p>
            </ItemsIcons>
        </Items>
        
      </Main>
    )
}

export default RequiredItems;