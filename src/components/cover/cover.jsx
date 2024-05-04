import React from "react";

const Cover = () => {
  return (
    <div style={{
      height: '100vh',
      width: '30vw',
      marginLeft: '40px',
      marginRight: 'auto',
      marginTop: '200px'
    }}>
      <p style={{
          fontFamily: 'Oswald',
          color: '#FFC978',
          fontSize: '30px',
          margin: '0px'
          }}>
        Architecture design
      </p>
      <p style={{
          fontFamily: 'Oswald',
          fontSize: '84px',
          margin: '0px'
          }}>
        Professional <br />
        Interior Design
      </p>
      <p style={{
          fontFamily: 'Roboto',
          fontSize: '16px',
          margin: '0px'
          }}>
        Design for now with the awareness of yesterday and unknown tomorrow.
        Because small details make the perfect design. Helping you choose
        between good and best.
      </p>
      <button style={{
        marginTop: '60px',
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        border: '1px solid white',
        padding: '20px 35px'
      }}>Let’s work together</button>
      <p style={{
        position: 'absolute',
        fontFamily: 'inherit',
        fontSize: '168px',
        color: '#0B0E17',
        opacity: '40%',
        left: '0%',
        marginTop: '70px'
      }}>Interior</p>
    </div>
  );
};

export default Cover;
export { Cover };
