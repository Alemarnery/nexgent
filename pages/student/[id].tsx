import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Text, Heading, Image, Button } from "grommet";
import Link from "next/link";
import { fetchStudent, Student as StudentType } from "../../services/students";

const Student = () => {
  const router = useRouter();
  const { id } = router.query;
  const [dataStudent, setDataStudent] = useState({});

  useEffect(() => {
    async function fetch() {
      const data = await fetchStudent(id as string);
      setDataStudent(data);
    }

    fetch();
  }, []);

  const { avatar, first_name, last_name, email, company, job } =
    dataStudent as StudentType;

  return (
    <Box
      direction="column"
      pad="medium"
      border={{ color: "brand", size: "large" }}
      style={{
        margin: "20px",
        flex: 1,
        justifyContent: "space-around",
        backgroundColor: "#fbf7f7",
      }}
      align="center"
    >
      <Box>
        <Heading>Personal Data</Heading>
      </Box>

      <Box
        height="small"
        width="small"
        direction="row"
        style={{ border: "2px solid black", borderRadius: "10px" }}
      >
        <Image fit="cover" src={avatar} />
      </Box>

      <Box direction="row" gap="small">
        <Text size="large" weight="bold">
          {first_name}
        </Text>
        <Text size="large" weight="bold">
          {last_name}
        </Text>
      </Box>

      <Box direction="row" gap="small">
        <Text>{email}</Text>
      </Box>

      <Box direction="row" gap="small">
        <Text>
          <strong>Company Name:</strong> {company}
        </Text>
      </Box>

      <Box direction="row" gap="small">
        <Text>
          <strong>Job Name:</strong> : {job}
        </Text>
      </Box>

      <Box direction="row" gap="small">
        <Link href="/">
          <Button primary label="Home" />
        </Link>
      </Box>
    </Box>
  );
};

export default Student;
