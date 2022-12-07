import React, { useEffect, useState } from 'react';
import { SearchPanel } from "./search-panel"

import { List } from "./list"
import qs from 'qs';
import { CleanObject, useDebounces, useMount } from '../../utils';
import { useHttp } from '../../utils/http';
import styled from '@emotion/styled';


export const  ProjectListScreens = () => {
  
    const apiUrl= process.env.REACT_APP_API_URL
    const [param, setParam] = useState({
        name: '',
        personId: '',
    })
    const [user, setUser] = useState([])
    const [list, setList] = useState([])

    

    const debouncesParam = useDebounces(param, 200)
    const client = useHttp();
    useEffect(() => {
        
        client("projects", { data: CleanObject(debouncesParam) })
        .then(setList)
        
    }, [debouncesParam])
   
    
    useMount(() => {
        client("users").then(setUser);
    })


    return <Container>
        <h1>项目列表</h1>
       <SearchPanel  param={param}  setParam={setParam} user={user}  />
       <List  list={list} user={user}  />
    </Container>
}

const Container = styled.div`
    padding: 3.2rem;
`