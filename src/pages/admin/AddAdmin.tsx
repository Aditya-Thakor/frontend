import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { adminField } from "../../utils/const.js";
import { Button, Form } from "antd";
import FormInput from "../../component/FormInput.js";
import { registerSchema } from "../../utils/yupValidation.ts";
import { getTokenDetails } from "../../utils/helper.ts";
import { useEffect, useState } from "react";

const AddAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = getTokenDetails();
  const [searchParams, setSearchParams] = useSearchParams();
  const prod_id = searchParams.get("admin_id");
  const mode = searchParams.get("mode");

  const [formMode, setFormMode] = useState<boolean>(false);

  const [form] = Form.useForm();

  useEffect(() => {
    mode === "view" && setFormMode(true);
  }, []);
  const onFinish = async (data: any) => {
    // const { email } = value;
    // if (location.pathname.includes("/admin")) {
    //   const resEmail = await adminEmail(email);
    //   if (resEmail) {
    //     const response = await addAdmin(value);
    //     if (response) navigate("/admin/login");
    //   } else {
    //     form.setFields([{ name: "email", errors: ["email already used"] }]);
    //   }
    // } else {
    //   const resEmail = await fetchEmail(email);
    //   if (resEmail) {
    //     const response = await addUser(value);
    //     if (response) navigate("/login");
    //   } else {
    //     form.setFields([{ name: "email", errors: ["email already used"] }]);
    //   }
    // }
  };

  return (
    <div>
      <div className="component">
        <div className="section">
          <div className="path-label">
            <h4>Add Admin</h4>
          </div>

          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            disabled={formMode}
          >
            {adminField.map((field, i) => (
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

export default AddAdmin;
