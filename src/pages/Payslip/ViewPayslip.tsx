import DakebLogo from "../../assets/svgs/dakeb-logo.svg";
import Layout from "../../components/LoggedIn/Layout";

const ViewPayslip = () => {
  return (
    <Layout title="Single Pay slip" handleBtnClick={() => {}}>
      <div className="max-w-[1300px] mx-auto py-10">
        <div className="max-w-[628px] mx-auto p-5 sm:p-10 bg-dakeb-green-mid/10 rounded-md">
          <div className="bg-white">
            <div className="p-5 sm:p-10">
              <div className="flex justify-between items-center border-b">
                <div>
                  <div className="font-semibold">Dakeb Farms</div>
                  <div className="text-sm">
                    No 14, Nunu street, Garki, Abuja.
                  </div>
                </div>
                <div>
                  <img src={DakebLogo} alt="" />
                </div>
              </div>
              <div className="font-medium text-sm my-3">
                Payment slip for the month of January, 2023
              </div>

              <div>
                <h2 className="text-sm font-semibold text-dakeb-green-mid">
                  Pay summary
                </h2>
                <div className="mt-10 border-b">
                  <table className="border-separate border-spacing-y-3 text-sm sm:text-base">
                    <tbody>
                      <tr>
                        <td className="text-[#828282] pr-5">Employee name: </td>
                        <td className="font-medium">Adaji Mukhtar</td>
                      </tr>
                      <tr>
                        <td className="text-[#828282]">Unit:</td>
                        <td className="font-medium">Adaji Mukhtar</td>
                      </tr>
                      <tr>
                        <td className="text-[#828282]">Date of joining:</td>
                        <td className="font-medium">07/04/2023</td>
                      </tr>
                      <tr>
                        <td className="text-[#828282]">Payment period:</td>
                        <td className="font-medium">January 2023</td>
                      </tr>
                      <tr>
                        <td className="text-[#828282]">Pay date:</td>
                        <td className="font-medium">07/04/2023</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-sm font-semibold text-dakeb-green-mid">
                  Earnings
                </h2>
                <div className="mt-3 border-b flex  justify-between items-center pb-2">
                  <div>
                    <div className="text-[#828282] mb-2 text-sm sm:text-base">
                      Basic salary
                    </div>
                    <div className="text-[#828282] pr-5 text-sm sm:text-base">
                      Bonus
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-2 text-sm sm:text-base">
                      250,000
                    </div>
                    <div className="font-medium text-sm sm:text-base">
                      5,000
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="border-b flex  justify-between items-center pb-2 text-dakeb-green-mid font-semibold text-sm sm:text-base">
                  <div className="text-[#828282]">Deduction</div>
                  <div className="text-[#828282]">Bonus</div>
                </div>
                <div className="flex justify-between items-center pt-2 text-sm sm:text-base">
                  <div className="text-[#828282]">Tax</div>
                  <div className="font-semibold">5,000</div>
                </div>
              </div>
            </div>

            <div className="bg-dakeb-green-mid/10 border-l-2 border-r-2 border-dakeb-green-mid">
              <div className="px-5 sm:px-10 py-2 mx-auto flex justify-between">
                <div className="text-sm">
                  NET PAY (Gross earning - Deductions)
                </div>
                <div className="font-semibold text-sm sm:text-base">
                  NGN244,500
                </div>
              </div>
            </div>

            <div className="pt-20 pb-10 px-5 sm:px-10">
              <div className="border-t pt-3 flex justify-between">
                <div className="text-xs">Employer signature</div>
                <div className="text-xs">Employee signature</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-12">
            <button className="text-xs sm:text-base border border-dakeb-green-mid font-semibold py-3 px-3 sm:px-6 rounded-md text-dakeb-green-mid hover:scale-95 transition-all duration-300">
              Download pay slip
            </button>
            <button className="text-xs sm:text-base border bg-dakeb-green-mid font-semibold py-3 px-3 sm:px-6 rounded-md text-white hover:scale-95 transition-all duration-300">
              Print pay slip
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewPayslip;
