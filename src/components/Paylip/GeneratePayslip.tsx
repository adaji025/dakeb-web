import {
  Divider,
  Group,
  Modal,
  NumberInput,
  Select,
  Text,
} from "@mantine/core";
import React from "react";

type Props = {
  opened: boolean;
  close: () => void;
};

const GeneratePayslip: React.FC<Props> = ({ opened, close }) => {
  return (
    <Modal
      centered
      opened={opened}
      onClose={close}
      title={<Text className="font-semibold">Payslip</Text>}
    >
      <Divider />
      <NumberInput
        hideControls
        mt={24}
        size="md"
        label="Salary"
        placeholder="###"
      />
      <NumberInput
        hideControls
        mt={24}
        size="md"
        label="Bonus"
        placeholder="###"
      />
      <NumberInput
        hideControls
        mt={24}
        size="md"
        label="Deduction"
        placeholder="###"
      />
      <Select
        mt={24}
        label="Reason for deduction"
        data={[
          { value: "Monthly", label: "Monthly" },
          { value: "Weekly", label: "Weekly" },
          { value: "Daily", label: "Daily" },
        ]}
      />
      <Group position="center" mt={32} mb={10}>
        <button className="bg-dakeb-green-mid py-3 px-10 text-white font-bold rounded-md">
          Generate payslip
        </button>
      </Group>
    </Modal>
  );
};

export default GeneratePayslip;
