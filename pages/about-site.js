import {useEffect,useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import aboutSiteInfo from '../about-site-info';
import ConceptSection from "../components/ConceptSection";
import ChallengeSection from "../components/ChallengeSection";
import ChallengeInfoSection from "../components/ChallengeInfoSection";
import CodeButton from "../components/CodeButton";

export default function AboutSite(){
	const [challenge,setChallenge]=useState("")
	const challenges = aboutSiteInfo.challenges;

	useEffect(()=>{

	},[challenge])
	return (<>
		<Navbar/>
		<main className="main-section">
          <section className="about-stage">
              <div className="about-stage--grid">
              	<div className="about-stage--grid_concept">
              		<ConceptSection/>
              	</div>

              	<div className="about-stage--grid_challengedescription">
	              	<ChallengeInfoSection challenge={challenge}/>
              	</div>

              	<div className="about-stage--grid_challengeslist">
	              	<ChallengeSection challenges={challenges} setChallenge={setChallenge} challenge={challenge}/>	
		              
              	</div>
              			
              </div>
              	
          </section>
        </main>
	</>)
}