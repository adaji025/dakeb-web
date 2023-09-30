import { useForm } from "@mantine/form";
import { useState } from "react";
import { Select } from "@mantine/core";
// import { useNavigate } from "react-router-dom";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import Layout from "../../components/LoggedIn/Layout";
// import { addReports } from "../../services/reports/reports";

const CreateReports = () => {
  const [reportData, setReportData] = useState("");

  // const navigate = useNavigate();
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

  console.log(reportData)

  const icons = Quill.import("ui/icons");
  icons["undo"] = Undo;
  icons["redo"] = Redo;

  const form = useForm({
    initialValues: {
      reportdetails: reportData,
      category: "",
      priority: "",
      status: 0,
    },
  });

  const submit = (values: any) => console.log({...values, reportdetails: reportData});

  return (
    <>
      <Layout title="Generate Report">
        <form
          onSubmit={form.onSubmit((values) => submit(values))}
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
