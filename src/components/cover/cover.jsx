import React from "react";

const Cover = () => {
  return (
    <div style={{
      height: '100vh',
      width: '50vw',
      marginLeft: '100px',
      marginRight: 'auto',
      marginTop: '50px'
    }}>
      <p style={{
          fontFamily: 'Oswald',
          color: '#FFC978',
          fontSize: '20px',
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
    </div>
  );
};

export default Cover;
export { Cover };
