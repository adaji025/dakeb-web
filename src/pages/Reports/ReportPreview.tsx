import { useState, useEffect } from "react";
import { Avatar, LoadingOverlay } from "@mantine/core";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { IoSend } from "react-icons/io5";

import DakebLogo from "../../assets/svgs/dakeb-logo.svg";
import Layout from "../../components/LoggedIn/Layout";
import { useParams } from "react-router";
import { ReportTypes } from "../../types/reports";
import { getReport } from "../../services/reports/reports";
import useNotification from "../../hooks/useNotification";
import moment from "moment";

const ReportPreview = () => {
  const [report, setReport] = useState<ReportTypes>();
  const [loading, setLoading] = useState(false);
  const { reportData } = useContext(DataContext);
  const { id } = useParams();

  const { handleError } = useNotification();

  console.log(report);
  useEffect(() => {
    handleGetReport();
  }, []);

  const handleGetReport = () => {
    setLoading(true);
    if (id)
      getReport(id)
        .then((res: any) => {
          setReport(res.data);
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
      <Layout title="Report Details" handleBtnClick={() => {}}>
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
                  {report?.submittedBy.name}
                </div>
              </div>
            </div>
            <div>
              <div className="text-[10px]">Department</div>
              <div className="text-[14px] font-semibold">
                {report?.submittedBy.department}
              </div>
            </div>
            <div>
              <div className="text-[10px]">Position</div>
              <div className="text-[14px] font-semibold">
                {report?.submittedBy.position}
              </div>
            </div>
            <div>
              <div className="text-[10px]">Category</div>
              <div className="text-[14px] font-semibold">
                {report?.category}
              </div>
            </div>
            <div>
              <div className="text-[10px]">Priority</div>
              <div className={`text-[14px] font-semibold`}>
                {report?.priority}
              </div>
            </div>

            <div>
              <div className="text-[10px]">Date submitted</div>
              <div className="text-[14px] font-semibold">
                {moment(report?.createdAt).format("DD/MM/YY")}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 mt-10">
            {/* left */}
            <div className="lg:w-[70%]">
              <div className="mb-6 font-medium">Reports details</div>
              <div className=" relative border p-5 rounded-xl">
                <div className="min-h-[40vh] ">
                  <div className="flex flex-col items-center mt-5">
                    <img src={DakebLogo} alt="" />
                    <div className="font-semibold mt-1">
                      {report?.category} report
                    </div>
                  </div>
                  <div className="mt-10">
                    <table className="border-separate border-spacing-3">
                      <tbody>
                        <tr>
                          <td className="text-[#828282] pr-5">From:</td>
                          <td className="font-medium">
                            {report?.submittedBy.name}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-[#828282]">To:</td>
                          <td className="font-medium">{report?.sentTo}</td>
                        </tr>
                        <tr>
                          <td className="text-[#828282]">Date:</td>
                          <td className="font-medium">
                            {moment(report?.createdAt).format("DD/MM/YY")}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {report && (
                    <div
                      className="w-full list-disc my-10 pb-10"
                      dangerouslySetInnerHTML={{
                        __html: report?.reportdetails,
                      }}
                    />
                  )}
                  <div className="absolute bottom-0 py-5 border-t w-[calc(100%-40px)] flex justify-between">
                    <div className="text-xs">Employer signature</div>
                    <div className="text-xs">Employee signature</div>
                  </div>
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
      </Layout>
    </>
  );
};

export default ReportPreview;

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
