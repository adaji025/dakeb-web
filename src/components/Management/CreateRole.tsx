import React from "react";
import { Group, Modal, TextInput, Select, Textarea } from "@mantine/core";

type Props = {
  close: () => void;
  opened: boolean;
};

const CreateRole: React.FC<Props> = ({ close, opened }) => {
  return (
    <Modal centered opened={opened} onClose={close} title="Create new role">
      <TextInput size="md" label="Name" />
      <Select
        label="Permissions"
        size="md"
        mt={24}
        data={[
          { label: "one", value: "one" },
          { label: "two", value: "two" },
          { label: "three", value: "three" },
        ]}
      />
      <Textarea size="md" mt={24} label="Brief decription" minRows={4} placeholder="Type here..." />
      <Group position="center" mt={32} mb={10}>
        <button className="bg-dakeb-green-mid py-3 px-10 text-white font-bold rounded-md">
          Upload
        </button>
      </Group>
    </Modal>
  );
};

export default CreateRole;
