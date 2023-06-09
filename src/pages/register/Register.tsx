import { Link, useLocation, useNavigate } from "react-router-dom";
import { registerField } from "../../utils/const.js";
import { Button, Form } from "antd";
import { addUser, fetchEmail } from "../../axios/userApi.js";
import FormInput from "../../component/FormInput.js";
import { registerInterface } from "../../modals/RegisterInterface.ts";
import { registerSchema } from "../../utils/yupValidation.ts";
import { addAdmin, adminEmail } from "../../axios/adminApi.tsx";
import { getTokenDetails } from "../../utils/helper.ts";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { role } = getTokenDetails();
  useEffect(() => {
    const path = location.pathname.includes("/register");
    if (role === "") {
      path && navigate("/register");
    } else if (role.length > 0) {
      role === "admin" ? navigate("/dashboard") : navigate("/products");
    }
  }, []);
  const [form] = Form.useForm();

  const onFinish = async (value: registerInterface) => {
    const { email } = value;
    if (location.pathname.includes("/admin")) {
      const resEmail = await adminEmail(email);

      if (resEmail) {
        const response = await addAdmin(value);
        if (response) navigate("/admin/login");
      } else {
        form.setFields([{ name: "email", errors: ["email already used"] }]);
      }
    } else {
      const resEmail = await fetchEmail(email);
      if (resEmail) {
        const response = await addUser(value);
        if (response) navigate("/login");
      } else {
        form.setFields([{ name: "email", errors: ["email already used"] }]);
      }
    }
  };

  return (
    <div>
      <div className="anchor">
        <Link to="/login">Login</Link>
      </div>
      <div className="component">
        <div className="section">
          <div className="title">
            <h1>REGISTER</h1>
          </div>
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            {registerField.map((field, i) => (
              <div key={i}>
                <FormInput {...field} schema={registerSchema} />
              </div>
            ))}
            <div className="form-btn">
              <Form.Item>
                <Button className="button" type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
