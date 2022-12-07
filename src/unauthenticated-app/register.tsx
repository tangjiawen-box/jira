import { Button, Form, Input } from "antd"
import React from "react"
import { FormEvent } from "react"
import { LongButton } from "."
import { useAuth } from "../context/auth-context"




export const RegisterScreen = () => {
    const apiUrl= process.env.REACT_APP_API_URL
   const {register, user} = useAuth()

   const handSubmit = (values: {username: string,  password: string}) => {

      register(values)
   }

    return <Form  onFinish={handSubmit}>
     
        <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
             
              <Input placeholder={'用户名'} type="text" id={'username'} />
        </Form.Item>
        <Form.Item name={'password'} rules={[{required: true, message: '请输入密码'}]}>
        
              <Input placeholder={'密码'} type="password" id={'password'} />
        </Form.Item>
        <Form.Item>
        <LongButton htmlType={'submit'} type={"primary"} >注册</LongButton>
        </Form.Item>
    </Form>
}