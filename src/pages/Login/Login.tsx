import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import {Link} from "react-router-dom"
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 10px;
`;
const StyledForm = styled(Form)`
  min-width: 350px;
`;

export const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <StyledWrapper>
      <h1>Login</h1>
      <StyledForm
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
          >
            Log in
          </Button>
          <Row justify="space-between" style={{ marginTop: 10 }}>
            <Link className="login-form-forgot" to="">
              Forgot password?
            </Link>
            <Link to="">Don't have account? Sign up</Link>
          </Row>
        </Form.Item>
      </StyledForm>
    </StyledWrapper>
  );
};
