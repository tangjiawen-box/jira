import { Button, Form, Input } from "antd"
import React from "react"
import { FormEvent } from "react"
import { LongButton } from "."
import { useAuth } from "../context/auth-context"




export const RegisterScreen = ({onError}: {onError: (error: Error) => void}) => {
    const apiUrl= process.env.REACT_APP_API_URL
   const {register, user} = useAuth()

   const handSubmit = ({cpassword, ...values}: {cpassword: string, username: string,  password: string}) => {
    if (cpassword !== values.password) {
        onError(new Error('请确认两次输入的密码相同'))
        return
    }
      register(values).catch(onError)
   }

    return <Form  onFinish={handSubmit}>
     
        <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
             
              <Input placeholder={'用户名'} type="text" id={'username'} />
        </Form.Item>
        <Form.Item name={'password'} rules={[{required: true, message: '请输入密码'}]}>
        
              <Input placeholder={'密码'} type="password" id={'password'} />
        </Form.Item>
        <Form.Item name={'cpassword'} rules={[{required: true, message: '请确认密码'}]}>
        
        <Input placeholder={'确认密码'} type="password" id={'cpassword'} />
  </Form.Item>
        <Form.Item>
        <LongButton htmlType={'submit'} type={"primary"} >注册</LongButton>
        </Form.Item>
    </Form>
}