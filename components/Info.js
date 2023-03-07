import {useEffect,useState} from "react";
import comments from "../comments.js";
import CodeButton from "./CodeButton";

export default function Info({loginProcessStep}){
	
	const info = comments.processComments[`${loginProcessStep}`];

	useEffect(()=>{
		
	},[])

	return (<>
		<div id="info-component" className="info-component">
			<div dangerouslySetInnerHTML={{ __html: info }} className="info-text"></div>
			<div className="bottom-spacer"></div>
			<div className="footer">
				<CodeButton/>
			</div>	
		</div>
		
	</>)
}