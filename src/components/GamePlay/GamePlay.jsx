import React, { useState } from 'react'
import styled from 'styled-components'
import RollDice from '../RollDice/RollDice';

const GamePlay = () => {
    const boxes = [1, 2, 3, 4, 5, 6];
    const [selectedNumber, setSelectedNumber] = useState();
    const [totalScore, setTotalScore] = useState(0);
    const [selectedNumberError, setSelectedNumberError] = useState(false);
    return (
        <div>
            <GamePlayTopSection>
                <div className="totalScore">
                    <h1>{totalScore}</h1>
                    <p>Total Score</p>
                </div>
                <div className="numberSelector">
                    {selectedNumberError && <Error>Please select a number</Error>}
                    <Boxes>
                        {boxes.map((box, value) => {
                            return (<Box key={box} isSelected={box === selectedNumber} onClick={() => setSelectedNumber(box)}>{box}</Box>)
                        })}
                    </Boxes>
                    <p>Select Number</p>
                </div>
            </GamePlayTopSection>
            <RollDice selectedNumber={selectedNumber} setTotalScore={setTotalScore} setSelectedNumberError={setSelectedNumberError} />
        </div>
    )
}

export default GamePlay
const Error = styled.div`
    color:red;
    font-size:25px;
    `
const GamePlayTopSection = styled.div`
    width: 1280px;
    margin: 64px auto;
    display: flex;
    justify-content: space-between;
    height:151px;

 .numberSelector{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:30px;
    p{
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
    }
 }
   .totalScore{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:3px;

    h1{
        font-size: 100px;
        font-weight: 500;
        line-height: 150px;
        height: 112px;
    }
    p{
        font-size: 24px;
        line-height:36px;
        font-weight: 500;
    }
        }
`

const Boxes = styled.div`
    display: flex;
    gap:24px;
    align-items: center;
`

const Box = styled.div`
    width: 72px;
    height:72px;
    border: 1px solid black;
    display: grid;
    place-items:center;
    border:1px solid black;
     font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};
`