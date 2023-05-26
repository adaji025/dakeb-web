import React from "react";
import ParkIcon from "../../assets/svgs/park.svg";
import { DecreaseIcon } from "../Svgs";

type Props = {
    item: {}
}

export const StatCard: React.FC<Props> = () => {
  return (
    <div className="flex justify-center p-2 xs:p-[unset]">
      <div className="flex items-center gap-2 pl-2 pr-4 xl:pr-6 w-full">
        <div className="flex justify-center items-center w-[40px] xl:w-[56px] h-[40px] xl:h-[56px]  rounded-full bg-dakeb-green-mid">
          <img src={ParkIcon} alt="" />
        </div>
        <div className="">
          <span className="text-dakeb-black-light text-sm">Revenue</span>
          <div className="flex md:flex-col xl:flex-row items-center gap-2">
            <h2 className="xl:text-lg font-semibold">$32,787</h2>
            <div className="flex items-center justify-center gap-1 w-[70px] h-[30px] bg-dakeb-red/5">
              <span className="text-xs text-dakeb-red font-semibold">3.3%</span>
              <DecreaseIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
