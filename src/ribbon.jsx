import React from 'react';

const Ribbon = ({message}) => {
  return (
    <div className="ribbonjs-wrapper right">
      <div className="ribbonjs">
        {message}
      </div>
    </div>
  )
}

export default Ribbon;