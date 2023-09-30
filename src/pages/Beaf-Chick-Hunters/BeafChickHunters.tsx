import { useState, useEffect } from "react";
import { LoadingOverlay } from "@mantine/core";
import { deleteHunter, getHunters } from "../../services/hunters/hunters";
import useNotification from "../../hooks/useNotification";
import { HuntersType } from "../../types/hunters";
import Layout from "../../components/LoggedIn/Layout";
import AddHunter from "../../components/BeafChickHunters/AddHunter";
import BeefChicksTable from "../../components/BeafChickHunters/BeefChicksTable";
import { showNotification } from "@mantine/notifications";

const BeafChickHunters = () => {
  const [active, setActive] = useState<"beaf" | "chick">("beaf");
  const [loading, setLoading] = useState(false);
  const [hunters, setHunters] = useState<HuntersType[]>([]);
  const [addHunter, setAddHunter] = useState<boolean>(false);
  const [rowId, setRowId] = useState<string>("");

  const { handleError } = useNotification();

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

  const handleDelete = (id: string) => {
    setLoading(true);
    deleteHunter(id)
      .then(() => {
        showNotification({
          title: "Success",
          message: "Hunter deleted successfully",
          color: "green",
        });
      })
      .catch((error: any) => {
        handleError(error);
      })
      .finally(() => {
        handleOpenDropdown(id);
        handleGetHunters();
        setLoading(false);
      });
  };

  const beafHunters = hunters.filter((hunter) => hunter.type === "Beef Hunter");
  const chickHunters = hunters.filter(
    (hunter) => hunter.type === "Chick Hunter"
  );

  const data = active === "beaf" ? beafHunters : chickHunters;

  const handleOpenDropdown = (id: string) => {
    if (id === rowId) {
      setRowId("");
    } else {
      setRowId(id);
    }
  };

  return (
    <>
      <AddHunter opened={addHunter} close={() => setAddHunter(false)} />

      <LoadingOverlay visible={loading} />
      <Layout
        title="Beef and chick hunters"
        handleBtnClick={() => setAddHunter(true)}
      >
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
            <BeefChicksTable
              data={data}
              rowId={rowId}
              handleDelete={handleDelete}
              handleOpenDropdown={handleOpenDropdown}
              setAddHunter={setAddHunter}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BeafChickHunters;
