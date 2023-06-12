import { useNavigate, useSearchParams } from "react-router-dom";
import { adminField } from "../../utils/const.js";
import { message, Form, Button } from "antd";
import FormInput from "../../component/FormInput.js";
import { registerSchema } from "../../utils/yupValidation.ts";
import { useEffect, useState } from "react";
import { adminEmail, singleAdmin, updateAdmin } from "../../axios/adminApi.tsx";
import { addAdmin } from "../../axios/adminApi.tsx";
import { CheckboxValueType } from "antd/es/checkbox/Group";

const AddAdmin = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const admin_id = searchParams.get("admin_id");
  const mode = searchParams.get("mode");
  const [formMode, setFormMode] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [requestedData, setRequestedData] = useState<any>();
  const [showPassword, setShowPassword] = useState(false);

  const fetchAdmin = async (admin_id: number | string) => {
    const res = await singleAdmin(admin_id);
    const data = res.data;
    setRequestedData({
      username: data.admin_name,
      email: data.admin_email,
      roles: data.admin_roles.split(","),
    });
  };

  useEffect(() => {
    mode === "view" ? setFormMode(true) : setFormMode(false);
    admin_id && fetchAdmin(admin_id);
  }, [mode, admin_id]);

  const [messageApi, contextHolder] = message.useMessage();
  const success = (message: string) => {
    messageApi.open({
      type: "success",
      content: message,
    });
    return true;
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "This is an error message",
    });
  };
  const onFinish = async (data: any) => {
    const { email } = data;
    if (!admin_id && !mode) {
      const res = await adminEmail({ admin_email: email });
      if (res) {
        success("Admin Added");
        await addAdmin(data);
        navigate("/admin");
      }
    } else {
      const res = await adminEmail({ admin_email: email, id: admin_id });
      if (res) {
        admin_id &&
          requestedData &&
          (await updateAdmin({
            ...data,
            id: admin_id,
            original_email: requestedData.email,
          }));
        navigate("/admin");
      }
    }
    form.setFields([{ name: "email", errors: ["email already used"] }]);
  };
  admin_id && mode
    ? form.setFieldsValue({ ...requestedData })
    : form.resetFields();
  return (
    <div>
      {contextHolder}
      <div className="component">
        <div className="section">
          <div className="path-label">
            <h4>{mode ? mode + " Admin" : "Add Admin"}</h4>
          </div>

          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={mode && requestedData}
            autoComplete="off"
            disabled={formMode}
          >
            {adminField.map((field, i) => (
              <div key={i}>
                {mode === "edit" || mode === "view" ? (
                  field.name !== "password" &&
                  field.name !== "confirm" &&
                  requestedData &&
                  mode && (
                    <FormInput
                      {...field}
                      schema={registerSchema}
                      checkList={
                        requestedData &&
                        (requestedData.roles as CheckboxValueType[])
                      }
                      disabled={mode === "view" && true}
                    />
                  )
                ) : (
                  <FormInput {...field} schema={registerSchema} />
                )}
              </div>
            ))}

            {mode === "edit" && (
              <Form.Item label="Change Password">
                <Button
                  className="button"
                  type="dashed"
                  htmlType="button"
                  onClick={() =>
                    showPassword
                      ? setShowPassword(false)
                      : setShowPassword(true)
                  }
                >
                  Change Password
                </Button>
              </Form.Item>
            )}
            {admin_id && showPassword && (
              <FormInput
                label="Change Password"
                type="password"
                name="password"
                placeholder="Change Password"
                schema={registerSchema}
              />
            )}
            {mode !== "view" && (
              <div className="form-btn">
                <Form.Item>
                  <Button className="button" type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
