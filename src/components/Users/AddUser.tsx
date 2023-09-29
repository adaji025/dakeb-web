import { useEffect, useState } from "react";
import {
  Divider,
  Drawer,
  Group,
  NumberInput,
  Select,
  Text,
  TextInput,
  LoadingOverlay,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { addUser, getUsers } from "../../services/Users/users";
import { showNotification } from "@mantine/notifications";
import { getDepartments } from "../../services/department/department";
import useNotification from "../../hooks/useNotification";
import { getPositions } from "../../services/positions/positions";
import { PositionsTypes } from "../../types/position";
import { getRoles } from "../../services/roles/roles";
// import Multiselect from "multiselect-react-dropdown";
import { RolesType } from "../../types/role";
import { UserType } from "../../types/user";

type Props = {
  opened: boolean;
  close: () => void;
  setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
};

const AddUser = ({ close, opened, setUsers }: Props) => {
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState<departmentsTypes[]>([]);
  const [positions, setPositions] = useState<PositionsTypes[]>([]);
  const [roles, setRoles] = useState<RolesType[]>([]);

  console.log("role", roles)
  console.log("position", positions)

  const { handleError } = useNotification();

  useEffect(() => {
    handleGetDepartments();
    handleGetPositions();
    handleGetRole();
  }, []);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      salary: "",
      phonenumber: "",
      departmentId: "",
      positionId: "",
      roleId: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const submit = (values: any) => {
    setLoading(true);
    addUser(values)
      .then(() => {
        showNotification({
          title: "Success",
          message: "User added successfully",
          color: "green",
        });
      })
      .catch((err) => {
        handleError(err);
      })
      .finally(() => {
        handleGetUsers();
        setLoading(false);
        close();
      });
  };

  const handleGetDepartments = () => {
    setLoading(true);

    getDepartments()
      .then((res: any) => {
        setDepartments(res.data);
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGetPositions = () => {
    setLoading(true);

    getPositions()
      .then((res: any) => {
        setPositions(res.data);
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGetRole = () => {
    setLoading(true);

    getRoles()
      .then((res: any) => {
        setRoles(res.data);
      })
      .catch((error: any) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGetUsers = () => {
    setLoading(true);
    getUsers()
      .then((res: any) => {
        setUsers(res.data);
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // const handleGetPermissions = () => {
  //   getPermission()
  //     .then((res: any) => {
  //       setPermission(res.data);
  //     })
  //     .catch((err) => {
  //       handleError(err);
  //     })
  //     .finally();
  // };

  // const options = [];

  // if (permission) {
  //   for (const item of permission) {
  //     for (const action of item.actions) {
  //       options.push({
  //         cat: item?.name,
  //         key: item?.name + "-" + action,
  //       });
  //     }
  //   }
  // }

  return (
    <>
      <LoadingOverlay visible={loading} />
      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        title={
          <Text className="font-semibold text-[#333333]">Add new user</Text>
        }
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

          {/* <Select
            mt="sm"
            size="md"
            label="User type"
            placeholder="Choose user type"
            data={[
              { label: "Staff", value: "User" },
              { label: "Admin", value: "Admin" },
            ]}
            required
            {...form.getInputProps("usertype")}
          /> */}

          <Select
            mt="sm"
            size="md"
            label="Department"
            placeholder="Choose user department"
            data={departments.map((department) => ({
              label: department.name,
              value: department._id,
            }))}
            required
            {...form.getInputProps("departmentId")}
          />

          <Select
            mt="sm"
            size="md"
            label="Position"
            placeholder="Choose position"
            data={positions.map((position) => ({
              label: position.name,
              value: position._id,
            }))}
            required
            {...form.getInputProps("positionId")}
          />

          <Select
            mt="sm"
            size="md"
            label="Role"
            placeholder="Choose role"
            data={roles.map((role) => ({
              label: role.name,
              value: role._id,
            }))}
            required
            {...form.getInputProps("roleId")}
          />

          <NumberInput
            size="md"
            my="sm"
            label="Salary"
            placeholder="###"
            hideControls
            required
            {...form.getInputProps("salary")}
          />

          {/* <div>
            <Text weight={500}>Permissions</Text>
            <Multiselect
              displayValue="key"
              groupBy="cat"
              onKeyPressFn={function noRefCheck() {}}
              onRemove={function noRefCheck() {}}
              onSearch={function noRefCheck() {}}
              onSelect={function noRefCheck() {}}
              options={options}
              showCheckbox
            />
          </div> */}

          <Group position="right">
            <button className="bg-dakeb-green-mid rounded-md mt-[24px] text-white font-bold px-6 py-3">
              Add User
            </button>
          </Group>
        </form>
      </Drawer>
    </>
  );
};

export default AddUser;
