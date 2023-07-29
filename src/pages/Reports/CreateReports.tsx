import { Select } from "@mantine/core";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import Comfirmation from "../../components/Reports/Comfirmation";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateReports = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const { reportData, setReportData } = useContext(DataContext);

  const navigate = useNavigate();
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

  return (
    <>
      <Comfirmation {...{close, open, opened}} />
      <div className="max-w-[1300px] mx-auto py-10">
        <div className="flex gap-10">
          <div className="flex-1">
            <Select
              label="Category"
              size="md"
              data={[
                { value: "activity report", label: "Activity report" },
                { value: "incident report", label: "Incident report" },
                { value: "procedure report", label: "Procedure report" },
                { value: "vaccination report", label: "Vaccination report" },
              ]}
            />
          </div>

          <div className="flex-1">
            <Select
              label="Priority"
              size="md"
              data={[
                { value: "low", label: "low" },
                { value: "medium", label: "medium" },
                { value: "high", label: "high" },
              ]}
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
              onClick={() => navigate("/reports/report-preview")}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
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
