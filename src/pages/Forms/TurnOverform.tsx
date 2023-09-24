import { FileInput, Select, TextInput } from "@mantine/core";
import SignatureCanvas from "react-signature-canvas";
import Layout from "../../components/LoggedIn/Layout";

const TurnOverForm = () => {
  return (
    <Layout title="Turn Over Form">
      <div className="max-w-[1300px] mx-auto overflow-x-hidden py-10">
        <h2 className="font-semibold mb-5">
          A. Personal Information ( Surrendering party)
        </h2>
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
          <h2 className="font-semibold mb-5">B. Animal Details</h2>
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

              <TextInput
                mt={24}
                size="md"
                label="Reason for surrendering"
                placeholder="Enter reason"
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
                label="Behaviour/Temperament"
                placeholder="Enter temperament"
              />

              <FileInput
                mt={24}
                label="Proof of ownership"
                placeholder="Attach document"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-semibold mb-5">
            C. Personal Information ( Receiving party)
          </h2>
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

        <div className="mt-16 w-[70%]">
          <div className="flex justify-between">
            <div className="w-min">
              <div className="text-center">Surrendering party</div>
              <div className="border-b">
                <SignatureCanvas
                  penColor="green"
                  canvasProps={{
                    width: 200,
                    height: 50,
                    className: "sigCanvas",
                  }}
                />
              </div>
              <div className="text-center mt-2">Signature</div>
            </div>
            <div>
              <input type="date" className="h-min border-b outline-none" />
              <div className="text-center mt-2">date</div>
            </div>
          </div>

          <div className="flex justify-between mt-16">
            <div className="w-min">
              <div className="text-center">Receiving party</div>
              <div className="border-b">
                <SignatureCanvas
                  penColor="green"
                  canvasProps={{
                    width: 200,
                    height: 50,
                    className: "sigCanvas",
                  }}
                />
              </div>
              <div className="text-center mt-2">Signature</div>
            </div>
            <div>
              <input type="date" className="h-min border-b outline-none" />
              <div className="text-center mt-2">date</div>
            </div>
          </div>

          <div className="mt-16 w-min">
            <div className="text-center mb-10">Date of transfer</div>
            <div>
              <input type="date" className="h-min border-b outline-none" />
              <div className="text-center mt-2">date</div>
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

export default TurnOverForm;
