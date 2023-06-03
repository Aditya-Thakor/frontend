import { Link, useNavigate } from "react-router-dom";
import { registerField } from "../../utils/const.js";
import FormInputs from "../../component/FormInputs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button, Form } from "antd";
import { addUser, fetchEmail } from "../../axios/userApi.js";

const Register: any = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { email } = data;
    const resEmail = await fetchEmail(email);

    if (resEmail) {
      const response = await addUser(data);
      if (response) navigate("/login");
    } else {
      setError(
        "email",
        { type: "custom", message: "Already Register" },
        { shouldFocus: true }
      );
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {registerField.map((field: any, i: number) => (
                <div key={i}>
                  <FormInputs register={register} errors={errors} {...field} />
                </div>
              ))}
            </div>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
