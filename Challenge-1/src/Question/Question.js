import React from 'react'

const question = (props) => {
    const style = {
        textAlign: 'center',
        border: '4px solid white',
        margin: 'auto',
        paddingLeft: '20px',
        paddingRight: '20px',
    };
  return (
    <div
        onClick={props.click}
        style={style} >
        <p>{props.question}</p>
    </div>
  );
};

export default question;