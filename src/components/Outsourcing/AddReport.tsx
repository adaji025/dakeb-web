import { Divider, Group, Modal, Select, Text, Textarea } from "@mantine/core";

type Props = {
  close: () => void;
  opened: boolean;
};

const AddReport = ({ close, opened }: Props) => {
  return (
    <Modal
      centered
      opened={opened}
      onClose={close}
      title={<Text className="font-semibold">Report</Text>}
    >
      <Divider />

     
      <Select
        mt={24}
        label="Category"
        placeholder="choose a category"
        data={[
          { value: "Monthly", label: "Monthly" },
          { value: "Weekly", label: "Weekly" },
          { value: "Daily", label: "Daily" },
        ]}
      />
     
      <Select
        mt={24}
        label="Priority"
        placeholder="choose a Priority"
        data={[
          { value: "Monthly", label: "Monthly" },
          { value: "Weekly", label: "Weekly" },
          { value: "Daily", label: "Daily" },
        ]}
      />
      <Textarea mt={24} minRows={4} label="Report details" />
      <Group position="center" mt={32} mb={10}>
        <button className="bg-dakeb-green-mid py-3 px-10 text-white font-bold rounded-md">
          Submit
        </button>
      </Group>
    </Modal>
  );
};

export default AddReport;
