import { Modal } from "antd";
import React, { useState } from "react";

const FormModal = (props: any) => {
  const { setModel, value } = props;

  const [isModalOpen, setIsModalOpen] = useState(setModel);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        title="Basic Modal"
        open={setModel}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{value}</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default FormModal;
