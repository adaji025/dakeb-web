import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import { UserType } from "../../types/user";
import AdminDashboard from "../../pages/Dashboard/AdminDashboard";
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
  const userData: UserType = useSelector(
    (state: RootState) => state.user.userData
  );

  const role = userData.role;

  return (
    <Routes>
      <Route
        path="/"
        element={
          role.name === "Admin" ? <AdminDashboard /> : <StaffDashboard />
        }
      />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetails />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/reports/:id" element={<ReportPreview />} />
      <Route
        path="/forms/animal-observation-form"
        element={<AnimalObservation />}
      />
      <Route path="/forms/turn-over-form" element={<TurnOverForm />} />
      <Route path="/forms/purchase-form" element={<PurchaseForm />} />
      <Route path="/forms/daily-expenses-form" element={<DailyExpenseForm />} />
      <Route
        path="/forms/plantation-observation-form"
        element={<PlantationObservation />}
      />
      <Route path="/forms/:id" element={<FormDetail />} />
      <Route path="/reports/create-report" element={<CreateReports />} />
      <Route path="/pay-slip" element={<Payslip />} />
      <Route path={`/pay-slip/:id`} element={<PayslipDetails />} />
      <Route path={`/pay-slip/view-pay-slip/:id`} element={<ViewPayslip />} />
      <Route path={`/beef-and-chick-hunters`} element={<BeafChickHunters />} />
      <Route path={`/out-sourcing`} element={<Outsourcing />} />
      <Route path="/maintenance-chart" element={<MaintenanceChart />} />
      <Route path="/barcode-develoment" element={<Barcode />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/system-setup" element={<Mangement />} />
      <Route path="/system-setup/positions" element={<ManagePositions />} />
      <Route path="/system-setup/reports" element={<ManageReports />} />
      <Route path="/system-setup/forms" element={<ManageForms />} />
      <Route path="/system-setup/departments" element={<ManageDepartments />} />
    </Routes>
  );
};

export default LoggedInContainer;
