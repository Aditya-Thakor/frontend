import { Button, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { productField } from "../../utils/const";
import FormInput from "../../component/FormInput";
import { addProduct } from "../../axios/productApi";

const AddProduct = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (data: any) => {
    const { product_title, product_desc, product_price, product_image } = data;

    const res = await addProduct({
      product_desc,
      product_image: product_image.file,
      product_price,
      product_title,
    });

    res.valid && navigate("/products");
  };
  return (
    <div>
      <div className="anchor">
        <Link to="/products">Products</Link>
      </div>
      <div className="component">
        <div className="section">
          <h1>LOGIN</h1>
          <Form
            encType="multipart/form-data"
            form={form}
            name="login"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            {productField.map((field, i) => (
              <div key={i}>
                <FormInput {...field} />
              </div>
            ))}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Product
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
