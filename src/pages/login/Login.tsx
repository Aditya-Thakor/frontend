import { Button, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginField } from "../../utils/const.js";
import { validateUser } from "../../axios/userApi";
import FormInput from "../../component/FormInput.js";
import { LoginInterface } from "../../modals/RegisterInterface.js";
import { loginSchema } from "../../utils/yupValidation.js";

const Login = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const onFinish = async (data: LoginInterface) => {
    const res = await validateUser(data);

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
          <div className="title">
            <h1>LOGIN</h1>
          </div>
          <div className="form-field">
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
                  <FormInput {...field} schema={loginSchema} />
                </div>
              ))}
              <div className="form-btn">
                <Form.Item>
                  <Button className="button" type="primary" htmlType="submit">
                    Login
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
