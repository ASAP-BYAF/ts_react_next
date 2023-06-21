async function getProjects() {
  const res = await fetch("https://worldtimeapi.org/api/ip", {
    next: { revalidate: 60 },
  });
  const projects = await res.json();

  return projects;
}

export default async function Dashboard() {
  const projects = (await getProjects()) as { [env: string]: string };

  return (
    <ul>
      <li>{projects.datetime}</li>
    </ul>
  );
}
