import { type NextPage } from "next";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
	const { data: sessionData } = useSession();
	return (
		<>
			<Head>
				<title>Code Crusaders</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="p-4">
				<button
					className="rounded border border-black bg-gray-200 p-2 transition duration-200 hover:bg-gray-300"
					onClick={() => (sessionData ? void signOut() : void signIn())}
				>
					{sessionData ? "Sign out" : "Sign in"}
				</button>
			</main>
		</>
	);
};

export default Home;
