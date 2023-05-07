import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (ref.current) {
      console.log(ref.current.value);
      const searchTerms = ref.current.value;
      ref.current.value = "";
      navigate(`/products/?search=${searchTerms}`);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          variant={"filled"}
          placeholder="Search..."
        />
        ;
      </InputGroup>
    </form>
  );
}

export default SearchInput;
