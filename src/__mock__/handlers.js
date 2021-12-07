import { rest } from "msw";

const tokens = {
  access_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJiYTVhNmY4MC00MzAxLTExZWMtODEwMi0xNzc0OTAyMGY5NjYiLCJpYXQiOjE2Mzg2OTc3MjEsImV4cCI6MTYzODcwMTMyMX0.rQB7C8W5vD3mDlOYAq8JX6vOwMv0_gSECN3QHTwO_hU",
  refresh_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJiYTVhNmY4MC00MzAxLTExZWMtODEwMi0xNzc0OTAyMGY5NjYiLCJyZWZyZXNoIjp0cnVlLCJpYXQiOjE2Mzg2OTc3MjF9.jzJK5DJzuduufoVnojfO8Vnl4SDvBLQVU7V2OYgkpaE",
};

const patientProfile = {
  id: "b4030f70-4bc6-11ec-9a6e-b3b5e1a51f7b",
  first_name: "Dasha",
  last_name: "Bukina",
  photo:
    "https://reactlabapi.herokuapp.com/src/public/users/images/default.jpg",
  role_name: "Patient",
};

const handlers = [
  rest.post(
    `https://reactlabapi.herokuapp.com/api/auth/login`,
    (req, res, ctx) => {
      const { userName, password } = req.body;
      if (userName === "mango@a.com" && password === "asdasdasd") {
        return res(ctx.status(200), ctx.json(tokens));
      } else {
        return res(ctx.status(403), ctx.json("login error"));
      }
    }
  ),

  rest.get(
    `https://reactlabapi.herokuapp.com/api/auth/profile`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(patientProfile));
    }
  ),
];

export { handlers, rest };
