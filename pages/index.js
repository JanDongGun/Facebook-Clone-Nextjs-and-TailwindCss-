import { getSession } from "next-auth/client";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import SideBar from "../components/SideBar";

export default function Home({ session }) {
  if (!session) {
    return <Login />;
  }

  return (
    <div className="h-screen overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      {/* Header */}
      <Header session={session} />

      <main className="flex">
        {/* Sidebar */}
        <SideBar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
