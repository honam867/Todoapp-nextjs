import Head from "next/head";
import Fork from "../components/fork";
import Navbar from "../components/navbar";
import ToDo from "../components/todo";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <ToDo></ToDo>
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch("https://github.com/jackipro/RaoVatMienPhi.git");
//   const json = await res.json();

//   return {
//     props: {
//       stars: json.stargazers_count,
//     },
//   };
// }
