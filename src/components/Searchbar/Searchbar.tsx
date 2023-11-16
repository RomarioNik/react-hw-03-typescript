import { useState } from "react";
import { Header, Form, Input, Button, Icon } from "./Searchbar.styled";
import { ISearchbarProps } from "./Searchbar.types";

export const Searchbar: React.FC<ISearchbarProps> = ({ onSubmit }) => {
  const [search, setSearch] = useState<string>("");

  const handleInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (search.trim() === "") {
      return;
    }

    onSubmit(search);
    setSearch("");
  };

  return (
    <Header>
      <Form onSubmit={handleSubmitForm}>
        <Button type="submit" $area-label="search picture">
          <Icon />
        </Button>
        <Input
          type="text"
          name="search"
          value={search}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};
