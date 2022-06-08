import React from 'react';
// import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import './login.css';

export default function Login() {

  const onFinish = (values) => {
    console.log('Success:', values);
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