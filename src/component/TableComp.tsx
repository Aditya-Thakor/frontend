import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import { ProductInterface } from "../modals/ProductInterface";
import * as yup from "yup";
import { Form } from "antd";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

type Props = {
  data: ProductInterface[];
  qty?: number;
};
const TableComp = (props: Props) => {
  const priceSchema = yup.object().shape({
    qty: yup.number().required().integer().min(1).max(10),
  });

  const { data, qty } = props;

  const [dataset, setDataset] = useState(data);

  useEffect(() => {
    data.map((item) => {
      // console.log(item.prod_price * 5);
    });
  }, []);

  return (
    <div className="table-component">
      <div className="search-row">
        <div className="input-group rounded search-control">
          {/* <FormInput
            name="search"
            type="text"
            className="form-control rounded"
            placeholder="Search"
          /> */}
        </div>
      </div>
      <div>
        <table className="table table-borderless">
          {dataset && dataset.length > 0 ? (
            <tbody>
              {dataset.map((item, i) => (
                <tr key={i}>
                  <td>{item.prod_id}</td>
                  <td>{item["prod_title"]}</td>
                  <td>₹{item["prod_price"]}</td>
                  <td>
                    <div className="prod-qty">
                      <Form>
                        <FormInput
                          schema={priceSchema}
                          defaultValue={qty}
                          type="number"
                          name="qty"
                        />
                      </Form>
                    </div>
                  </td>
                  <td>{item["prod_desc"]}</td>
                  <td>
                    <img src={IMAGE_URL + item.prod_image} alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <nav className="navbar navbar-light bg-light alignment">
                <span className="navbar-text">No data</span>
              </nav>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default TableComp;
