import React, { useState } from "react";
import {
  Group,
  Modal,
  TextInput,
  Select,
  Textarea,
  
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { addDepartments } from "../../services/department/department";
import useNotification from "../../hooks/useNotification"
import { showNotification } from "@mantine/notifications";

type Props = {
  close: () => void;
  opened: boolean;
};

const CreateDepartment: React.FC<Props> = ({ close, opened }) => {
  const [loading, setLoading] = useState(false);
  const {handleError} = useNotification()
  const form = useForm({
    initialValues: {
      name: "",
      description: "",
    },
  });

  console.log(loading)
  const submit = (values: any) => {
    setLoading(true);
    addDepartments(values)
      .then(() => {
        showNotification({
          title: "Success",
          message: `Department added successfully.`,
          color: "green",
        });
      })
      .catch((error => {
        handleError(error);
      }))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Modal
      centered
      opened={opened}
      onClose={close}
      title="Create new Department"
    >
      <form onSubmit={form.onSubmit((values) => submit(values))}>
        <TextInput
          size="md"
          label="Name"
          required
          {...form.getInputProps("name")}
        />
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
        <Textarea
          size="md"
          mt={24}
          label="Brief decription"
          minRows={4}
          placeholder="Type here..."
          required
          {...form.getInputProps("description")}
        />
        <Group position="center" mt={32} mb={10}>
          <button className="bg-dakeb-green-mid py-3 px-10 text-white font-bold rounded-md">
            Upload
          </button>
        </Group>
      </form>
    </Modal>
  );
};

export default CreateDepartment;
