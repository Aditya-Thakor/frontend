import { Button, Card, Form, Spin, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import { singleProduct } from "../../axios/cartApi";
import { viewProducts } from "../../axios/productApi";
import { Suspense, useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

const Product = () => {
  const navigate = useNavigate();

  const onAddtoCart = async (id: number) => {
    const res = await singleProduct(id);
    const arr = [];
    arr.push(res.data);

    localStorage.setItem("cart", JSON.stringify(arr));
    res.valid && navigate("/cart");
  };

  const [admin, setAdmin] = useState(true);
  const [product, setProduct] = useState<any>();

  const fetchProduct = async () => {
    const res = await viewProducts();
    setProduct(res.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <div className="title">
        <h1>Products</h1>
        <div className="cart">
          <ShoppingCartOutlined onClick={() => navigate("/cart")} />
        </div>
      </div>

      <div className="show-list">
        <Suspense fallback={<h1>Loading</h1>}>
          {product ? (
            product.length > 0 ? (
              product.map((item: any, i: number) => (
                <div key={i}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="product_alt"
                        src={IMAGE_URL + item.prod_image}
                      />
                    }
                  >
                    <div>
                      <span className="card-span">
                        <Meta title={item.prod_title} />
                      </span>
                      <span className="card-span">
                        Price : ₹{item.prod_price - item.prod_price * 0.3}
                        {<s>₹{item.prod_price}</s>}
                        {/* Price : ₹ {item.prod_price} */}
                      </span>
                      <span className="card-span">
                        Category : {item.prod_category}
                      </span>
                      <span className="card-span">
                        Description : {item.prod_desc}
                      </span>
                    </div>

                    <div className="addtocart">
                      {admin && (
                        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                          <Button
                            htmlType="button"
                            type="primary"
                            onClick={() => onAddtoCart(item.prod_id)}
                          >
                            Add to Cart
                          </Button>
                        </Form.Item>
                      )}
                    </div>
                  </Card>
                </div>
              ))
            ) : (
              <h1>No Data</h1>
            )
          ) : (
            <div className="example">
              <div>
                <Spin size="large" />
              </div>
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Product;
