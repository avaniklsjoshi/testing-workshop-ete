import { rest } from "msw";

const jsonServerProjectsErrorMockHandler = rest.get(
  "http://localhost:4712/projects",
  (req, res, context) => {
    return res(context.status(500), context.json([]));
  }
);

export default jsonServerProjectsErrorMockHandler;
