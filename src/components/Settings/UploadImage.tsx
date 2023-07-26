import { Group, Modal } from "@mantine/core";
import React from "react";
import { DropzoneComponent } from "./Dropzone";

type Props = {
  close: () => void;
  opened: boolean;
};

const UploadImage: React.FC<Props> = ({ close, opened }) => {
  return (
    <Modal centered opened={opened} onClose={close} title="Upload image">
      <div className=" p-5 border-dashed rounded-md">
        <DropzoneComponent />
      </div>
      <Group position="center" mt={32} mb={10}>
        <button className="bg-dakeb-green-mid py-3 px-10 text-white font-bold rounded-md">
          Upload
        </button>
      </Group>
    </Modal>
  );
};

export default UploadImage;
