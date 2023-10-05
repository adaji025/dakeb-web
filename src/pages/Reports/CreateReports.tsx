import { useForm } from "@mantine/form";
import { useState } from "react";
import { Select, LoadingOverlay, TextInput } from "@mantine/core";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import Layout from "../../components/LoggedIn/Layout";
import { addReports, updateReports } from "../../services/reports/reports";
import { showNotification } from "@mantine/notifications";
import useNotification from "../../hooks/useNotification";
import { UserType } from "../../types/user";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useLocation } from "react-router-dom";
import { ReportTypes } from "../../types/reports";

type ItemProps = {
  item: ReportTypes
}

const CreateReports = () => {
  const location = useLocation();

  console.log("item", location.state);

    
  const {item }: ItemProps  = location?.state;
  

  const [loading, setLoading] = useState(false);
  const [reportData, setReportData] = useState(item? item?.reportdetails :"");

  const userData: UserType = useSelector(
    (state: RootState) => state.user.userData
  );

  


  const { handleError } = useNotification();

  const modules = {
    toolbar: [
      ["undo", "redo"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: "justify" }, { align: "center" }, { align: "right" }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
    ],
  };

  const icons = Quill.import("ui/icons");
  icons["undo"] = Undo;
  icons["redo"] = Redo;

  const form = useForm({
    initialValues: {
      reportdetails: item ? item.reportdetails : reportData,
      category: item ? item.category : "",
      priority: item ? item.priority : "",
      status: item ? item.status : 0,
      sentTo: item ? item.sentTo: "",
    },
  });

  const submit = (values: any) => {
    setLoading(true);
    addReports(userData._id, { ...values, reportdetails: reportData })
      .then(() => {
        showNotification({
          title: "Success",
          message: "Report generated successfully",
          color: "green",
        });
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        form.reset();
        setReportData("");
        setLoading(false);
      });
  };

  const handleUpdateReport = (values: any) => {
    setLoading(true);
    updateReports(item._id, { ...values, reportdetails: reportData })
      .then(() => {
        showNotification({
          title: "Success",
          message: "Report updated successfully",
          color: "green",
        });
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmitForm = (values: any) => {
    item? console.log("update") : console.log("post")
    item ? handleUpdateReport(values) : submit(values);
  };

  return (
    <>
      <LoadingOverlay visible={loading} />
      <Layout title="Generate Report">
        <form
          onSubmit={form.onSubmit((values) => handleSubmitForm(values))}
          className="max-w-[1300px] mx-auto py-10"
        >
          <div className="flex gap-10">
            <div className="flex-1">
              <Select
                label="Category"
                size="md"
                data={[
                  { value: "Activity", label: "Activity report" },
                  { value: "Incident", label: "Incident report" },
                  { value: "Procedure", label: "Procedure report" },
                  { value: "Vaccination", label: "Vaccination report" },
                ]}
                {...form.getInputProps("category")}
              />
              <TextInput
                mt={16}
                label="Send To"
                placeholder="Enter recipient"
                {...form.getInputProps("sentTo")}
              />
            </div>

            <div className="flex-1">
              <Select
                label="Priority"
                size="md"
                data={[
                  { value: "Low", label: "Low" },
                  { value: "Medium", label: "Medium" },
                  { value: "High", label: "High" },
                ]}
                {...form.getInputProps("priority")}
              />
            </div>
          </div>

          <div className="min-h-screen mt-6">
            <div className="mb-6 font-medium">Reports details</div>
            <ReactQuill
              theme="snow"
              placeholder="type here ...."
              value={reportData}
              onChange={setReportData}
              modules={modules}
              className="h-[30vh] "
            />
            <div className="mt-24 xl:mt-16">
              <button
                disabled={loading}
                className="bg-dakeb-green-mid py-3 px-6 rounded-md text-white font-bold"
                // onClick={() => navigate("/reports/report-preview")}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Layout>
    </>
  );
};

export default CreateReports;

const Undo = `<svg viewbox="0 0 18 18">
<polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
<path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
</svg>`;

const Redo = `<svg viewbox="0 0 18 18">
<polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
<path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
</svg>`;
