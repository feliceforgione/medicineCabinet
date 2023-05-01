import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useProductQueryStore from "../services/productQueryStore";

function SortSelector() {
  const { sortOrder, setSortOrder } = useProductQueryStore();
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "title", label: "Title" },
    { value: "brand", label: "Brand" },
    { value: "-price", label: "Price - High to Low" },
    { value: "price", label: "Price - Low to High" },
  ];

  const selectedSortLabel = sortOrders.find(
    (sortItem) => sortItem.value === sortOrder
  )?.label;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Order by : ${selectedSortLabel || sortOrders[0].label}`}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortItem) => (
          <MenuItem
            onClick={() => setSortOrder(sortItem.value)}
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
