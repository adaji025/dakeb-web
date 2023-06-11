import React from "react";
import {
  DecreaseIcon,
  EmployeeIcon,
  FileIcon,
  RevenueIcon,
  UserIcon,
} from "../../Svgs";

type Props = {
  item: {
    increase: boolean;
    title: string;
    figure: number;
    percentage: string;
  };
};

export const StatCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex justify-center p-2 xs:p-[unset]">
      <div className="flex items-center gap-2 pl-2 pr-4 xl:pr-6 w-full">
        <div
          className={`flex justify-center items-center w-[40px] xl:w-[56px] h-[40px] xl:h-[56px]  rounded-full ${
            item.title === "Revenue"
              ? "bg-dakeb-green-mid"
              : item.title === "Total employees"
              ? "bg-[#1D08AF]"
              : item.title === "Reports"
              ? "bg-[#DEA90A]"
              : "bg-[#DE4D86]"
          }`}
        >
          {item.title === "Revenue" ? (
            <RevenueIcon />
          ) : item.title === "Total employees" ? (
            <EmployeeIcon />
          ) : item.title === "Reports" ? (
            <FileIcon />
          ) : (
            <UserIcon />
          )}
        </div>
        <div className="">
          <span className="text-dakeb-black-light text-sm">{item.title}</span>
          <div className="flex md:flex-col xl:flex-row items-center gap-2">
            <h2 className="xl:text-lg font-semibold">${item.figure}</h2>
            <div className="flex items-center justify-center gap-1 w-[70px] h-[30px] bg-dakeb-red/5">
              <span className="text-xs text-dakeb-red font-semibold">
                {item.percentage}%
              </span>
              <DecreaseIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
