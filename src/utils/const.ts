const AntdregisterField = [
  {
    name: "username",
    label: "username",
    type: "text",
    rules: [{ required: true, message: "Please input your username!" }],
  },
  {
    name: "email",
    label: "E-mail",
    type: "text",
    rules: [
      {
        type: "email",
        message: "The input is not valid E-mail!",
      },
      {
        required: true,
        message: "Please input your E-mail!",
      },
    ],
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    rules: [
      {
        required: true,
        message: "Please input your password!",
      },
    ],
  },
  {
    name: "confirm",
    label: "Confirm Password",
    type: "password",
    dependencies: ["password"],
    rules: [
      {
        required: true,
        message: "Please confirm your password!",
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(
            new Error("The two passwords that you entered do not match!")
          );
        },
      }),
    ],
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "text",
    rules: [{ required: true, message: "Please input your phone number!" }],
  },
  {
    name: "address",
    label: "Address",
    type: "textarea",
    rules: [{ required: true, message: "Please input Intro" }],
  },
];

export const registerField = [
  {
    name: "username",
    type: "text",
    placeholder: "Name",
    label: "Enter Your Name : ",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Email",
    label: "Enter Your Email Address : ",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Enter Your Password : ",
  },
  {
    name: "confirm",
    type: "password",
    placeholder: "Confirm Password",
    label: "Enter Your Confirm Password : ",
  },
];

export const loginField = [
  {
    name: "email",
    type: "text",
    placeholder: "Email",
    label: "Enter Your Email Address : ",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Enter Your Password : ",
  },
];

export const products = [
  {
    alt: "product",
    src: "../../public/kalubha.png",
    title: "product",
    desc: "gjhsgdjhfgjhsdfg",
  },
  {
    alt: "product",
    src: "../../public/kalubha.png",
    title: "product",
    desc: "gjhsgdjhfgjhsdfg",
  },
  {
    alt: "product",
    src: "../../public/kalubha.png",
    title: "product",
    desc: "gjhsgdjhfgjhsdfg",
  },
  {
    alt: "product",
    src: "../../public/kalubha.png",
    title: "product",
    desc: "gjhsgdjhfgjhsdfg",
  },
  {
    alt: "product",
    src: "../../public/kalubha.png",
    title: "product",
    desc: "gjhsgdjhfgjhsdfg",
  },
  {
    alt: "product",
    src: "../../public/kalubha.png",
    title: "product",
    desc: "gjhsgdjhfgjhsdfg",
  },
];
