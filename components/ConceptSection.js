import aboutSiteInfo from '../about-site-info';

export default function ConceptSection(){
	const concept = aboutSiteInfo.concept;
	
	return (<>
		<div className="concept-component">
			<h1 className="concept-title">Concept</h1>
			<div className="concept-text">{concept}</div>
		</div>
	</>)
}