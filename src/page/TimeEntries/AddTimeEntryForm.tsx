import useProjects from "../Projects/useProjects";
import LoadingIndicator from "../../component/LoadingIndicator";
import { useForm } from "react-hook-form";
import Field from "../../component/Form/Field";
import Select from "../../component/Form/Select";
import Form from "../../component/Form";
import TimeEntry, { TimeEntrySchema } from "../../domain/TimeEntry";
import { v4 as uuidv4 } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import useAddTimeEntryMutation from "./useAddTimeEntryMutation";
import { useNavigate } from "react-router-dom";

const AddTimeEntryForm: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { addTimeEntry } = useAddTimeEntryMutation();
  const { data: projects } = useProjects();
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<TimeEntry>({
    resolver: zodResolver(TimeEntrySchema),
    defaultValues: {
      id: uuidv4(),
      date: format(new Date(), "yyyy-MM-dd"),
      startTime: format(new Date(), "HH:ii"),
    },
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    await addTimeEntry(data);
    navigate("/timeEntries");
  };

  if (!projects) {
    return <LoadingIndicator />;
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      disableSubmit={!isDirty || !isValid}
    >
      <Field label="Comment" {...register("comment")} />
      <Field label="Start Time" {...register("startTime")} />
      <Field label="End Time" {...register("endTime")} />
      <Field label="Date" {...register("date")} />
      <Select label="Project" {...register("projectId")}>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </Select>
    </Form>
  );
};

export default AddTimeEntryForm;
