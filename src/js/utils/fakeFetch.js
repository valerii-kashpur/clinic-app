import { Server } from "miragejs";

new Server({
  routes() {
    this.namespace = "api";
    this.post("/auth/", () => {
      return `status: 201`;
    });
  },
});

export const fetchData = (data) => {
  fetch("/api/auth/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
      }
  })
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((json) => buildList(json));
};

function buildList(data) {
  console.log(data);
}
