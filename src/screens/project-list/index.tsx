import React, { useEffect, useState } from 'react';
import { SearchPanel } from "./search-panel"

import { List } from "./list"
import qs from 'qs';
import { CleanObject, useDebounces, useDocumentTitle, useMount } from '../../utils';
import { useHttp } from '../../utils/http';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { useUrlQueryParam } from 'utils/url';



export const  ProjectListScreens = () => {
  
    const apiUrl= process.env.REACT_APP_API_URL
    const [param, setParam] = useState({
        name: '',
        personId: '',
    })
    const [user, setUser] = useState([])
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<null | Error>(null)

    const debouncesParam = useDebounces(param, 200)
    const client = useHttp();
    useDocumentTitle('项目列表', false)
    useUrlQueryParam(['fe'])
    useEffect(() => {
        setLoading(true)
        client("projects", { data: CleanObject(debouncesParam) })
        .then(setList)
        .catch((error) => {
            setList([])
            setError(error)
        })
        .finally(() => setLoading(false))
    }, [debouncesParam])
   
    
    useMount(() => {
        client("users").then(setUser);
    })


    return <Container>
      
        <h1>项目列表</h1>
       <SearchPanel  param={param}  setParam={setParam} user={user}  />
       {error ? <Typography.Text type={'danger'} >{error.message}</Typography.Text> : null}
       <List  list={list} user={user}  loading={loading}/>
    </Container>
}

const Container = styled.div`
    padding: 3.2rem;
`