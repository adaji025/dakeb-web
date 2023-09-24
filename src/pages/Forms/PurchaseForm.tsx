import { Select, TextInput } from "@mantine/core";
import Layout from "../../components/LoggedIn/Layout";

const PurchaseForm = () => {
  return (
    <Layout title="Purchase Form">
      <div className="max-w-[1300px] mx-auto overflow-x-hidden py-10">
        <h2 className="font-semibold mb-5">A. Buyer’s Information</h2>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="flex-1">
            <TextInput size="md" label="Name" placeholder="Enter name" />
            <TextInput
              mt={24}
              size="md"
              label="Phone number"
              placeholder="Enter phone number"
            />
          </div>

          <div className="flex-1">
            <TextInput size="md" label="Address" placeholder="Enter address" />
            <TextInput
              mt={24}
              size="md"
              label="Email"
              placeholder="Enter email"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-semibold mb-5">B. Seller’s Information</h2>
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex-1">
              <TextInput size="md" label="Name" placeholder="Enter name" />
              <TextInput
                mt={24}
                size="md"
                label="Phone number"
                placeholder="Enter phone number"
              />
            </div>

            <div className="flex-1">
              <TextInput
                size="md"
                label="Address"
                placeholder="Enter address"
              />
              <TextInput
                mt={24}
                size="md"
                label="Email"
                placeholder="Enter email"
              />
            </div>
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

        <div className="mt-16">
          <h2 className="font-semibold mb-5">C. Animal Details</h2>
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex-1">
              <TextInput
                size="md"
                label="Animal type"
                placeholder="Enter animal type"
              />
              <Select
                label="Sex"
                placeholder="Select gender"
                size="md"
                mt={24}
                data={[
                  ...["Male", "Female"].map((item) => ({
                    value: item,
                    label: item,
                  })),
                ]}
              />

              <TextInput
                mt={24}
                size="md"
                label="Price"
                placeholder="Enter price"
              />

              <TextInput
                mt={24}
                size="md"
                label="Health history"
                placeholder="Enter health history"
              />
            </div>

            <div className="flex-1">
              <TextInput
                size="md"
                label="Animal breed"
                placeholder="Enter breed"
              />

              <TextInput
                mt={24}
                size="md"
                label="Age"
                placeholder="Enter age"
              />

              <TextInput
                mt={24}
                size="md"
                label="Quantity"
                placeholder="Enter quantity"
              />

              <TextInput
                mt={24}
                size="md"
                label="Total amount (Auto)"
                placeholder="xxx"
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

export default PurchaseForm;
