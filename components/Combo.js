import {useState,useRef,useEffect} from "react";

export default function Combo(){
	
	const [positions,setPositions] = useState([]);
	const [activePosition,setActivePosition]=useState(false);

	const options = {
	  rootMargin: '50px',
	  threshold: .5
	}

	const slotATargetRefs = useRef([]);
	      slotATargetRefs.current = [];
	const slotATargets = slotATargetRefs.current;
	function addSlotATargetRefs(el){
	    if (el && !slotATargets.includes(el)) {
	      slotATargets.push(el);
	    }
	};

	const slotBTargetRefs = useRef([]);
	      slotBTargetRefs.current = [];
	const slotBTargets = slotBTargetRefs.current;
	function addSlotBTargetRefs(el){
	    if (el && !slotBTargets.includes(el)) {
	      slotBTargets.push(el);
	    }
	};

	const slotCTargetRefs = useRef([]);
	      slotCTargetRefs.current = [];
	const slotCTargets = slotCTargetRefs.current;
	function addSlotCTargetRefs(el){
	    if (el && !slotCTargets.includes(el)) {
	      slotCTargets.push(el);
	    }
	};

	const slotDTargetRefs = useRef([]);
	      slotDTargetRefs.current = [];
	const slotDTargets = slotDTargetRefs.current;
	function addSlotDTargetRefs(el){
	    if (el && !slotDTargets.includes(el)) {
	      slotDTargets.push(el);
	    }
	};

	
	useEffect(() => {

	  const observer = new IntersectionObserver(function(entries){
	  	entries.forEach((entry)=>{
	  		if(entry.isIntersecting) {
	  			
	  		}
	  		console.log(positions)
	  		//observer.unobserve(entry.target);
	  	})
	  },options)
	  	

	  slotATargets.forEach((i) => {  
	  	if(i){
	  		observer.observe(i);
	  	}
	  });
	  slotBTargets.forEach((i) => {  
	  	if(i){
	  		observer.observe(i);
	  	}
	  });
	  slotCTargets.forEach((i) => {  
	  	if(i){
	  		observer.observe(i);
	  	}
	  });
	  slotDTargets.forEach((i) => {  
	  	if(i){
	  		observer.observe(i);
	  	}
	  });
	  
	}, []);






	return (<>
		<div className="combo-component">
		  <div id="slot-container-1" className="slot-container">
		    <div id="slotA-number-position-0" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="0">0</div>
		    <div id="slotA-number-position-1" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="1">1</div>
		    <div id="slotA-number-position-2" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="2">2</div>
		    <div id="slotA-number-position-3" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="3">3</div>
		    <div id="slotA-number-position-4" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="4">4</div>
		    <div id="slotA-number-position-5" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="5">5</div>
		    <div id="slotA-number-position-6" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="6">6</div>
		    <div id="slotA-number-position-7" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="7">7</div>
		    <div id="slotA-number-position-8" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="8">8</div>
		    <div id="slotA-number-position-9" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="9">9</div>
		  </div>
		  <div id="slot-container-2" className="slot-container">
		    <div id="slotB-number-position-0" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="0">0</div>
		    <div id="slotB-number-position-1" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="1">1</div>
		    <div id="slotB-number-position-2" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="2">2</div>
		    <div id="slotB-number-position-3" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="3">3</div>
		    <div id="slotB-number-position-4" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="4">4</div>
		    <div id="slotB-number-position-5" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="5">5</div>
		    <div id="slotB-number-position-6" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="6">6</div>
		    <div id="slotB-number-position-7" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="7">7</div>
		    <div id="slotB-number-position-8" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="8">8</div>
		    <div id="slotB-number-position-9" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B"  data-numberposition="9">9</div>
		  </div>
		  <div id="slot-container-3" className="slot-container">
		    <div id="slotC-number-position-0" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="0">0</div>
		    <div id="slotC-number-position-1" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="1">1</div>
		    <div id="slotC-number-position-2" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="2">2</div>
		    <div id="slotC-number-position-3" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="3">3</div>
		    <div id="slotC-number-position-4" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="4">4</div>
		    <div id="slotC-number-position-5" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="5">5</div>
		    <div id="slotC-number-position-6" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="6">6</div>
		    <div id="slotC-number-position-7" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="7">7</div>
		    <div id="slotC-number-position-8" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="8">8</div>
		    <div id="slotC-number-position-9" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="9">9</div>
		  </div>
		  <div id="slot-container-4" className="slot-container">
		    <div id="slotD-number-position-0" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="0">0</div>
		    <div id="slotD-number-position-1" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="1">1</div>
		    <div id="slotD-number-position-2" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="2">2</div>
		    <div id="slotD-number-position-3" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="3">3</div>
		    <div id="slotD-number-position-4" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="4">4</div>
		    <div id="slotD-number-position-5" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="5">5</div>
		    <div id="slotD-number-position-6" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="6">6</div>
		    <div id="slotD-number-position-7" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="7">7</div>
		    <div id="slotD-number-position-8" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="8">8</div>
		    <div id="slotD-number-position-9" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="9">9</div>
		  </div>
		</div>


	</>)
}