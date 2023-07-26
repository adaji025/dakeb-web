import { Group, Modal } from "@mantine/core";
import React from "react";

type Props = {
  close: () => void;
  opened: boolean;
};

const ConfirmLogout: React.FC<Props> = ({ close, opened }) => {
  return (
      <Modal centered opened={opened} onClose={close}>
          <div className="w-[60%] text-center mx-auto">Are you sure you want to log out?</div>
      <Group position="center" mt={24} mb={10}>
        <button className="bg-dakeb-green-mid py-3 px-10 text-white font-bold rounded-md w-[50%] hover:scale-95 transition-all duration-300">
          No
        </button>
      </Group>
      <Group position="center">
        <button className="bg-dakeb-green-mid/10 py-3 px-10 font-bold rounded-md mt-5 w-[50%] hover:scale-95 transition-all duration-300">
          Yes
        </button>
      </Group>
    </Modal>
  );
};

export default ConfirmLogout;
