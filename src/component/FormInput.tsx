import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { InputProps } from "../modals/formInputs";
import { ObjString } from "../modals/ObjString";

const FormInput = (props: InputProps) => {
  const {
    name,
    type,
    label,
    placeholder,
    dependencies,
    options,
    optionsArr,
    className,
    schema,
    hasFeedback,
    defaultValue,
    filelist,
    checkList,
    disabled,
  } = props;

  const yupSync = {
    async validator({ field }: ObjString, value: string) {
      await schema.validateSyncAt(field, { [field]: value });
    },
  };
  const renderField = () => {
    switch (type) {
      case "password":
        return (
          <Form.Item
            className={className}
            name={name}
            label={label}
            rules={[{ required: true, ...yupSync }]}
            hasFeedback={hasFeedback}
          >
            <Input.Password placeholder={placeholder} />
          </Form.Item>
        );

      case "confirm":
        return (
          <Form.Item
            className={className}
            name={name}
            label={label}
            dependencies={[dependencies as string]}
            hasFeedback
            rules={[
              {
                required: true,
                ...yupSync,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    !value ||
                    getFieldValue(dependencies as string) === value
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder={placeholder} />
          </Form.Item>
        );

      case "email":
        return (
          <Form.Item
            className={className}
            name={name}
            label={label}
            rules={[{ required: true, ...yupSync }]}
          >
            <Input placeholder={placeholder} />
          </Form.Item>
        );

      case "checkbox":
        return (
          <Form.Item
            label={label}
            name={name}
            valuePropName="checked"
            rules={[{ required: true, message: "Please select a Roles!" }]}
          >
            <Checkbox.Group
              options={optionsArr}
              disabled={disabled}
              defaultValue={checkList}
            />
          </Form.Item>
        );
      case "select":
        return (
          <Form.Item
            className={className}
            name={name}
            label={label}
            rules={[{ required: true, ...yupSync }]}
          >
            <Select placeholder={placeholder}>
              {Object.entries(options as ObjString).map(([key, value], i) => (
                <Select.Option key={i} value={key}>
                  {value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        );

      case "number":
        return (
          <Form.Item
            className={className}
            name={name}
            label={label}
            initialValue={defaultValue}
            rules={[{ required: true, ...yupSync }]}
          >
            <InputNumber
              placeholder={placeholder}
              style={{ width: "100%" }}
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            />
          </Form.Item>
        );

      case "textarea":
        return (
          <Form.Item
            name={name}
            label={label}
            rules={[{ required: true, ...yupSync }]}
          >
            <Input.TextArea
              showCount
              maxLength={100}
              placeholder={placeholder}
            />
          </Form.Item>
        );

      case "text":
        return (
          <Form.Item
            className={className}
            label={label}
            name={name}
            rules={[{ required: true, ...yupSync }]}
          >
            <Input placeholder={placeholder} />
          </Form.Item>
        );

      case "file":
        return (
          <Form.Item
            label={label}
            name={name}
            rules={[{ required: true, ...yupSync }]}
          >
            <Upload
              accept="image/png, image/jpeg , image/jpeg"
              maxCount={1}
              listType="picture"
              defaultFileList={filelist || null}
              beforeUpload={(file) => {
                Promise.resolve(file);
                return false;
              }}
              multiple={false}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
        );
      default:
        return <></>;
    }
  };

  return <div className="fields">{renderField()}</div>;
};

export default FormInput;
