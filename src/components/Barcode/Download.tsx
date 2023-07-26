import { Group, Modal } from "@mantine/core";
import React from "react";
import BarcodeImage from "../../assets/images/Barcode.png";

type Props = {
  open: () => void;
  close: () => void;
  opened: boolean;
};

const Download: React.FC<Props> = ({ close, opened }) => {
  return (
    <Modal centered opened={opened} onClose={close}>
      <div className="max-w-[254px] mx-auto p-5 shadow-2xl rounded-md">
        <img src={BarcodeImage} alt="" />
        <div className="mt-5 text-center font-medium">ABC - 123 - abc</div>
      </div>
      <Group position="center" mt={32} mb={10}>
        <button className="bg-dakeb-green-mid py-3 px-10 text-white font-bold rounded-md">
          Download
        </button>
      </Group>
    </Modal>
  );
};

export default Download;
