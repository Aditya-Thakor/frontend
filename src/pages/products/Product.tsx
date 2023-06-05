import { Button, Card, Form } from "antd";
import Meta from "antd/es/card/Meta";

import { products } from "../../utils/const";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../axios/cartApi";

const Product = () => {
  const navigate = useNavigate();

  const onAddtoCart = async (did: any) => {
    console.log(did);
    const res = await addToCart(did);
    navigate("/cart");
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="show-list">
        {products.map((item, i) => (
          <div key={i}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt={item.alt} src={item.src} />}
            >
              <Meta title={item.title} description={item.desc} />
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  htmlType="button"
                  type="primary"
                  onClick={() =>
                    onAddtoCart({ item: item.title, desc: item.desc })
                  }
                >
                  Add To Cart
                </Button>
              </Form.Item>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
