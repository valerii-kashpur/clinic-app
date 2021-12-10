import { rest } from "msw";

const tokens = {
  access_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJiYTVhNmY4MC00MzAxLTExZWMtODEwMi0xNzc0OTAyMGY5NjYiLCJpYXQiOjE2Mzg4OTg2MTMsImV4cCI6MTYzODkwMjIxM30.2Xb6bo_6utKtASsVxygi8GgbV5RTZJnkUvl8KMFTJGY",
  refresh_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJiYTVhNmY4MC00MzAxLTExZWMtODEwMi0xNzc0OTAyMGY5NjYiLCJyZWZyZXNoIjp0cnVlLCJpYXQiOjE2Mzg4OTg2MTN9.sdPFHBf4i5MAUMb0VpQb9_MhY-QrbdRdlavKkeTijEg",
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
  rest.post(
    `https://reactlabapi.herokuapp.com/api/auth/registration`,
    (req, res, ctx) => {
      const { userName, password, firstName, lastName } = req.body;
      if (
        firstName === "mango121212" &&
        lastName === "mango121212" &&
        userName === "mango@a.com" &&
        password === "asdasdasd"
      ) {
        return res(ctx.status(201), ctx.json(tokens));
      } else {
        return res(ctx.status(409), ctx.json("registration error"));
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
