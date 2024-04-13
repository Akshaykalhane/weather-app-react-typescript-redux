import React from 'react'
import './errorui.css';

interface StateType{
    errorMsg:string
}

const ErrorUi:React.FC<StateType> = ({errorMsg}) => {
  return (<>
      <div className="error-msg">
        <p>{errorMsg}</p>
        <img src="/images/drawkit-grape-pack-illustration-3-dribbble-export-v0.1.gif" alt="" />
      </div>
  </>
  )
}

export default ErrorUi