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
  },
  {
    name: "confirm",
    type: "confirm",
    placeholder: "Confirm Password",
    label: "Confirm Password : ",
    dependencies: "password",
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
    name: "product_title",
    type: "text",
    placeholder: "Title",
    label: "Product Title :",
  },
  {
    name: "product_category",
    type: "select",
    placeholder: "Category",
    options: { ...catOpt },
    label: "Product Category :",
  },
  {
    name: "product_price",
    type: "number",
    placeholder: "Price",
    label: "Product Price : ",
  },
  {
    name: "product_image",
    type: "file",
    label: "Product Image : ",
  },
  {
    name: "product_desc",
    type: "textarea",
    placeholder: "Product Description",
    label: "Product Description : ",
  },
];

export const tableHeader = {
  prod_image: "#",
  prod_qty: "Name",
  prod_price: "Price",
};

export const Staticdata = {
  prod_id: 1,
  prod_name: "Clothes",
  prod_price: 20000,
};
