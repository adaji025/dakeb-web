import { Modal } from "@mantine/core";
import React from "react";

type Props = {
  open: () => void;
  close: () => void;
  opened: boolean;
};

const Comfirmation: React.FC<Props> = ({ close, opened }) => {
  return (
    <Modal centered opened={opened} onClose={close} title="Authentication">
      {/* Modal content */}
    </Modal>
  );
};

export default Comfirmation;
