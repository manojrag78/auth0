"use server";

export async function getOpenApiUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
}
