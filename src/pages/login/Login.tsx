import { Button, Form } from "antd";
import React from "react";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginField } from "../../utils/const.js";
import { validateUser } from "../../axios/userApi";
import FormInput from "../../component/FormInput.js";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const onFinish = async (data: any) => {
    const res = await validateUser(data);
    console.log(res.valid);

    if (res.valid) {
      localStorage.setItem("token", JSON.stringify(res.token));
      navigate("/dashboard");
    } else {
      form.setFields([
        { name: "password", errors: ["Invalid username/password"] },
      ]);
    }
  };

  return (
    <div>
      <div className="anchor">
        <Link to="/register">Register</Link>
      </div>
      <div className="component">
        <div className="section">
          <h1>LOGIN</h1>
          <Form
            form={form}
            name="login"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            {loginField.map((field, i) => (
              <div key={i}>
                <FormInput {...field} />
              </div>
            ))}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
