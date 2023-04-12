import { Header, Main } from "../component/Layout";
import Table from "../component/Table";
import React from "react";
import TableHead from "../component/Table/TableHead";
import TableBody from "../component/Table/TableBody";
import TableRow from "../component/Table/TableRow";
import useProjects from "./Projects/useProjects";
import LoadingIndicator from "../component/LoadingIndicator";

const Projects: React.FunctionComponent = () => {
  const { data, isLoading, isSuccess } = useProjects();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (!isSuccess || !data) {
    return <div>Something went wrong…</div>;
  }

  return (
    <>
      <Header>Projects</Header>
      <Main>
        <Table>
          <TableHead columns={["Name", "Email"]}></TableHead>
          <TableBody>
            {data.map((project) => (
              <TableRow
                key={project.id}
                columns={[project.name, project.description]}
              />
            ))}
          </TableBody>
        </Table>
      </Main>
    </>
  );
};

export default Projects;
