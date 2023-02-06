import React, { useState } from 'react'

export const Test = () => {

    const [state, setState] = useState(0)
    return <div>
        <button onClick={() => setState(state + 1)}>+1</button>
        <span>{state}</span>
        </div>
    
  
}

