import { rest } from "msw";

const jsonServerProjectsSuccessMock = rest.get(
  "http://localhost:4712/projects",
  (req, res, context) => {
    return res(
      context.status(200),
      context.json([
        {
          id: "1",
          name: "iJS Conference",
          description:
            "From Angular and React to WebAssembly; from Progressive Web Apps to JAMstack",
        },
        {
          id: "2",
          name: "Javascript Days",
          description:
            "Die großen Trainingsevents für JavaScript, Angular, React und HTML & CSS",
        },
        {
          id: "3",
          name: "JAX",
          description:
            "Die Konferenzen für Java, Architektur- und Software-Innovation",
        },
      ])
    );
  }
);

export default jsonServerProjectsSuccessMock;
