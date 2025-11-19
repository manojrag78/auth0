import { getOpenApiUser } from "../api/actions";

export default async function Page() {
  const user = await getOpenApiUser();
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
