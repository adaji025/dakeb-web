import { useContext, useEffect, useState } from "react";
import { Table, LoadingOverlay } from "@mantine/core";
import ManagementLayout from "../../components/Management/ManagementLayout";
import { DataContext } from "../../context/DataProvider";
import { getRoles } from "../../services/roles/roles";
import useNotification from "../../hooks/useNotification";
import Layout from "../../components/LoggedIn/Layout";
import { RolesType } from "../../types/role";
import moment from "moment";

const Mangement = () => {
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
  const [roles, setRoles] = useState<RolesType[]>([]);
  const { loading, setLoading } = useContext(DataContext);
  const { handleError } = useNotification();

  console.log(roles);
  const isAllRowsSelected =
    roles.length > 0 && selectedRowIds.length === roles.length;

  const handleRowCheckboxChange = (id: string) => {
    setSelectedRowIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((rowId) => rowId !== id)
        : [...prevIds, id]
    );
  };

  const handleSelectAllRows = () => {
    if (isAllRowsSelected) {
      setSelectedRowIds([]);
    } else {
      setSelectedRowIds(roles.map((row) => row._id));
    }
  };

  const isRowSelected = (id: string) => selectedRowIds.includes(id);

  useEffect(() => {
    handleGetRole();
  }, []);

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

  return (
    <>
      <LoadingOverlay visible={loading} />
      <Layout title="User Management" handleBtnClick={() => {}}>
        <div className="max-w-[1300px] mx-auto overflow-x-hidden py-10">
          <ManagementLayout>
            <div className="mt-5">
              <Table verticalSpacing="md">
                <thead>
                  <tr>
                    <th>
                      <div className="flex gap-5">
                        <input
                          type="checkbox"
                          checked={isAllRowsSelected}
                          onChange={handleSelectAllRows}
                        />
                        <div>Name</div>
                      </div>
                    </th>
                    <th>Permissions</th>
                    <th>Created by</th>
                    <th> Date created</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((element) => (
                    <tr
                      key={element._id}
                      className={`border-none ${
                        isRowSelected(element._id) ? "selected" : ""
                      }`}
                    >
                      <td className="align-top">
                        <div className="flex items-center gap-5">
                          <input
                            type="checkbox"
                            checked={isRowSelected(element._id)}
                            onChange={() =>
                              handleRowCheckboxChange(element._id)
                            }
                          />
                          {element.name}
                        </div>
                      </td>
                      <td className="align-top">
                        {element.permissions.map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="capitalize font-bold">
                              {item.name}
                            </div>{" "}
                            :
                            {item.actions.map((action, index) => (
                              <div key={index} className="flex">
                                {action}
                              </div>
                            ))}
                          </div>
                        ))}
                      </td>
                      <td className="align-top">Adji Mukhtar</td>
                      <td className="align-top">
                        {moment(element.createdAt).format("DD-MM-YY")}
                      </td>
                      {/* <td>
                        <button
                          className={`font-bold py-2 px-4 rounded-full ${
                            element. === "active"
                              ? "bg-dakeb-green-mid/10 text-dakeb-green-mid"
                              : "text-[#B95A06] bg-[#B95A06]/10"
                          }`}
                        >
                          {element.status === "active" ? "Active" : "Inactive"}
                        </button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </ManagementLayout>
        </div>
      </Layout>
    </>
  );
};

export default Mangement;
