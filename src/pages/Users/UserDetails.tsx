import { useEffect, useState } from "react";
import {
  Avatar,
  Group,
  NumberInput,
  PasswordInput,
  Select,
  TextInput,
  LoadingOverlay,
} from "@mantine/core";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getUser } from "../../services/Users/users";
import { UserType } from "../../types/user";
import useNotification from "../../hooks/useNotification";
import Layout from "../../components/LoggedIn/Layout";

const UserDetails = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  const { handleError } = useNotification();

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    handleGetuser();
  }, []);

  const handleGetuser = () => {
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
              <div className="text-[14px] font-semibold">0{user?.phonenumber}</div>
            </div>
            <div>
              <div className="text-[10px]">Email</div>
              <div className="text-[14px] font-semibold">{user?.email}</div>
            </div>
            <div>
              <div className="text-[10px]">Salary</div>
              <div className="text-[14px] font-semibold">NGN{Number(user?.salary).toLocaleString()}</div>
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

          <div className="mt-5 flex items-start gap-10">
            <div className="flex-1 grid gap-3">
              <TextInput size="md" label="Name" />
              <TextInput size="md" label="Email" />
              <NumberInput size="md" label="Phone number" hideControls />
              <Select
                label="User type"
                size="md"
                data={[
                  { value: "admin", label: "Administrator" },
                  { value: "user", label: "User" },
                ]}
              />
              <PasswordInput
                size="md"
                label="Confime password"
                placeholder="xxxxxxxxxx"
              />
            </div>

            <div className="flex-1 grid gap-3">
              <Select
                label="Postion"
                size="md"
                data={[
                  { value: "admin", label: "Administrator" },
                  { value: "user", label: "User" },
                ]}
              />

              <TextInput size="md" label="Salary" />

              <Select
                label="Role"
                data={[
                  { value: "admin", label: "Administrator" },
                  { value: "user", label: "User" },
                ]}
              />

              <PasswordInput
                size="md"
                label="New password"
                placeholder="xxxxxxxxx"
              />
            </div>
          </div>

          <Group mt={42} position="center">
            <button className="text-white font-semibold bg-dakeb-green-mid w-[200px] py-3 rounded-md">
              Update
            </button>
          </Group>
        </div>
      </Layout>
    </>
  );
};

export default UserDetails;
