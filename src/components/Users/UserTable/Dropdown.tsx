import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { DeactivateIcon, EditIcon, MoreIcon, ResetIcon } from "../../Svgs";

type tableProps = {
  tableId: string;
};

const links = [
  { label: "Update" },
  { label: "Reset password" },
  { label: "Deactivate" },
];

export default function DropDownMenu({  }: tableProps) {
  return (
    <Menu as="td" className="item title w-full relative border-b xl:pl-8">
      <Menu.Button>
        <MoreIcon />
      </Menu.Button>
      <div className="text-sm">
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="bg-white p-3 shadow-md rounded-10 min-w-[100px] absolute top-5 right-0 grid gap-2 z-[100]">
            {links.map((link, idx) => (
              <Menu.Item key={link.label} as={Fragment}>
                {() => (
                  <a
                    className={`cursor-pointer whitespace-nowrap`}
                    // onClick={() => {
                    //   if (link.label === "Details") {
                    //     router.push(`/tickets/${tableId}`);
                    //   } else if (link.label === "Message Admin") {
                    //     router.push(`/tickets/${tableId}`);
                    //   }
                    // }}
                  >
                    <div className="flex items-center gap-2">
                      {idx === 0 ? (
                        <EditIcon />
                      ) : idx === 1 ? (
                        <ResetIcon />
                      ) : (
                        <DeactivateIcon />
                      )}
                      {link.label}
                    </div>
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
}
