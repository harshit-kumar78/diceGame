import React from 'react'
import styled from 'styled-components'


const GamePage = ({ toggleGame }) => {
    return (
        <GamePageContainer>
            <div>
                <img src="./dices/dice.png" alt="dice" />

            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <div className='btnContainer'>
                    <Button onClick={toggleGame}>Play Now</Button>
                </div>
            </div>
        </GamePageContainer>
    )
}

export default GamePage



// game page styles
const GamePageContainer = styled.div`
    display: flex;
    max-width: 1180px;
    display: flex;
    height: 100vh;
    margin: 0 auto;
    align-items: center;


    .content{
        display: flex;
        flex-direction: column;
        gap:10px;
        h1{
        font-size: 96px;
        font-weight: 700;
        line-height: 124px;
        }
        .btnContainer{
            display: flex;
            justify-content: end;
        }
    }
`

const Button = styled.button`
    padding:10px 18px;
    background-color: black;
    color:white;
    width: 220px;
    height:44px;
    border-radius: 5px;
    font-size: 16px;
    transition: 0.3s ease-in;
    cursor: pointer;
    font-weight: 600;
   
&:hover{
    background-color: white;
    color:black;
    transition: 0.3s ease-in;
}

`