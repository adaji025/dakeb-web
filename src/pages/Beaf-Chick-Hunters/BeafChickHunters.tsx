import React, { useState, useEffect } from "react";
import { Avatar, Table, LoadingOverlay } from "@mantine/core";
import { IoCopyOutline } from "react-icons/io5";
import { getHunters } from "../../services/hunters/hunters";
import useNotification from "../../hooks/useNotification";
import { HuntersType } from "../../types/hunters";

const BeafChickHunters = () => {
  const [active, setActive] = useState<"beaf" | "chick">("beaf");
  const [loading, setLoading] = useState(false);
  const [hunters, setHunters] = useState<HuntersType[]>([]);
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);

  const { handleError } = useNotification();

  const isAllRowsSelected =
    hunters.length > 0 && selectedRowIds.length === hunters.length;

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
      setSelectedRowIds(hunters.map((row) => row._id));
    }
  };

  const isRowSelected = (id: string) => selectedRowIds.includes(id);
  useEffect(() => {
    handleGetHunters();
  }, []);

  const handleGetHunters = () => {
    setLoading(true);
    getHunters()
      .then((res: any) => {
        setHunters(res.data);
      })
      .catch((error) => {
        handleError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const beafHunters = hunters.filter((hunter) => hunter.type === "Beef Hunter");
  const chickHunters = hunters.filter(
    (hunter) => hunter.type === "Chick Hunter"
  );

  const data = active === "beaf" ? beafHunters : chickHunters;

  return (
    <>
      <LoadingOverlay visible={loading} />
      <div className="max-w-[1300px] mx-auto overflow-x-hidden py-10">
        <div className="flex gap-5">
          <div
            className={`text-base font-medium cursor-pointer ${
              active === "beaf"
                ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
                : "text-[#828282]"
            }`}
            onClick={() => setActive("beaf")}
          >
            Beef hunters
          </div>
          <div
            className={`text-base font-medium cursor-pointer ${
              active === "chick"
                ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
                : "text-[#828282]"
            }`}
            onClick={() => setActive("chick")}
          >
            Chick hunters
          </div>
        </div>
        <div className="mt-5 overflow-auto">
          <Table verticalSpacing="sm">
            <thead>
              <tr>
                <th>
                  <div className="flex gap-5">
                    <input
                      type="checkbox"
                      checked={isAllRowsSelected}
                      onChange={handleSelectAllRows}
                    />
                    <div>Full name</div>
                  </div>
                </th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Type</th>
                <th>Codes</th>
              </tr>
            </thead>
            <tbody>
              {data.map((element) => (
                <tr
                  key={element.name}
                  className={`border-none ${
                    isRowSelected(element._id) ? "selected" : ""
                  }`}
                >
                  <td>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isRowSelected(element._id)}
                        onChange={() => handleRowCheckboxChange(element._id)}
                      />
                      <div className="flex items-center gap-2">
                        <Avatar
                          src={null}
                          alt="Profile Picture"
                          color="red"
                          size={40}
                          radius={40}
                        >
                          VR
                        </Avatar>

                        {element.name}
                      </div>
                    </div>
                  </td>
                  <td>{element.email}</td>
                  <td>{element.phonenumber}</td>
                  <td>{element.type}</td>
                  <td>
                    <div className="flex">
                      {element.code === "" ? (
                        <button className="text-dakeb-green-mid font-bold">
                          Generates code
                        </button>
                      ) : (
                        <div className="flex items-center gap-5 text-dakeb-green-mid font-bold">
                          {element.code} <IoCopyOutline />
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default BeafChickHunters;
