import { Link, useNavigate } from "react-router-dom";
import { registerField } from "../../utils/const.js";
import FormInputs from "../../component/FormInputs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button, Form } from "antd";
import { addUser, fetchEmail } from "../../axios/userApi.js";
import FormInput from "../../component/FormInput.js";

const Register: any = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  // const yupSync = {
  //   async validator({ field }, value) {
  //     await registerSchema.validateSyncAt(field, { [field]: value });
  //   },
  // };

  const onFinish = async (value: any) => {
    const { email } = value;
    const resEmail = await fetchEmail(email);

    console.log(resEmail);

    if (resEmail) {
      const response = await addUser(value);
      if (response) navigate("/login");
    } else {
      form.setFields([{ name: "email", errors: ["email already used"] }]);
    }
  };

  return (
    <div>
      <div className="anchor">
        <Link to="/login">Login</Link>
      </div>
      <div className="component">
        <div className="section">
          <h1>REGISTER</h1>
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

export default Register;
