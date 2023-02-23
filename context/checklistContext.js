import { createContext, useState } from "react";

export const ChecklistContext = createContext(null);

function ChecklistProvider({ children }) {
	const [checklistStatuses, setChecklistStatuses] = useState({
		noEmailnoPIN:true,
		invalidEmail:false,
		newAccountFail:false,
		emailNotFound:false,
		incorrectEmailPIN:false,
		validEmail:false,
		newAccountSuccess:false,
		authenticated:false,
		signedIn:false,
		signedOut:true
	});

	return (
		<ChecklistContext.Provider value={{checklistStatuses, setChecklistStatuses}}>
			{children}
		</ChecklistContext.Provider>
	);
}
export default ChecklistProvider;