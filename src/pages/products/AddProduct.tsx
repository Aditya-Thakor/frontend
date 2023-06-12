import { Button, Form, message } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { productField } from "../../utils/const";
import FormInput from "../../component/FormInput";
import { addProduct, updateProduct } from "../../axios/productApi";
import { addProductSchema } from "../../utils/yupValidation";
import { useEffect, useState } from "react";
import { singleProduct } from "../../axios/cartApi";
import { useSelector } from "react-redux";
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

type Data = {
  prod_title: string;
  prod_desc: string;
  prod_price: number;
  prod_category: string;
  prod_image: FileList | string | File | any;
  prod_img_name?: string;
  prod_id?: number | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

const AddProduct = () => {
  const navigate = useNavigate();
  const { prod_id, mode } = useParams();
  const location = useLocation();
  const { permission } = useSelector((state: any) => state.rolestate);
  const [form] = Form.useForm();
  const [formDisable, setFormDisable] = useState<boolean>(false);
  const [formMode, setFormMode] = useState(mode);

  const [messageApi, contextHolder] = message.useMessage();
  const [isRequestedData, setIsRequestedData] = useState<any>({});

  const success = (message: string) => {
    messageApi.open({
      type: "success",
      content: message,
    });
    return true;
  };

  useEffect(() => {
    if (mode?.includes("add")) {
      setFormMode("add");
    }
  }, []);

  const getSingleProductData = async (id: string) => {
    const res = await singleProduct(id);
    res.valid ? setIsRequestedData({ ...res.data }) : navigate("/products");
  };

  useEffect(() => {
    if (mode === "edit" && prod_id) {
      prod_id && getSingleProductData(prod_id);
      setFormMode("edit");
    } else if (location.pathname.includes("add-product") && prod_id) {
      navigate("/products/add-product");
    } else if (prod_id && !mode) {
      prod_id && getSingleProductData(prod_id);
      setFormDisable(true);
      setFormMode("view");
    } else {
      setFormDisable(false);
    }
  }, [prod_id, mode]);

  useEffect(() => {
    if (mode !== "add" && prod_id) {
      prod_id && getSingleProductData(prod_id);
    }

    if (!formMode && prod_id) {
      setFormDisable(true);
    } else if (
      mode !== "view" &&
      permission.includes("edit") &&
      permission.includes("add")
    ) {
      prod_id && getSingleProductData(prod_id);
    } else if (mode !== "edit" && permission.includes("edit")) {
      navigate("/products");
    } else if (mode === "edit" && permission.includes("add")) {
      navigate("/products");
    }
  }, [permission, mode]);

  const onFinish = async (data: Data) => {
    const { prod_image } = data;

    let res;
    if (prod_id) {
      res = await updateProduct({
        ...data,
        prod_image: prod_image.file,
        prod_id,
      });
    } else {
      res = await addProduct({ ...data, prod_image: prod_image.file });
    }
    res && navigate("/products");
  };

  // Intials

  const filelist = [
    {
      uid: prod_id || "1",
      name: isRequestedData.prod_img_name,
      status: "done",
      url: IMAGE_URL + isRequestedData.prod_image,
    },
  ];

  prod_id && isRequestedData
    ? form.setFieldsValue({ ...isRequestedData })
    : form.resetFields();
  return (
    <div>
      {contextHolder}
      <div className="component">
        <div className="section">
          <div className="path-label">
            <h4>{formMode ? formMode + " Product" : "Add Product"}</h4>
          </div>

          <Form
            form={form}
            name="add-product"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            encType="multipart/form-data"
            autoComplete="off"
            disabled={formDisable}
            initialValues={{ remember: true }}
          >
            {productField.map((field, i) => (
              <div key={i}>
                <FormInput
                  {...field}
                  filelist={prod_id && filelist}
                  schema={addProductSchema}
                />
              </div>
            ))}

            {mode !== "view" && (
              <div className="form-btn">
                <Form.Item>
                  <Button className="button" type="primary" htmlType="submit">
                    {formMode ? formMode + " Product" : "Add Product"}
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

export default AddProduct;
