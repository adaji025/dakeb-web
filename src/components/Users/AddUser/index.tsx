import {
  Button,
  Divider,
  Drawer,
  NumberInput,
  Select,
  Text,
  TextInput,
} from "@mantine/core";

type Props = {
  opened: boolean;
  close: () => void;
};

const AddUser = ({ close, opened }: Props) => {
  return (
    <Drawer
      position="right"
      opened={opened}
      onClose={close}
      title={<Text className="font-semibold text-[#333333]">Add new user</Text>}
    >
      <Divider />

      <TextInput
        size="md"
        radius="md"
        mt={16}
        label="Name"
        placeholder="John Doe"
      />

      <TextInput
        size="md"
        radius="md"
        mt="sm"
        label="Email"
        placeholder="johndoe@gmail.com"
      />

      <NumberInput
        size="md"
        mt="sm"
        label="Phone number"
        placeholder="0XXXXXXXXX"
        hideControls
      />

      <Select
        mt="sm"
        size="md"
        label="User type"
        placeholder="Choose user type"
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />

      <Select
        mt="sm"
        size="md"
        label="Department"
        placeholder="Choose user department"
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />

      <Select
        mt="sm"
        size="md"
        label="Position"
        placeholder="Choose position"
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />

      <NumberInput
        size="md"
        mt="sm"
        label="Salary"
        placeholder="###"
        hideControls
      />

      <Select
        mt="sm"
        size="md"
        label="Role"
        placeholder="Choose role"
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />

      <Button mt={24} mx="auto" color="teal">Add User</Button>
    </Drawer>
  );
};

export default AddUser;
