import { Select, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";
import Layout from "../../components/LoggedIn/Layout";

const DailyExpenseForm = () => {
  const { reportData, setReportData } = useContext(DataContext);
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
    <Layout title="Daily Expense Form">
      <div className="max-w-[1300px] mx-auto overflow-x-hidden py-10">
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="flex-1">
            <DateInput
              size="md"
              label="Date expense was incurred"
              placeholder="Enter name"
            />
            <Select
              label="Category"
              placeholder="Select Category"
              size="md"
              mt={24}
              data={[
                ...["food", "drinks"].map((item) => ({
                  value: item,
                  label: item,
                })),
              ]}
            />
            <Select
              label="Payment method"
              placeholder="Select Category"
              size="md"
              mt={24}
              data={[
                ...["cash", "bank transfer"].map((item) => ({
                  value: item,
                  label: item,
                })),
              ]}
            />
          </div>

          <div className="flex-1">
            <TextInput
              size="md"
              label="Description"
              placeholder="Enter description"
            />
            <TextInput
              mt={24}
              size="md"
              label="Amount"
              placeholder="Enter amount"
            />
            <TextInput
              mt={24}
              size="md"
              label="Receipt/ Reference number"
              placeholder="Enter receipt number"
            />
          </div>
        </div>

        <div className="min-h-screen mt-6">
          <div className="mb-6 font-medium">Notes</div>
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

        <div className="flex justify-center mt-20">
          <button className="min-w-[200px] bg-dakeb-green-mid text-white font-bold py-3 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default DailyExpenseForm;

const Undo = `<svg viewbox="0 0 18 18">
<polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
<path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
</svg>`;

const Redo = `<svg viewbox="0 0 18 18">
<polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
<path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
</svg>`;
