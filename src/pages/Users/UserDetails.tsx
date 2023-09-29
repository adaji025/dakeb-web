import { useEffect, useState } from "react";
import {
  Avatar,
  Group,
  NumberInput,
  Select,
  TextInput,
  LoadingOverlay,
} from "@mantine/core";
import { useLocation, useParams } from "react-router-dom";
import moment from "moment";
import { getUser, updateUser } from "../../services/Users/users";
import { UserType } from "../../types/user";
import useNotification from "../../hooks/useNotification";
import Layout from "../../components/LoggedIn/Layout";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { getPositions } from "../../services/positions/positions";
import { getDepartments } from "../../services/department/department";
import { RolesType } from "../../types/role";
import { PositionsTypes } from "../../types/position";
import { getRoles } from "../../services/roles/roles";

type LocationProps = {
  item: UserType;
};

const UserDetails = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [departments, setDepartments] = useState<departmentsTypes[]>([]);
  const [positions, setPositions] = useState<PositionsTypes[]>([]);
  const [roles, setRoles] = useState<RolesType[]>([]);

  const { handleError } = useNotification();

  const location = useLocation();

  console.log(location.state);
  const { item }: LocationProps = location.state;

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    handleGetUser();
    handleGetPositions();
    handleGetDepartments();
    handleGetRole();
  }, []);

  const handleGetUser = () => {
    setLoading(true);
    // @ts-ignore
    getUser(id)
      .then((res: any) => {
        setUser(res.data);
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

  const form = useForm({
    initialValues: {
      name: item ? item.name : "",
      email: item ? item.email : "",
      salary: item ? item.salary : "",
      phonenumber: item ? item.phonenumber : "",
      departmentId: item ? item.department : "",
      positionId: item ? item.position : "",
      roleId: item ? item.role.id : "",
      password: "",
    },
  });

  const submit = (values: any) => {
    setLoading(true);
    if(id)
    updateUser(id, values)
      .then(() => {
        showNotification({
          title: "Success",
          message: "User updated successfully",
          color: "green",
        });
      })
      .catch((err: any) => {
        handleError(err);
      })
      .finally(() => {
        handleGetUser();
        setLoading(false);
        close();
      });
  };
  return (
    <>
      <LoadingOverlay visible={loading} />
      <Layout title="User Details" handleBtnClick={() => {}}>
        <div className="max-w-[1300px] mx-auto pb-10">
          <div className="hidden sm:flex flex-wrap items-center xl:justify-between py-5 gap-10 border-b">
            <div className="flex items-center gap-5">
              <Avatar
                src={null}
                alt="Profile Picture"
                color="red"
                size={60}
                radius={50}
              >
                VR
              </Avatar>
              <div>
                <div className="text-[10px]">Name</div>
                <div className="text-[14px] font-semibold">{user?.name}</div>
              </div>
            </div>
            <div>
              <div className="text-[10px]">Phone Number</div>
              <div className="text-[14px] font-semibold">
                0{user?.phonenumber}
              </div>
            </div>
            <div>
              <div className="text-[10px]">Email</div>
              <div className="text-[14px] font-semibold">{user?.email}</div>
            </div>
            <div>
              <div className="text-[10px]">Salary</div>
              <div className="text-[14px] font-semibold">
                NGN{Number(user?.salary).toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-[10px]">User type</div>
              <div className="text-[14px] font-semibold">{user?.role.name}</div>
            </div>
            <div>
              <div className="text-[10px]">Joined</div>
              <div className="text-[14px] font-semibold">
                {moment(user?.createdAt).format("DD/MM/YY")}
              </div>
            </div>
          </div>

          <div className="mt-10 font-semibold text-sm">Update user info</div>

          <form onSubmit={form.onSubmit((values) => submit(values))}>
            <div className="mt-5 flex items-start gap-10">
              <div className="flex-1 grid gap-3">
                <TextInput
                  size="md"
                  label="Name"
                  {...form.getInputProps("name")}
                />

                <TextInput
                  size="md"
                  label="Email"
                  {...form.getInputProps("email")}
                />

                <NumberInput
                  size="md"
                  label="Phone number"
                  hideControls
                  {...form.getInputProps("phonenumber")}
                />

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
              </div>

              <div className="flex-1 grid gap-3">
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

                <TextInput
                  size="md"
                  label="Salary"
                  {...form.getInputProps("salary")}
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
              </div>
            </div>

            <Group mt={42} position="center">
              <button className="text-white font-semibold bg-dakeb-green-mid w-[200px] py-3 rounded-md">
                Update
              </button>
            </Group>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default UserDetails;
