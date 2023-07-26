import { Group, Modal, PasswordInput } from "@mantine/core";
import React from "react";

type Props = {
  close: () => void;
  opened: boolean;
};

const Password: React.FC<Props> = ({ close, opened }) => {
  return (
    <Modal centered opened={opened} onClose={close} title="UUpdate password">
      <PasswordInput mt={12} label="New password" placeholder="xxxxxxxx" />
      <PasswordInput mt={24} label="Confirm password" placeholder="xxxxxxxx" />
      <Group position="center" mt={32} mb={10}>
        <button className="bg-dakeb-green-mid py-3 px-10 text-white font-bold rounded-md">
          Upload
        </button>
      </Group>
    </Modal>
  );
};

export default Password;
