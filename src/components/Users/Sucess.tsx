import WarningImage from "../../assets/svgs/warning.svg";

const DeactivateSucess = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 sm:p-8 text-center text-sm">
      <img src={WarningImage} alt="" />
      <div className="mt-5 font-semibold">
        This user’s will be <span className="text-red-500">deactivated</span>{" "}
        and will be unable to access the system .
      </div>
      <div className="mt-5">Do you want to proceed?</div>
      <div className="mt-5 grid gap-5">
        <button className="bg-dakeb-green-mid hover:bg-dakeb-green-mid/80 text-white font-bold py-2 px-4 rounded">
          No
        </button>
        <button className="text-red-500 hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded">
          Yes, deactivate user
        </button>
      </div>
    </div>
  );
};

export default DeactivateSucess;
