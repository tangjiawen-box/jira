import React from 'react';
import { StringifyOptions } from "querystring"
import { useEffect } from "react"
import { parseCommandLine } from "typescript"
import { Form, Input, Select } from 'antd';

export interface User {
  id: string,
  name: string,
  token: string
}

interface Props {
  param: {
    name: string,
    personId: string
  },
  setParam: (param: Props['param']) => void,
  user: User[]
}


export const SearchPanel = ({param, setParam, user}: Props ) => {
   
   
  

    return <Form style={{marginBottom: '2rem'}} layout={'inline'}>
       
       <Form.Item>
       <Input placeholder={'项目名称'}  type="text" value={param.name} onChange={e => setParam({
        ...param,
        name: e.target.value
       })} />
       </Form.Item>
     <Form.Item>
     <Select value={param.personId} onChange={value => setParam({
        ...param,
        personId: value
       })} >
        <Select.Option value={''}>负责人</Select.Option>
           {
             user.map(use => <Select.Option value={use.id} key={use.id} >{use.name}</Select.Option>)
           }
       </Select>
     </Form.Item>

    </Form>
}