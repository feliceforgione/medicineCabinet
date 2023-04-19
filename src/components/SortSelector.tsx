import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import React from "react";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSort: string;
}

function SortSelector({ onSelectSortOrder, selectedSort }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "title", label: "Title" },
    { value: "brand", label: "Brand" },
    { value: "-price", label: "Price - High to Low" },
    { value: "price", label: "Price - Low to High" },
  ];

  const selectedSortLabel = sortOrders.find(
    (sortItem) => sortItem.value === selectedSort
  )?.label;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Order by : ${selectedSortLabel || sortOrders[0].label}`}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortItem) => (
          <MenuItem
            onClick={() => onSelectSortOrder(sortItem.value)}
            key={sortItem.value}
            value={sortItem.value}
          >
            {sortItem.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
