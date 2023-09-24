import { Select, TextInput } from "@mantine/core";
import Layout from "../../components/LoggedIn/Layout";

const AnimalObservation = () => {
  return (
    <Layout title="Animal Observation Form">
      <div className="max-w-[1300px] mx-auto overflow-x-hidden py-10">
        <h2 className="font-semibold mb-5">A. Animal information</h2>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="flex-1">
            <TextInput
              size="md"
              label="Animal species"
              placeholder="Enter species"
            />
            <TextInput mt={24} size="md" label="Age" placeholder="Enter age" />
            <TextInput
              mt={24}
              size="md"
              label="Vendor"
              placeholder="Enter vendor"
            />
            <TextInput
              mt={24}
              size="md"
              label="Animal housing location"
              placeholder="Enter location"
            />
          </div>

          <div className="flex-1">
            {/* select gender */}
            <Select
              label="Sex"
              placeholder="Select gender"
              size="md"
              data={[
                ...["Male", "Female", "Other"].map((item) => ({
                  value: item,
                  label: item,
                })),
              ]}
            />
            <Select
              label="Breeding"
              placeholder="select breeding"
              size="md"
              mt={24}
              data={[
                ...["yes", "no", "Other"].map((item) => ({
                  value: item,
                  label: item,
                })),
              ]}
            />
            <TextInput
              size="md"
              mt={24}
              label="Animal number"
              placeholder="Enter number"
            />
            <TextInput
              mt={24}
              size="md"
              label="Deformity"
              placeholder="Enter deformity"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-semibold mb-5">B. Animal facilities</h2>
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex-1">
              <TextInput
                size="md"
                label="Describe housing unit"
                placeholder="Enter housing unit"
              />
              <TextInput
                mt={24}
                size="md"
                label="Husbandry provisions"
                placeholder="Enter husbandry provisions"
              />
            </div>

            <div className="flex-1">
              <TextInput
                size="md"
                label="Describe husbandry practices"
                placeholder="Enter husbandry practices"
              />
              <TextInput
                mt={24}
                size="md"
                label="Describe Veterinary practices"
                placeholder="Enter veterinary practices"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <button className="min-w-[200px] bg-dakeb-green-mid text-white font-bold py-3 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AnimalObservation;
