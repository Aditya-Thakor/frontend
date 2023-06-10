import { useEffect, useState } from "react";
import { showCart } from "../../axios/cartApi";
import TableComp from "../../component/TableComp";
import { Link, useNavigate } from "react-router-dom";

import { ProductInterface } from "../../modals/ProductInterface";
import { Button, Form } from "antd";
import { useSelector } from "react-redux";
import { ObjString } from "../../modals/ObjString";
import { tableHeader } from "../../utils/const";

const Cart = () => {
  const cartProduct = useSelector((state: any) => state.cartproduct);
  const [shopData, setShopData] = useState<any>();
  const [totalPrice, setTotalPrice] = useState(0);

  const isToken = useSelector((state: any) => state.authToken);
  const navigate = useNavigate();

  useEffect(() => {
    cartProduct.reduce((groups: ObjString, product: ObjString) => {
      groups[product["prod_id"]] = groups[product["prod_id"]] ?? [];
      groups[product["prod_id"]].push(product);
      setShopData(groups);
      return groups;
    }, {});

    const arr: number[] = [];
    cartProduct.map((item: ProductInterface) => {
      arr.push(item.prod_price);
    });
    const sum = arr.reduce((sum: number, a: number) => sum + a, 0);
    setTotalPrice(() => sum);
  }, [cartProduct]);

  return (
    <div>
      <div className="anchor">
        <Link to="/products">View Products</Link>
      </div>
      <table className="table table-borderless">
        <thead>
          <tr>
            {Object.values(tableHeader).map((item, index) => (
              <th id={item} key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
      </table>
      {shopData &&
        Object.keys(shopData).map((index, i) => (
          <TableComp
            key={i}
            data={[shopData[index][0]]}
            qty={shopData[index].length}
          />
        ))}
      <div className="total-amount">
        <Form.Item>
          <Button
            className="button"
            type="primary"
            onClick={() => alert("TOTAL AMOUNT :  ₹" + totalPrice)}
          >
            Total : ₹{totalPrice}
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default Cart;
