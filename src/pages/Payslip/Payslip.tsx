import { useState, useEffect } from "react";
import { Avatar, Table, LoadingOverlay } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/LoggedIn/Layout";
import { getPayslips } from "../../services/payslip/payslip";
import useNotification from "../../hooks/useNotification";
import { PayslipTypes } from "../../types/payslip";

const Payslip = () => {
  const [payslips, setPayslips] = useState<PayslipTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState<"administrator" | "staff">(
    "administrator"
  );

  const { handleError } = useNotification();

  const navigate = useNavigate();
 

  useEffect(() => {
    handleGetSlips();
  }, []);
  const handleGetSlips = () => {
    setLoading(true);
    getPayslips()
      .then((res: any) => {
        setPayslips(res.data);
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
      <Layout title="Pay Slip" handleBtnClick={() => {}}>
        <div className="max-w-[1300px] mx-auto py-10">
          <div className="flex gap-5">
            <div
              className={`text-base font-medium cursor-pointer ${
                active === "administrator"
                  ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
                  : "text-[#828282]"
              }`}
              onClick={() => setActive("administrator")}
            >
              Administrator
            </div>
            <div
              className={`text-base font-medium cursor-pointer ${
                active === "staff"
                  ? "border-b-4 border-dakeb-green-dark text-[#4F4F4F]"
                  : "text-[#828282]"
              }`}
              onClick={() => setActive("staff")}
            >
              Staff
            </div>
          </div>

          <div className="mt-10 overflow-auto">
            <Table>
              <thead>
                <tr>
                  <th className="!border-none">Full name</th>
                  <th className="!border-none">Email</th>
                  <th className="!border-none">Phone number</th>
                  <th className="!border-none">Role</th>
                  <th className="!border-none">Salary</th>
                  <th className="!border-none">Date joined</th>
                </tr>
              </thead>
              <tbody>
                {payslips.map((row) => (
                  <tr key={row._id}>
                    <td>
                      <div className="flex gap-2 items-center">
                        <Avatar
                          src={null}
                          alt="Profile Picture"
                          color="red"
                          size={40}
                          radius={40}
                        >
                          VR
                        </Avatar>
                        <div>{row.user.name}</div>
                      </div>
                    </td>
                    <td>{row.user.email}</td>
                    <td>09099887766</td>
                    <td>{row.user.position}</td>
                    <td>{row.salary}</td>
                    <td>{row.createdAt}</td>
                    <td>
                      <button
                        className="text-dakeb-green-mid font-bold"
                        onClick={() => navigate(`/pay-slip/${row._id}`)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Payslip;
