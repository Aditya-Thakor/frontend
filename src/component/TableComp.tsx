import { useEffect, useState } from "react";
import FormInput from "./FormInput";
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

const TableComp = (props: any) => {
  const { data, tableHeader } = props;

  const [dataset, setDataset] = useState(data);

  const [total, setTotal] = useState();

  useEffect(() => {
    data.map((item: any) => {
      console.log(item.prod_price * qty);
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
      {dataset && dataset.length > 0 ? (
        <div>
          <table className="table table-borderless">
            <thead>
              <tr>
                {Object.keys(tableHeader).map((item, index) => (
                  <th id={item} key={index}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {dataset.map((item: any, i: any) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item["prod_title"]}</td>
                  <td>₹{item["prod_price"]}</td>
                  <td>
                    <div className="prod-qty">
                      <FormInput type="number" name="qty" />
                    </div>
                    {item["prod_qty"]}
                  </td>
                  <td>{item["prod_desc"]}</td>
                  <td>
                    <img src={IMAGE_URL + item.prod_image} alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <nav className="navbar navbar-light bg-light alignment">
          <span className="navbar-text">No data</span>
        </nav>
      )}
    </div>
  );
};

export default TableComp;
