import { Box, TextInput } from "grommet";
import React, { useEffect, useState } from "react";
import UserCard from "../components/user.card";
import { fetchStudents, Student } from "../services/students";

type Props = {};

const Main: React.FC<Props> = ({}) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetch() {
      const data = await fetchStudents();

      setStudents(data);
    }

    if (students.length === 0) {
      fetch();
    }
  });

  console.log("students:", students);

  //crear un state
  //anexar todos los estudiantes en el state
  //buscar dentro del state con like, para el buscador

  const onChangeHandler = (event: any) => {
    // TODO
    //Buscador
  };

  return (
    <Box direction="column" pad="medium" height="100%" overflow="auto">
      <TextInput placeholder="type here" value="" onChange={onChangeHandler} />
      <Box direction="row" wrap={true}>
        {students.map((s) => (
          <Box margin="10px">
            <UserCard user={s} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Main;
