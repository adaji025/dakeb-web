import React from "react";
import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import { UserType } from "../../types/user";
import Header from "./header";
import Sidebar from "./sidebar";
import AdminDashboard from "../../pages/Dashboard/AdminDashboard";
import MobileSidebar from "./MobileSidebar";
import StaffDashboard from "../../pages/Dashboard/StaffDashboard";
import Users from "../../pages/Users/Users";
import UserDetails from "../../pages/Users/UserDetails";
import Reports from "../../pages/Reports/Reports";
import CreateReports from "../../pages/Reports/CreateReports";
import ReportPreview from "../../pages/Reports/ReportPreview";
import Forms from "../../pages/Forms/Forms";
import Payslip from "../../pages/Payslip/Payslip";
import PayslipDetails from "../../pages/Payslip/PayslipDetails";
import ViewPayslip from "../../pages/Payslip/ViewPayslip";
import BeafChickHunters from "../../pages/Beaf-Chick-Hunters/BeafChickHunters";
import Outsourcing from "../../pages/Outsourcing/Outsourcing";
import MaintenanceChart from "../../pages/MaintenanceChart/MaintenanceChart";
import Barcode from "../../pages/Barcode/Barcode";
import Settings from "../../pages/Settings/Settings";
import Mangement from "../../pages/Management/Management";
import ManageReports from "../../pages/Management/ManageReports";
import ManageForms from "../../pages/Management/ManageForms";
import ManageDepartments from "../../pages/Management/ManageDepartment";
import ManagePositions from "../../pages/Management/ManagePositions";
import AnimalObservation from "../../pages/Forms/AnimalObservation";
import TurnOverForm from "../../pages/Forms/TurnOverform";
import PurchaseForm from "../../pages/Forms/PurchaseForm";
import DailyExpenseForm from "../../pages/Forms/DailyExpenseForm";
import PlantationObservation from "../../pages/Forms/PlantationObservation";
import { RootState } from "../../app/store";
import FormDetail from "../../pages/Forms/FormDetail";

const LoggedInContainer = () => {
  const [mobileNav, openMobileNav] = React.useState(false);
  const userData: UserType = useSelector((state: RootState) => state.user.userData)

  const role = userData.role


  const menuItem = [
    {
      title: "Dasboard",
      url: "/",
    },
    {
      title: "Users",
      url: "/users",
    },
    {
      title: "Reprts",
      url: "/reports",
    },
    {
      title: "Forms",
      url: "/forms",
    },
    {
      title: "Pay Slip",
      url: "/pay-slip",
    },
    {
      title: "Beef and Chick Hunters",
      url: "/beef-and-chick-hunters",
    },
    {
      title: "Out Sourcing",
      url: "/out-sourcing",
    },
    {
      title: "Maintenance Chart",
      url: "/maintenance-chart",
    },
    {
      title: "Barcode Development",
      url: "/barcode-develoment",
    },
    {
      title: "Management",
      url: "/system-setup",
    },
  ];

  return (
    <>
      <div className="md:hidden">
        {mobileNav && <MobileSidebar {...{ openMobileNav }} />}
      </div>
      <div className="flex bg-[#EBFDFF] overflow-x-hidden">
        <div className="fixed hidden md:block md:w-[250px]">
          <Sidebar {...{ menuItem }} />
        </div>
        <div className="w-full">
          <div className="fixed z-50 w-full bg-white md:ml-[200px] lg:ml-[250px] md:w-[calc(100vw-200px)] lg:w-[calc(100vw-250px)]">
            <Header {...{ openMobileNav }} />
          </div>
          <main className="w-full bg-white pt-[100px] md:ml-[200px] lg:ml-[250px] md:w-[calc(100vw-200px)] lg:w-[calc(100vw-250px)] px-4 lg:px-10">
            <Routes>
              <Route path="/" element={role.name === "Admin" ? <AdminDashboard /> : <StaffDashboard />} />
              <Route path="" element={<AdminDashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<UserDetails />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/forms" element={<Forms />} />
              <Route
                path="/forms/animal-observation-form"
                element={<AnimalObservation />}
              />
              <Route path="/forms/turn-over-form" element={<TurnOverForm />} />
              <Route path="/forms/purchase-form" element={<PurchaseForm />} />
              <Route
                path="/forms/daily-expenses-form"
                element={<DailyExpenseForm />}
              />
              <Route
                path="/forms/plantation-observation-form"
                element={<PlantationObservation />}
              />
              <Route
                path="/forms/:id"
                element={<FormDetail />}
              />
              <Route
                path="/reports/create-report"
                element={<CreateReports />}
              />
              <Route
                path="/reports/report-preview"
                element={<ReportPreview />}
              />
              <Route path="/pay-slip" element={<Payslip />} />
              <Route path={`/pay-slip/:id`} element={<PayslipDetails />} />
              <Route
                path={`/pay-slip/view-pay-slip/:id`}
                element={<ViewPayslip />}
              />
              <Route
                path={`/beef-and-chick-hunters`}
                element={<BeafChickHunters />}
              />
              <Route path={`/out-sourcing`} element={<Outsourcing />} />
              <Route path="/maintenance-chart" element={<MaintenanceChart />} />
              <Route path="/barcode-develoment" element={<Barcode />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/system-setup" element={<Mangement />} />
              <Route
                path="/system-setup/positions"
                element={<ManagePositions />}
              />
              <Route path="/system-setup/reports" element={<ManageReports />} />
              <Route path="/system-setup/forms" element={<ManageForms />} />
              <Route
                path="/system-setup/departments"
                element={<ManageDepartments />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

export default LoggedInContainer;
