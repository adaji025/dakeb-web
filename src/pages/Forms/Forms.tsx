import React, { useContext, useEffect, useState } from "react";
import { LoadingOverlay } from "@mantine/core";
import { CatMenu } from "../../components/Reports/CatMenu";
import { DataContext } from "../../context/DataProvider";
import { getForms } from "../../services/forms/forms";
import { FormsTypes } from "../../types/forms";
import useNotification from "../../hooks/useNotification";
import FormTable from "../../components/Forms/FormTable";
import Layout from "../../components/LoggedIn/Layout";

const Forms = () => {
  const [tableType, setTableType] = useState<
    | "All"
    | "Purchase"
    | "Daily expense"
    | "Turn over"
    | "Animal observation"
    | "Plantation observation"
  >("All");
  const [forms, setForms] = useState<FormsTypes[]>([]);
  const { loading, setLoading } = useContext(DataContext);
  const { handleError } = useNotification();

  const { createReport } = React.useContext(DataContext);
  const tableList = [
    "All",
    "Purchase",
    "Daily expense",
    "Turn over ",
    "Animal observation",
    "Plantation observation",
  ];

  const animalObservationForm = forms.filter(
    (form) => form.name === "Animal Observation Form"
  );

  useEffect(() => {
    handleGetForms();
  }, []);

  const handleGetForms = () => {
    setLoading(true);

    getForms()
      .then((res: any) => {
        setForms(res.data);
      })
      .then((errors: any) => {
        handleError(errors);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <LoadingOverlay visible={loading} />
      <Layout title="Forms" handleBtnClick={() => {}}>
        <div className="max-w-[1300px] mx-auto py-10">
          {!createReport && (
            <>
              <div className="flex justify-between">
                <div className="flex items-center gap-5 pl-6 pt-6">
                  {tableList.map((item) => (
                    <div
                      key={item}
                      className={`border-b-4  cursor-pointer text-[#4F4F4F] ${
                        tableType === item
                          ? "border-dakeb-green-mid text-[#333333] font-semibold"
                          : "border-transparent"
                      }`}
                      // @ts-ignore
                      onClick={() => setTableType(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <CatMenu />
              </div>
              <div className="mt-10 overflow-auto">
                <FormTable
                  data={
                    tableType === "Animal observation"
                      ? animalObservationForm
                      : forms
                  }
                />
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Forms;
