import {
  Divider,
  Drawer,
  Group,
  NumberInput,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { addUser } from "../../services/Users/users";

type Props = {
  opened: boolean;
  close: () => void;
};

const AddUser = ({ close, opened }: Props) => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      salary: "",
      phonenumber: "",
      departmentId: "",
      positionId: "",
      roleId: "",
      usertype: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const submit = (values: any) => {
    addUser(values);
  };

  return (
    <Drawer
      position="right"
      opened={opened}
      onClose={close}
      title={<Text className="font-semibold text-[#333333]">Add new user</Text>}
    >
      <Divider />
      <form onSubmit={form.onSubmit((values) => submit(values))}>
        <TextInput
          required
          size="md"
          radius="md"
          mt={16}
          label="Name"
          placeholder="John Doe"
          {...form.getInputProps("name")}
        />

        <TextInput
          size="md"
          radius="md"
          mt="sm"
          label="Email"
          placeholder="johndoe@gmail.com"
          required
          {...form.getInputProps("email")}
        />

        <NumberInput
          size="md"
          mt="sm"
          label="Phone number"
          placeholder="0XXXXXXXXX"
          hideControls
          required
          {...form.getInputProps("phonenumber")}
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
          required
          {...form.getInputProps("usertype")}
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
          required
          {...form.getInputProps("departmentId")}
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
          required
          {...form.getInputProps("positionId")}
        />

        <NumberInput
          size="md"
          mt="sm"
          label="Salary"
          placeholder="###"
          hideControls
          required
          {...form.getInputProps("salary")}
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
          required
          {...form.getInputProps("roleId")}
        />
        <Group position="right">
          <button className="bg-dakeb-green-mid rounded-md mt-[24px] text-white font-bold px-6 py-3">
            Add User
          </button>
        </Group>
      </form>
    </Drawer>
  );
};

export default AddUser;
