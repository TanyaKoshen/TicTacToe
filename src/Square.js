import React from 'react';

const styleSquare = {
  border: '-2px solid black',
  margin: '1px',
  height: '100px',
  width: '100px',
  fontWeight: 'bold',
  cursor: 'pointer',
  borderRadius: '4px',
  backgroundColor: 'rgba(52,123,215,0.63)',

}

const Square = (props) => {
  const {el, index, handleMove} = props
  return (
    <button style={styleSquare}

    onClick={()=>handleMove(index, el)}
    >
      {el}
    </button>
  );
};

export default Square;
