import { Divider, Group, Modal, Select, Text, TextInput } from "@mantine/core";

type Props = {
  close: () => void;
  opened: boolean;
};

const AddHunter = ({ close, opened }: Props) => {
  return (
    <Modal
      centered
      opened={opened}
      onClose={close}
      title={<Text className="font-semibold">Beef and chicken hunter scheme</Text>}
    >
      <Divider />

      <TextInput mt={24} size="md" label="Name" placeholder="John Doe" />

      <TextInput
        mt={24}
        size="md"
        label="Email"
        placeholder="johndoe@gmail.com"
      />

      <TextInput
        mt={24}
        size="md"
        label="Phone Number"
        placeholder="xxxxxxxxxxx"
      />

      <Select
        mt={24}
        label="Scheme type"
        placeholder="choose a scheme type"
        data={[
          { value: "Monthly", label: "Monthly" },
          { value: "Weekly", label: "Weekly" },
          { value: "Daily", label: "Daily" },
        ]}
      />
      <Group position="center" mt={32} mb={10}>
        <button className="bg-dakeb-green-mid py-3 px-10 text-white font-bold rounded-md">
          Submit
        </button>
      </Group>
    </Modal>
  );
};

export default AddHunter;
