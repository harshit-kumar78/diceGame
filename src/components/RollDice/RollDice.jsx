import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const RollDice = ({ selectedNumber, setTotalScore, setSelectedNumberError }) => {
    //states
    const [currentDice, setCurrentDice] = useState(1);
    //useEffect
    useEffect(() => {
        if (currentDice === selectedNumber) {
            setTotalScore((prev) => prev + 4);
        } if (currentDice !== selectedNumber && selectedNumber) {
            setTotalScore((prev) => prev - 2);

        }
    }, [currentDice])
    // function to generate random numbers;
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }
    const onDiceClick = async () => {
        if (!selectedNumber) {
            setSelectedNumberError(true);
            return;
        }
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

    }
    return (
        <DiceRollContainer>
            <div>
                <img src={`/dices/dice_${currentDice}.png`} alt="dice" onClick={onDiceClick} />
            </div>
            <p>Click on Dice to roll</p>

        </DiceRollContainer>
    )
}

export default RollDice

// dice component styles
const DiceRollContainer = styled.div`
 max-width   : 250px;
 margin: 0 auto;
 display: flex;
 flex-direction:column;
 align-items: center;


`