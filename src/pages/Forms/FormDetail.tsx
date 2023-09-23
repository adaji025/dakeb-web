import { useState, useEffect } from "react";
import { Avatar } from "@mantine/core";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { IoSend } from "react-icons/io5";

import { DataContext } from "../../context/DataProvider";
import DakebLogo from "../../assets/svgs/dakeb-logo.svg";
import { FormsTypes } from "../../types/forms";
import { getForm } from "../../services/forms/forms";
import useNotification from "../../hooks/useNotification";
import moment from "moment";

const FormDetail = () => {
  const [form, setForm] = useState<FormsTypes>();
  const { reportData } = useContext(DataContext);
  const { id } = useParams();

  const { handleError } = useNotification();

  useEffect(() => {
    handleGetForm();
  }, []);

  const handleGetForm = () => {
    if (id) {
      getForm(id)
        .then((res: any) => {
          setForm(res.data);
        })
        .catch((error: any) => {
          handleError(error);
        });
    }
  };
  const comments = [
    {
      name: "Cooper Lubin",
      time: "2 days ago",
      image: "",
      text: " Lorem ipsum dolor sit amet .aliquet aenean placerat lectus mi.",
    },
    {
      name: "Cooper Lubin",
      time: "2 days ago",
      image: "",
      text: " Lorem ipsum dolor sit amet .aliquet aenean placerat lectus mi.",
    },
  ];

  console.log(form);
  return (
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
            <div className="text-[14px] font-semibold">
              {form?.createdBy?.name}
            </div>
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
          <div className="text-[10px]">Date submitted</div>
          <div className="text-[14px] font-semibold">
            {moment(form?.createdAt).format("DD/MM/YY")}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        {/* left */}
        <div className="w-[calc(100% - 40px)] lg:w-[70%] relative  rounded-2xl p-5">
          <div className="mb-6 font-medium">Form details</div>

          <div className="min-h-[40vh] border rounded-xl p-5">
            <div className="flex flex-col items-center mt-5">
              <img src={DakebLogo} alt="" />
              <div className="font-semibold mt-1">{form && form?.name}</div>
            </div>
            <div className="mt-10">
              <table className="border-separate border-spacing-3">
                <tbody>
                  <tr>
                    <td className="text-[#828282] pr-5">From:</td>
                    <td className="font-medium">
                      {form && form?.createdBy?.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-[#828282]">To:</td>
                    <td className="font-medium">Adaji Mukhtar</td>
                  </tr>
                  <tr>
                    <td className="text-[#828282]">Date:</td>
                    <td className="font-medium">
                      {form && moment(form?.createdAt).format("DD/MM/YY")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {form && (
              <div
                className="w-full my-10 pb-10"
                dangerouslySetInnerHTML={{ __html: form?.description }}
              />
            )}

            <div className="absolute bottom-0 py-5 border-t w-[calc(100%-80px)] flex justify-between">
              <div className="text-xs pb-3">Employer signature</div>
              <div className="text-xs pb-3">Employee signature</div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex-1">
          <div className="mb-6 font-semibold flex items-center gap-3">
            <div>Comments (2)</div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-dakeb-green-dark"></div>
              <div className="text-dakeb-green-mid font-thin text-sm">
                1 new
              </div>
            </div>
          </div>
          <div className="flex-1 border rounded-xl p-4">
            <div>
              {comments.map((comment, index) => (
                <div key={index} className="flex gap-3">
                  <Avatar color="cyan" radius="xl">
                    CL
                  </Avatar>
                  <div className="mt-3">
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex">{comment.name}</div>
                      <div className="flex">{comment.time}</div>
                    </div>
                    <div className="text-sm mt-2">{comment.text}</div>
                    <button className="text-sm mt-2 text-dakeb-green-mid">
                      Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center">
              <Avatar color="cyan" radius="xl">
                CL
              </Avatar>
              <input
                placeholder="add comments"
                className="border-none flex-1 p-2 outline-none text-sm"
              />
              <IoSend size={24} color="#157145" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDetail;
