import {
  Button,
  Dropdown,
  Form,
  Input,
  Select,
  Space,
  Upload,
  UploadFile,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const FormInput = (props: any) => {
  const {
    name,
    type,
    label,
    errors,
    placeholder,
    dependencies,
    options,
    className,
  } = props;

  const [form] = Form.useForm();

  const renderField = () => {
    switch (type) {
      case "password":
        return (
          <Form.Item
            className={className}
            name={name}
            label={label}
            rules={[{ required: true, message: errors?.message }]}
            hasFeedback
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
            dependencies={[dependencies]}
            hasFeedback
            rules={[
              {
                required: true,
                message: errors?.message,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue(dependencies) === value) {
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
            rules={[
              {
                type: type,
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input placeholder={placeholder} />
          </Form.Item>
        );

      case "select":
        return (
          <Form.Item
            name={name}
            label={label}
            rules={[{ required: true, message: errors?.message }]}
          >
            <select name={name}>
              {Object.entries(options).map(([key, value]: any, i) => (
                <option key={i} value={key}>
                  {value}
                </option>
              ))}
            </select>
          </Form.Item>
          // <Form.Item
          //   name={name}
          //   label={label}
          //   rules={[{ required: true, message: errors?.message }]}
          // >
          //   <Space direction="vertical">
          //     <Space wrap>
          //       <Dropdown menu={{ options:any }} placement="bottomLeft">
          //         <Button>bottomLeft</Button>
          //       </Dropdown>
          //     </Space>
          //   </Space>
          //   {/* <Select placeholder={placeholder}>
          //     {Object.entries(options).map(([key, value]: any, i) => (
          //       <Select.Option key={i} value={key}>
          //         {value}
          //       </Select.Option>
          //     ))}
          //   </Select> */}
          // </Form.Item>
        );

      case "number":
        return (
          <Form.Item
            className={className}
            name={name}
            label={label}
            rules={[{ required: true, message: errors?.message }]}
          >
            <Input style={{ width: "100%" }} placeholder={placeholder} />
          </Form.Item>
        );

      case "textarea":
        return (
          <Form.Item
            name={name}
            label={label}
            rules={[{ required: true, message: errors?.message }]}
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
            rules={[{ required: true, message: errors?.message }]}
          >
            <Input placeholder={placeholder} />
          </Form.Item>
        );

      case "file":
        return (
          <Form.Item
            label={label}
            name={name}
            rules={[{ required: true, message: errors?.message }]}
          >
            <Upload
              accept="image/png, image/jpeg , image/jpeg"
              maxCount={1}
              listType="picture"
              beforeUpload={async (file) => {
                await file;
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

  return <div>{renderField()}</div>;
};

export default FormInput;
// import React from "react";
// import type { MenuProps } from "antd";
// import { Button, Dropdown, Space } from "antd";

// const items: MenuProps["items"] = [
//   {
//     key: "1",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.antgroup.com"
//       >
//         1st menu item
//       </a>
//     ),
//   },
//   {
//     key: "2",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.aliyun.com"
//       >
//         2nd menu item
//       </a>
//     ),
//   },
//   {
//     key: "3",
//     label: (
//       <a
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.luohanacademy.com"
//       >
//         3rd menu item
//       </a>
//     ),
//   },
// ];

// const App: React.FC = () => (
//   <Space direction="vertical">
//     <Space wrap>
//       <Dropdown menu={{ items }} placement="bottomLeft">
//         <Button>bottomLeft</Button>
//       </Dropdown>
//       <Dropdown menu={{ items }} placement="bottom">
//         <Button>bottom</Button>
//       </Dropdown>
//       <Dropdown menu={{ items }} placement="bottomRight">
//         <Button>bottomRight</Button>
//       </Dropdown>
//     </Space>
//     <Space wrap>
//       <Dropdown menu={{ items }} placement="topLeft">
//         <Button>topLeft</Button>
//       </Dropdown>
//       <Dropdown menu={{ items }} placement="top">
//         <Button>top</Button>
//       </Dropdown>
//       <Dropdown menu={{ items }} placement="topRight">
//         <Button>topRight</Button>
//       </Dropdown>
//     </Space>
//   </Space>
// );

// export default App;
