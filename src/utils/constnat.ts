export const userAvatar: string =
  "https://static.vecteezy.com/system/resources/previews/038/368/085/non_2x/ai-generated-3d-illustration-a-cute-astronaut-character-on-isolated-transparent-background-generated-with-ai-png.png";

export const apiKey = "6d640b0b304852d8d386c0866d31b101";

export const API_Read_Access_Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDY0MGIwYjMwNDg1MmQ4ZDM4NmMwODY2ZDMxYjEwMSIsIm5iZiI6MTczMTA1OTc4My41NDc2MDYyLCJzdWIiOiI2NzJkZDBjNmY3MDJkNDNlZWE4NTFhNzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zKpEec3OmOr6f8f7GViiKe4tqlvqLN1EuAuKbLQq1g0";

export const ApiOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_Read_Access_Token}`,
  },
};

// fetch(
//   "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
//   options
// )
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
