import {useState,useRef,useEffect} from "react";

export default function Combo({setSlotA,setSlotB,setSlotC,setSlotD,setLockActivated,lockActivated}){
	const lockCover = useRef();
	const [positions,setPositions]=useState("");
	const [activePosition,setActivePosition]=useState(false);
	
	function activateLock(e){
		e.target.style.display="none";
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
  
	const options = {
	  rootMargin: '50px',
	  threshold: .5
	}

	const SlotAObserver = new IntersectionObserver(function(entries){
	  	entries.forEach((entry)=>{
	  		if(entry.isIntersecting) {
	  			setSlotA(`${entry.target.dataset.slotletter}${entry.target.dataset.numberposition}`);
	  		}
	  		//SlotAObserver.unobserve(entry.target);
	  	})
	 },options)
	const SlotBObserver = new IntersectionObserver(function(entries){
	  	entries.forEach((entry)=>{
	  		if(entry.isIntersecting) {
	  			setSlotB(`${entry.target.dataset.slotletter}${entry.target.dataset.numberposition}`);
	  		}
	  		//SlotBObserver.unobserve(entry.target);
	  	})
	 },options)
	const SlotCObserver = new IntersectionObserver(function(entries){
	  	entries.forEach((entry)=>{
	  		if(entry.isIntersecting) {
	  			setSlotC(`${entry.target.dataset.slotletter}${entry.target.dataset.numberposition}`);
	  		}
	  		//SlotCObserver.unobserve(entry.target);
	  	})
	 },options)
	const SlotDObserver = new IntersectionObserver(function(entries){
	  	entries.forEach((entry)=>{
	  		if(entry.isIntersecting) {
	  			setSlotD(`${entry.target.dataset.slotletter}${entry.target.dataset.numberposition}`);
	  		}
	  		//SlotDObserver.unobserve(entry.target);
	  	})
	 },options) 

	  slotATargets.forEach((i) => {  
	  	if(i){ SlotAObserver.observe(i); }
	  });
	  slotBTargets.forEach((i) => {  
	  	if(i){ SlotBObserver.observe(i); }
	  });
	  slotCTargets.forEach((i) => {  
	  	if(i){ SlotCObserver.observe(i); }
	  });
	  slotDTargets.forEach((i) => {  
	  	if(i){ SlotDObserver.observe(i); }
	  });
	  
	
	}, [slotATargets,slotBTargets,slotCTargets,slotDTargets]);

	




	return (<>
		<div className="combo-component">
		  <div id="slot-container-1" className="slot-container">
		    <div id="slotA-number-position-0" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="Zer0">0</div>
		    <div id="slotA-number-position-1" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="one">1</div>
		    <div id="slotA-number-position-2" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="2wo">2</div>
		    <div id="slotA-number-position-3" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="Thre3">3</div>
		    <div id="slotA-number-position-4" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="F0ur">4</div>
		    <div id="slotA-number-position-5" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="f1v3">5</div>
		    <div id="slotA-number-position-6" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="s1x">6</div>
		    <div id="slotA-number-position-7" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="SEv3n">7</div>
		    <div id="slotA-number-position-8" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="31ght">8</div>
		    <div id="slotA-number-position-9" ref={addSlotATargetRefs} className="number-position" data-slotletter="A" data-numberposition="Nine">9</div>
		  </div>
		  <div id="slot-container-2" className="slot-container">
		    <div id="slotB-number-position-0" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="Zer0">0</div>
		    <div id="slotB-number-position-1" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="one">1</div>
		    <div id="slotB-number-position-2" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="2wo">2</div>
		    <div id="slotB-number-position-3" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="Thre3">3</div>
		    <div id="slotB-number-position-4" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="F0ur">4</div>
		    <div id="slotB-number-position-5" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="f1v3">5</div>
		    <div id="slotB-number-position-6" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="s1x">6</div>
		    <div id="slotB-number-position-7" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="SEv3n">7</div>
		    <div id="slotB-number-position-8" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B" data-numberposition="31ght">8</div>
		    <div id="slotB-number-position-9" ref={addSlotBTargetRefs} className="number-position" data-slotletter="B"  data-numberposition="Nine9">9</div>
		  </div>
		  <div id="slot-container-3" className="slot-container">
		    <div id="slotC-number-position-0" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="Zer0">0</div>
		    <div id="slotC-number-position-1" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="one">1</div>
		    <div id="slotC-number-position-2" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="2wo">2</div>
		    <div id="slotC-number-position-3" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="Thre3">3</div>
		    <div id="slotC-number-position-4" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="F0ur">4</div>
		    <div id="slotC-number-position-5" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="f1v3">5</div>
		    <div id="slotC-number-position-6" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="s1x">6</div>
		    <div id="slotC-number-position-7" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="SEv3n">7</div>
		    <div id="slotC-number-position-8" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="31ght">8</div>
		    <div id="slotC-number-position-9" ref={addSlotCTargetRefs} className="number-position" data-slotletter="C" data-numberposition="Nine">9</div>
		  </div>
		  <div id="slot-container-4" className="slot-container">
		    <div id="slotD-number-position-0" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="Zer0">0</div>
		    <div id="slotD-number-position-1" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="one">1</div>
		    <div id="slotD-number-position-2" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="2wo">2</div>
		    <div id="slotD-number-position-3" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="Thre3">3</div>
		    <div id="slotD-number-position-4" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="F0ur">4</div>
		    <div id="slotD-number-position-5" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="f1v3">5</div>
		    <div id="slotD-number-position-6" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="s1x">6</div>
		    <div id="slotD-number-position-7" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="SEv3n">7</div>
		    <div id="slotD-number-position-8" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="31ght">8</div>
		    <div id="slotD-number-position-9" ref={addSlotDTargetRefs} className="number-position" data-slotletter="D" data-numberposition="Nine">9</div>
		  </div>
		  {(lockActivated)?null:<div id="lock-cover" ref={lockCover} onClick={activateLock} className="lock-cover">click to activate</div>}
		</div>


	</>)
}