import { Button, Card, Form, Spin, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { singleProduct } from "../../axios/cartApi";
import { viewProducts } from "../../axios/productApi";
import { Suspense, useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addProductAction } from "../../redux/slices/productSlice";
import { addOfferAction } from "../../redux/slices/offerSlice";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

const Product = () => {
  const getOfferProduct = useSelector((state: any) => state.cartproduct);
  const [product, setProduct] = useState<any>();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [timer, setTimer] = useState<string | Date>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState<any>();
  const [isOffer, setIsOffer] = useState({
    prod_id: 0,
    time: "",
    isActive: false,
  });

  const isToken = useSelector((state: any) => state.authToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onAddtoCart = async (id: any) => {
    const res = await singleProduct(id);
    dispatch(addProductAction(res.data));
    res.valid && navigate("/cart");
  };

  const fetchProduct = async () => {
    const res = await viewProducts();
    setProduct(res.data);
  };

  useEffect(() => {
    fetchProduct();
    isToken.role === "admin" ? setIsAdmin(true) : setIsAdmin(false);
  }, []);

  const handleOk = () => {
    setModalIsOpen(false);
    setIsOffer({ ...isOffer, isActive: true, prod_id: modalData.prod_id });

    dispatch(
      addOfferAction({
        ...modalData,
        ...isOffer,
        isActive: true,
        prod_id: modalData.prod_id,
      })
    );
  };

  const getdiscountDate = (e: any) => {
    const { value } = e.target;
    setIsOffer({ ...isOffer, time: value });
  };

  const useCountdown = (targetDate: string) => {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
    );

    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);

      return () => clearInterval(interval);
    }, [countDownDate]);

    return getCountDownTime(countDown);
  };

  const getCountDownTime = (countDown: number) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };

  const [days, hours, minutes, seconds] = useCountdown(isOffer.time);

  return (
    <div>
      <div className="navbar">
        {isAdmin && (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/add-product">Add Product</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/product-list">Product List</NavLink>
            <NavLink to="/register">Register as User</NavLink>
          </>
        )}
      </div>
      <div className="title">
        <h1>Products</h1>
        {!(isToken.role === "admin") && (
          <div className="cart">
            <ShoppingCartOutlined onClick={() => navigate("/cart")} />
          </div>
        )}
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
                        {isOffer.isActive &&
                        seconds > 0 &&
                        isOffer.prod_id === item.prod_id ? (
                          <>
                            Price : ₹ {item.prod_price - item.prod_price * 0.3}
                            <s>₹{item.prod_price}</s>
                          </>
                        ) : (
                          <>
                            <>Price : ₹ {item.prod_price}</>
                          </>
                        )}
                      </span>
                      {isOffer.prod_id === item.prod_id && seconds > 0 && (
                        <span className="card-span">
                          OFFER - {days} Days , {hours}:{minutes}:{seconds}
                        </span>
                      )}
                      <span className="card-span">
                        Category : {item.prod_category}
                      </span>
                      <span className="card-span">
                        Description : {item.prod_desc}
                      </span>
                    </div>

                    <div className="addtocart">
                      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                        {isAdmin ? (
                          <>
                            <Button
                              type="primary"
                              onClick={() => {
                                setModalData(item);
                                setModalIsOpen(true);
                              }}
                            >
                              Set Discount
                            </Button>
                            <Modal
                              open={modalIsOpen}
                              onCancel={() => setModalIsOpen(false)}
                              onOk={handleOk}
                            >
                              <h3>Set Discount : </h3>
                              <input
                                type="date"
                                name="discount_date"
                                onChange={(e) => getdiscountDate(e)}
                              />
                            </Modal>
                          </>
                        ) : (
                          <Button
                            htmlType="button"
                            type="primary"
                            onClick={() => onAddtoCart(item.prod_id)}
                          >
                            Add to Cart
                          </Button>
                        )}
                      </Form.Item>
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
