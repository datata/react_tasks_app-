import React from 'react';
// import { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const url = 'https://datata-tasks-app.herokuapp.com/api';

  const onFinish = async (values) => {
    try {
      const login = await axios.post(url + '/auth/login', values);

      if (!login.data.success) {
        return message.error(login.data.message);
      }

      localStorage.setItem('token', login.data.token);

      navigate('/home');
    } catch (error) { 
      return message.error('Something went wrong, try again later');
    }
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };


  return (
    <div className="login-container">
      <Form
        name="basic"
        size="large"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          labelCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: 'Please input your email!',
              type: 'email',
            },
            {
              type: 'email',
              message: 'Insert a valid E-mail!',
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          labelCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}