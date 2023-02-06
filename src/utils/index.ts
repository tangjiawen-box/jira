import React, { useEffect, useRef, useState } from 'react';

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

export const useDocumentTitle = (title: string, keepOnUnmount: boolean = true) => {
    const aa = useRef(document.title).current
 //页面加载时: 旧title， 第一次为'React App'
 // 加载后: 新title
    
    useEffect(() => {
        document.title = title
    }, [title])  // 登陆后变为项目列表

    useEffect(() => {
        return () => {
            if (!keepOnUnmount) {
                // 如果不指定依赖,读到的就是旧title
                document.title = aa
            }
        }
    }, [])  // 用于卸载，变为jira管理系统
}


export const resetRoute = () => (window.location.href = window.location.origin);
// 重置路由，并且刷新页面