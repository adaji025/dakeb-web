import { Avatar, Switch } from "@mantine/core";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import UploadImage from "../../components/Settings/UploadImage";

const Settings = () => {
  const [checked, setChecked] = useState(false);
  const [uploadImage, setUploadImage] = useState<boolean>(true);
  
  return (
    <>
      <UploadImage opened={uploadImage} close={() => setUploadImage(false)} />
    <div className="max-w-[1300px] mx-auto py-10">
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
            <div className="text-[14px] font-semibold">Adaji Mukhtar</div>
          </div>
        </div>
        <div>
          <div className="text-[10px]">Phone number</div>
          <div className="text-[14px] font-semibold">09087543213</div>
        </div>
        <div>
          <div className="text-[10px]">Email</div>
          <div className="text-[14px] font-semibold">
            dulcevetrovs@dakeb.com
          </div>
        </div>
        <div>
          <div className="text-[10px]">Salary</div>
          <div className="text-[14px] font-semibold">250,000</div>
        </div>
        <div>
          <div className="text-[10px]">User type</div>
          <div className="text-[14px] font-semibold">Administrator</div>
        </div>
        <div>
          <div className="text-[10px]">Joined</div>
          <div className="text-[14px] font-semibold">07/07/2020</div>
        </div>
      </div>
      <div className="mt-10">
        <div className="font-semibold">Actions</div>
        <div className="flex gap-10">
          <div className="flex-1">
              <div className="shadow-md p-4 mt-8 flex justify-between items-center rounded-md cursor-pointer"
              onClick={() => setUploadImage(true)}>
              <div>Update profile photo</div>
              <BsArrowRight />
            </div>
            <div className="shadow-md p-4 mt-8 flex justify-between items-center rounded-md cursor-pointer">
              <div>Display online status</div>
              <Switch
                color="teal"
                size="md"
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="shadow-md p-4 mt-8 flex justify-between items-center rounded-md cursor-pointer">
              <div>Update password</div>
              <BsArrowRight />
            </div>
            <div className="shadow-md p-4 mt-8 flex justify-between items-center rounded-md cursor-pointer">
              <div>Log out</div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Settings;
