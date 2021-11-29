import React, { useState } from 'react';


import { Board } from './Board';
import { calculateWinner } from '../helper';
const styles = {
    margin: '20px auto',
    width: '200px'
};
const BootstrapButton = {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },

}


export const Game = () => {
    const [board, setboard] = useState(Array(9).fill(null))
    const [xIsNext, setxIsNext] = useState(true);
    const winner = calculateWinner(board)
    const handleClick = i => {
        const boardcopy = [...board];
        //if user clicked an accupied square or if game is won, return
        if (winner || boardcopy[i]) return;
        //put an X or 0 when clciekd on square
        boardcopy[i] = xIsNext ? 'X' : '0';
        setboard(boardcopy);
        setxIsNext(!xIsNext);


    }
    const jumpTo = () => {

    }
    const rendermoves = () => {
        return <button style={BootstrapButton}
            onClick={() => setboard(Array(9).fill(null))}>start Game</button>
    }
    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : '0')}</p>
                {rendermoves()}
            </div>
        </>
    )
}
