import { createContext, useState } from "react";

export const LoggedInContext = createContext(null);

function LoginProvider({ children }) {
	const [loggedIn, setLoggedIn] = useState();

	return (
		<LoggedInContext.Provider value={{loggedIn, setLoggedIn}}>
			{children}
		</LoggedInContext.Provider>
	);
}
export default LoginProvider;