import { Header, Main } from "../component/Layout";
import useTimeEntries from "./TimeEntries/useTimeEntries";
import LoadingIndicator from "../component/LoadingIndicator";
import { Outlet } from "react-router-dom";

const TimeEntries: React.FunctionComponent = () => {
  const { data, isSuccess, isLoading } = useTimeEntries();
  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (!isSuccess || !data) {
    return <div>Something went wrong…</div>;
  }
  return (
    <>
      <Header>Time Entries</Header>

      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default TimeEntries;
