import { Divider, Group, Modal, Select, Text, TextInput } from "@mantine/core";

type Props = {
  close: () => void;
  opened: boolean;
};

const AddBarcode = ({ close, opened }: Props) => {
  return (
    <Modal
      centered
      opened={opened}
      onClose={close}
      title={<Text className="font-semibold">Generate barcode</Text>}
    >
      <Divider />

      <Select
        mt={24}
        label="Barcode type"
        placeholder="choose barcode type"
        data={[
          { value: "Monthly", label: "Monthly" },
          { value: "Weekly", label: "Weekly" },
          { value: "Daily", label: "Daily" },
        ]}
      />

      <TextInput mt={24} size="md" label="data" placeholder="###" />

      <TextInput
        mt={24}
        size="md"
        label="Width (px)"
        placeholder="johndoe@gmail.com"
      />

      <Select
        mt={24}
        label="Output type"
        placeholder="choose output type"
        data={[
          { value: "png", label: "PNG" },
          { value: "svg", label: "SVG" },
          { value: "jpeg", label: "JPEG" },
        ]}
      />
      <Group position="center" mt={32} mb={10}>
        <button className="bg-dakeb-green-mid py-3 px-10 text-white font-bold rounded-md">
          Generate barcode
        </button>
      </Group>
    </Modal>
  );
};

export default AddBarcode;
