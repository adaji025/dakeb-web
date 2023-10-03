import React, { useState } from "react";
import { Modal, Select } from "@mantine/core";
import { useNavigate } from "react-router-dom";

type Props = {
  close: () => void;
  opened: boolean;
};

const Comfirmation: React.FC<Props> = ({ close, opened }) => {
  const [catValue, setCatValue] = useState<string>("");

  const navigate = useNavigate();

  const handleSelectChange = (value: string) => {
    setCatValue(value);
  };

  const handleSubmit = () => {
    catValue === "animal observation" && navigate("/forms/animal-observation-form");
    catValue === "purchase" && navigate("/forms/purchase-form");
    catValue === "daily expense" && navigate("/forms/daily-expenses-form");
    catValue === "turn over" && navigate("/forms/turn-over-form");
    catValue === "plantation observation" &&
      navigate("/forms/plantation-observation-form");
    close()
  };

  return (
    <Modal centered opened={opened} onClose={close} title="Authentication">
      <Select
        label="Category"
        size="md"
        data={[
          { value: "purchase", label: "Purchase" },
          { value: "daily expense", label: "Daily expense" },
          { value: "turn over", label: "Turn over" },
          { value: "animal observation", label: "Animal observation" },
          {
            value: "plantation observation",
            label: "Plantation observation",
          },
        ]}
        value={catValue}
        onChange={handleSelectChange}
      />

      <Select
        label="Priority"
        size="md"
        my={24}
        data={[
          { value: "low", label: "low" },
          { value: "medium", label: "medium" },
          { value: "high", label: "high" },
        ]}
      />

      <div className="w-[70%] mx-auto mb-5">
        <button
          className="w-full py-3 bg-dakeb-green-mid font-bold text-white rounded-md"
          onClick={handleSubmit}
        >
          Proceed
        </button>
      </div>
    </Modal>
  );
};

export default Comfirmation;
