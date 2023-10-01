import {
  Divider,
  Group,
  Modal,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import useNotification from "../../hooks/useNotification";
import { addHunters, getHunters } from "../../services/hunters/hunters";
import { HuntersType } from "../../types/hunters";

type Props = {
  close: () => void;
  opened: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setHunters: React.Dispatch<React.SetStateAction<HuntersType[]>>;
};

const AddHunter = ({
  close,
  opened,
  setLoading,
  setHunters,
}: Props) => {
  const { handleError } = useNotification();
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phonenumber: "",
      type: "",
      code: "",
    },
  });

  const handleGetHunters = () => {
    setLoading(true);
    getHunters()
      .then((res: any) => {
        setHunters(res.data);
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleAddHunter = (values: any) => {
    setLoading(true);
    addHunters(values)
      .then(() => {
        showNotification({
          title: "Success",
          message: "Hunter added successfully",
          color: "green",
        });
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        close();
        handleGetHunters();
        setLoading(false);
        form.reset();
      });
  };

  const submit = (values: any) => {
    handleAddHunter(values);
  };
  return (
    <>
      <Modal
        centered
        opened={opened}
        onClose={close}
        title={
          <Text className="font-semibold">Beef and chicken hunter scheme</Text>
        }
      >
        <Divider />
        <form onSubmit={form.onSubmit((values) => submit(values))}>
          <TextInput
            mt={24}
            size="md"
            label="Name"
            placeholder="John Doe"
            {...form.getInputProps("name")}
          />

          <TextInput
            type="email"
            mt={24}
            size="md"
            label="Email"
            placeholder="johndoe@gmail.com"
            {...form.getInputProps("email")}
          />

          <TextInput
            mt={24}
            size="md"
            label="Phone Number"
            placeholder="xxxxxxxxxxx"
            {...form.getInputProps("phonenumber")}
          />

          <Select
            mt={24}
            label="Scheme type"
            placeholder="choose a scheme type"
            data={[
              { value: "Beef Hunter", label: "Beef Hunter" },
              { value: "Chick Hunter", label: "Chick hunter" },
            ]}
            {...form.getInputProps("type")}
          />
          <Group position="center" mt={32} mb={10}>
            <button className="bg-dakeb-green-mid py-3 px-10 text-white font-bold rounded-md">
              Submit
            </button>
          </Group>
        </form>
      </Modal>
    </>
  );
};

export default AddHunter;
