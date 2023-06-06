import { useEffect, useState } from "react";
import { showCart } from "../../axios/cartApi";
import TableComp from "../../component/TableComp";
import { Link } from "react-router-dom";
import { tableHeader } from "../../utils/const";

const fakeData = [
  {
    createdAt: "2023-06-06T09:19:29.000Z",
    prod_category: "furniture",
    prod_desc: "sdfsdf",
    prod_id: 1,
    prod_image: "/upload/1686043169870.png",
    prod_price: 10000,
    prod_title: "Chair",
    updatedAt: "2023-06-06T09:19:29.000Z",
  },
  {
    createdAt: "2023-06-06T09:19:29.000Z",
    prod_category: "furniture",
    prod_desc: "sdfsdf",
    prod_id: 1,
    prod_image: "/upload/1686043169870.png",
    prod_price: 50000,
    prod_title: "Chair",
    updatedAt: "2023-06-06T09:19:29.000Z",
  },
];
const Cart = () => {
  const data = JSON.parse(localStorage.getItem("cart") || "");

  // useEffect(() => {
  //   const tot = products.reduce((item: any, i: any) => {
  //     item.prod_price * item.prod_qty;
  //   });
  //   console.log(tot);
  // }, [products]);

  const [shopData, setData] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const arr: any = [];
    data.map((item: any) => {
      arr.push(item.prod_price);
    });
    const sum = arr.reduce((partialSum: any, a: any) => partialSum + a, 0);
    setTotalPrice(() => sum);
  }, []);
  return (
    <div>
      <div className="anchor">
        <Link to="/products">View Products</Link>
      </div>
      {fakeData.map((data, i) => (
        <div key={i}></div>
      ))}

      <TableComp data={data} tableHeader={tableHeader} />
      <div className="total-amount">
        <span className="label success">Total : ₹{totalPrice}</span>
      </div>
    </div>
  );
};

export default Cart;
