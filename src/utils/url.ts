import { useSearchParams } from "react-router-dom"

export const useUrlQueryParam = (keys: string[]) =>{
    const [URLSearchParams, SetURLSearchParams] = useSearchParams()
    // useSearchParams组件会返回一个URLSearchParams，这个是浏览器的对象
    // 不能直接调用，
    
    
    
    
    console.log(URLSearchParams.get('name'));
    
}