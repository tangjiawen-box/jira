import { Button, Form, Input } from "antd"
import React, { useState } from "react"
import { FormEvent } from "react"
import { LongButton } from "."
import { useAuth } from "../context/auth-context"




export const LoginScreen = ({onError}: {onError: (error: Error) => void}) => {
    const apiUrl= process.env.REACT_APP_API_URL
   const {login, user} = useAuth()
   const [loading, setLoading] = useState(false)
   const handSubmit = (values: {username: string,  password: string}) => {
      setLoading(true)
      login(values).catch(onError).finally(() => setLoading(false))
   }

    return <Form  onFinish={handSubmit}>
     
        <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
             
              <Input placeholder={'用户名'} type="text" id={'username'} />
        </Form.Item>
        <Form.Item name={'password'} rules={[{required: true, message: '请输入密码'}]}>
        
              <Input placeholder={'密码'} type="password" id={'password'} />
        </Form.Item>
        <Form.Item>
        <LongButton htmlType={'submit'} type={"primary"} loading={loading} >登录</LongButton>
        </Form.Item>
    </Form>
}