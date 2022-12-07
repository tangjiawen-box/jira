import React, { useEffect, useState } from 'react';

const flag = (qa: number) => qa === 0 ? false : !qa
export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";


export const CleanObject = (a: { [key: string]: unknown }) => {
   const result = {...a}
   
   Object.keys(result).forEach(key => {
    
        const aa = result[key]
        if (isVoid(aa)) {
     
            delete result[key]
        }
   })
   return result
}


export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
}


export const useDebounces = <T>(param: T, delay?: number) => {
       const [debo, setDebo] = useState(param)
       useEffect(() => {
        
          const timer = setTimeout(() => setDebo(param), delay)
          return () => clearTimeout(timer)
       }, [param, delay])
       return debo
}