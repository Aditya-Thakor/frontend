import { Button, Card, Form } from "antd";
import Meta from "antd/es/card/Meta";

import { products } from "../../utils/const";

const Product = () => {
  return (
    <div>
      <h1>Products</h1>
      <div className="show-list">
        {products.map((item, i) => (
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={item.alt} src={item.src} />}
          >
            <Meta title={item.title} description={item.desc} />
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="button">
                Add To Cart
              </Button>
            </Form.Item>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Product;
