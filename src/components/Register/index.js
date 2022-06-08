import React from "react";
import { Button, Form, Input, message } from 'antd';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const url = 'https://datata-tasks-app.herokuapp.com/api';

  const onFinish = async (values) => {
    try {
      const register = await axios.post(url + '/auth/register', values);

      if (!register.data.success) {
        if (register.data.message?.error)
          return message.error(register.data.message);

        return message.error(register.data.message);
      }


      localStorage.setItem('token', register.data.token);

      navigate('/home');
    } catch (error) {
      return message.error('Something went wrong, try again later');
    }
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };


  return (
    <div className="register-container">
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
          label="Name"
          name="name"
          labelCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
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
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

