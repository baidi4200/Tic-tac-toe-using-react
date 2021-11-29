import React from 'react'
const style = {
    background: 'lightblue',
    border: '5px solid darkblue',
    fontsize: '50px',
    fontweight: '800',
    cursor: 'pointer',
    outline: 'none'
}

// This is destructuring the props { value, onClick }
export const Square = ({ value, onClick }) => (
    //This is JSX dont fool
    <button style={style} onClick={onClick}>
        {value}

    </button>
)
