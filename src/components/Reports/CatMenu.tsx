import { Menu } from "@mantine/core";
import { BiChevronDown } from "react-icons/bi";

export function CatMenu() {
  return (
    <Menu shadow="md" width={130}>
      <Menu.Target>
        <button className="inline-flex items-center border font-semibold px-5 rounded-md">
          Category <BiChevronDown />
        </button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>All</Menu.Label>
        <Menu.Item>Low</Menu.Item>
        <Menu.Item>Medium</Menu.Item>
        <Menu.Item>High</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
