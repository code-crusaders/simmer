import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./header.module.scss";

export default function Header() {
	const { data: sessionData } = useSession();
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>LOGO</div>

			<button className={styles.button} onClick={() => (sessionData ? void signOut() : void signIn())}>
				{sessionData ? "Sign out" : "Sign in"}
			</button>

			<div className={styles.profile}></div>
		</nav>
	);
}