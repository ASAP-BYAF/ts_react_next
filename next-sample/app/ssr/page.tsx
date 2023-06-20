// const timsStamp = () => {
//   return new Promise((resolve) => {
//     const timestamp = new Date();
//     const message = `${timestamp} に getStaticProps が実行されました。`;
//     setTimeout(() => {
//       resolve(message);
//     }, 2000);
//   });
// };

// async function getData() {
//   const res = await timsStamp();
//   return res;
// }

// export default async function Page() {
//   const message: string = (await getData()) as string;

//   return <div>{message}</div>;
// }

async function getProjects() {
  const res = await fetch("https://worldtimeapi.org/api/ip", {
    cache: "no-store",
  });
  const projects = await res.json();

  return projects;
}

export default async function Dashboard() {
  const projects = (await getProjects()) as { [env: string]: string };
  console.log(projects);

  return (
    <ul>
      <li>{projects.datetime}</li>
    </ul>
  );
}
