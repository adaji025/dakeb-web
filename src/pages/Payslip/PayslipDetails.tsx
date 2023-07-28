import { Avatar, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import GeneratePayslip from "../../components/Paylip/GeneratePayslip";
import { useNavigate } from "react-router-dom";

const PayslipDetails = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate()
  const rows = [
    {
      id: 1,
      generated_by: "Haylie Madsen",
      payment_period: "January",
      gross_earnings: 250000,
      deduction: 10500,
      net_pay: 239500,
      pay_date: "06 - 06 - 2010",
    },
    {
      id: 2,
      generated_by: "Haylie Madsen",
      payment_period: "January",
      gross_earnings: 250000,
      deduction: 10500,
      net_pay: 239500,
      pay_date: "06 - 06 - 2010",
    },
    {
      id: 3,
      generated_by: "Haylie Madsen",
      payment_period: "January",
      gross_earnings: 250000,
      deduction: 10500,
      net_pay: 239500,
      pay_date: "06 - 06 - 2010",
    },
  ];
  return (
    <>
      <GeneratePayslip {...{ opened, close }} />
      <div className="max-w-[1300px] mx-auto py-10">
        <div className="hidden sm:flex flex-wrap items-center xl:justify-between py-5 gap-6 border-b">
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
              <div className="text-[14px] font-semibold">Adaji Mukhtar</div>
            </div>
          </div>
          <div>
            <div className="text-[10px]">Phone number</div>
            <div className="text-[14px] font-semibold">09087543213</div>
          </div>
          <div>
            <div className="text-[10px]">Email</div>
            <div className="text-[14px] font-semibold">
              dulcevetrovs@dakeb.com
            </div>
          </div>
          <div>
            <div className="text-[10px]">Salary</div>
            <div className="text-[14px] font-semibold">250,000</div>
          </div>
          <div>
            <div className="text-[10px]">User type</div>
            <div className="text-[14px] font-semibold">Administrator</div>
          </div>
          <div>
            <div className="text-[10px]">Joined</div>
            <div className="text-[14px] font-semibold">07/07/2020</div>
          </div>
          <button
            className="border border-dakeb-green-mid font-semibold py-3 px-6 rounded-md text-dakeb-green-mid hover:scale-95 transition-all duration-300"
            onClick={open}
          >
            Generate pay slip
          </button>
        </div>

        <div className="mt-10">
          <Table>
            <thead>
              <tr>
                <th className="!border-none">Generated by</th>
                <th className="!border-none">Pay period</th>
                <th className="!border-none">Gross earnings</th>
                <th className="!border-none">Deductions</th>
                <th className="!border-none">Net pay</th>
                <th className="!border-none">Pay date</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex gap-2 items-center">
                      <Avatar
                        src={null}
                        alt="Profile Picture"
                        color="red"
                        size={60}
                        radius={50}
                      >
                        VR
                      </Avatar>
                      <div>{row.generated_by}</div>
                    </div>
                  </td>
                  <td>
                    <div className="flex">
                      <div>NGN</div>
                      <div>{row.payment_period}</div>
                    </div>
                  </td>
                  <td>
                    <div className="flex">
                      <div>NGN</div>
                      <div>{row.gross_earnings}</div>
                    </div>
                  </td>
                  <td>
                    <div className="flex">
                      <div>NGN</div>
                      <div>{row.deduction}</div>
                    </div>
                  </td>
                  <td>
                    <div className="flex">
                      <div>NGN</div>
                      <div>{row.net_pay}</div>
                    </div>
                  </td>
                  <td>{row.pay_date}</td>
                  <td>
                  <button className="text-dakeb-green-mid font-bold"
                  onClick={() => navigate(`/pay-slip/view-pay-slip/${row.id}`)}>
                    View
                  </button>
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

export default PayslipDetails;