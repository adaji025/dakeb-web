import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { DeactivateIcon, EditIcon, MoreIcon, ResetIcon } from "../../Svgs";
import { BsTicketDetailed } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type tableProps = {
  tableId: string;
  open: () => void;
};

const links = [
  { label: "Update" },
  { label: "Reset password" },
  { label: "User details" },
  { label: "Deactivate" },
];

export default function DropDownMenu({ open }: tableProps) {
  const navigate = useNavigate()
  const handleBtnClick = (index: number) => {
    index === 2 && navigate("/users/user-details")
    index === 3 && open();
  };
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
            {links.map((link, index) => (
              <Menu.Item key={link.label} as={Fragment}>
                {() => (
                  <a
                    className={`cursor-pointer whitespace-nowrap`}
                    onClick={() => handleBtnClick(index)}
                  >
                    <div className="flex items-center gap-2">
                      {index === 0 ? (
                        <EditIcon />
                      ) : index === 1 ? (
                        <ResetIcon />
                      ) : index === 2 ? (
                        <BsTicketDetailed color="grey" />
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
