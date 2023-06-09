import { Button, Form } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginField } from "../../utils/const.js";
import { validateUser } from "../../axios/userApi";
import FormInput from "../../component/FormInput.js";
import { LoginInterface } from "../../modals/RegisterInterface.js";
import { loginSchema } from "../../utils/yupValidation.js";
import { useDispatch } from "react-redux";
import { addToken } from "../../redux/slices/tokenSlice.js";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const onFinish = async (data: LoginInterface) => {
    const res = await validateUser(data);

    if (res.valid) {
      console.log(res.data);
      dispatch(addToken(res.data));
      res.data.role === "admin"
        ? navigate("/dashboard")
        : navigate("/products");
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
