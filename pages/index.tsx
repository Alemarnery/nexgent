import { Box, TextInput } from "grommet";
import React, { useEffect, useState } from "react";
import UserCard from "../components/user.card";
import { fetchStudents, Student } from "../services/students";

type Props = {};

const Main: React.FC<Props> = ({}) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    console.log("Inicio useEffect Inicial");
    async function fetch() {
      const data = await fetchStudents();
      setStudents(data);
      setFilteredStudents(data);
    }

    fetch();
    console.log("Fin useEffect Inicial");
  }, []);

  useEffect(() => {
    const result = filteredStudents.filter(
      (student) =>
        student.first_name.toLowerCase().includes(searchValue) ||
        student.last_name.toLowerCase().includes(searchValue)
    );

    setStudents(result);
  }, [searchValue]);

  const onChangeHandler = (event: any) => {
    const searchTerm = event.target.value;
    setSearchValue(searchTerm.toLowerCase());
  };

  return (
    <Box direction="column" pad="medium" height="100%" overflow="auto">
      <TextInput
        placeholder="type here"
        value={searchValue}
        onChange={onChangeHandler}
      />
      <Box direction="row" wrap={true}>
        {students.map((s, i) => (
          <Box key={i} margin="10px">
            <UserCard user={s} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Main;
