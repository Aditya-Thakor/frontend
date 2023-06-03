import { Button, Form } from "antd";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FormInputs from "../../component/FormInputs";
import { loginField } from "../../utils/const.js";
import { validateUser } from "../../axios/userApi";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const res = await validateUser(data);
    console.log(res.valid);

    if (res.valid) {
      localStorage.setItem("token", JSON.stringify(res.token));
      navigate("/dashboard");
    } else {
      setError(
        "password",
        { type: "custom", message: "Invalid username/password" },
        { shouldFocus: false }
      );
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {loginField.map((field: any, i: number) => (
                <div key={i}>
                  <FormInputs register={register} errors={errors} {...field} />
                </div>
              ))}
            </div>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
