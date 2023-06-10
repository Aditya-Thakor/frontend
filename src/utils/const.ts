export const registerField = [
  {
    name: "username",
    type: "text",
    placeholder: "Name",
    label: "Username : ",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Email",
    label: "Email Address : ",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password : ",
    hasFeedback: true,
  },
  {
    name: "confirm",
    type: "confirm",
    placeholder: "Confirm Password",
    label: "Confirm Password : ",
    dependencies: "password",
    hasFeedback: true,
  },
];

export const adminField = [
  {
    name: "username",
    type: "text",
    placeholder: "Name",
    label: "Username : ",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Email",
    label: "Email Address : ",
  },
  {
    name: "roles",
    type: "checkbox",
    label: "Roles : ",
    optionsArr: [
      {
        label: "Edit",
        value: "edit",
        disabled: false,
      },
      {
        label: "Add",
        value: "add",
        disabled: false,
      },
      // { checked: true, label: "View", value: "view", disabled: true },
    ],
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password : ",
    hasFeedback: true,
  },
  {
    name: "confirm",
    type: "confirm",
    placeholder: "Confirm Password",
    label: "Confirm Password : ",
    dependencies: "password",
    hasFeedback: true,
  },
];
export const loginField = [
  {
    name: "email",
    type: "text",
    placeholder: "Email",
    label: "Email Address : ",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password : ",
    hasFeedback: false,
  },
];

export const products = [
  {
    alt: "product",
    src: "../../public/kalubha.png",
    title: "product",
    desc: "Price : 10000",
    id: 1,
  },
  {
    alt: "product",
    src: "../../public/kalubha.png",
    title: "product",
    desc: "Price : 10000",
    id: 2,
  },
  {
    alt: "product",
    src: "../../public/kalubha.png",
    title: "product",
    desc: "Price : 10000",
    id: 3,
  },
  {
    alt: "product",
    src: "../../public/kalubha.png",
    title: "product",
    desc: "Price : 10000",
    id: 4,
  },
  {
    alt: "product",
    src: "../../public/kalubha.png",
    title: "product",
    desc: "Price : 10000",
    id: 5,
  },
  {
    alt: "product",
    src: "../../public/kalubha.png",
    title: "product",
    desc: "gjhsgdjhfgjhsdfg",
    id: 6,
  },
];
export const catOpt = {
  cloth: "Cloths",
  footware: "Footware & Shoes",
  electronics: "Electronics",
  mobile: "Mobile",
  stationery: "Stationery",
  furniture: "Furniture",
};

export const productField = [
  {
    name: "prod_title",
    type: "text",
    placeholder: "Title",
    label: "Product Title :",
  },
  {
    name: "prod_category",
    type: "select",
    placeholder: "Category",
    options: { ...catOpt },
    label: "Product Category :",
  },
  {
    name: "prod_price",
    type: "number",
    placeholder: "Price",
    label: "Product Price : ",
  },
  {
    name: "prod_image",
    type: "file",
    label: "Product Image : ",
  },
  {
    name: "prod_desc",
    type: "textarea",
    placeholder: "Product Description",
    label: "Product Description : ",
  },
];

export const Staticdata = {
  prod_id: 1,
  prod_name: "Clothes",
  prod_price: 20000,
};

export const tableHeader = {
  "#": "#",
  prod_title: "Name",
  prod_price: "Price",
  prod_qty: "Quantity",
  prod_desc: "Description",
  prod_image: "Product",
};
