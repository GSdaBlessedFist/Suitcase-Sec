import { useState } from "react";

export default function Test() {

    const [word, setWord] = useState("")
    function updateWord(e) {
        setWord(e.target.value)
    }

    return (<>
        <div style={{ display: "flex", width: "700px", height: "700px", border: "2px blue solid" }}>
            <svg width={700} height={700} x={100} y={100}>
                <rect width={500} height={500} x={100} y={100} fill="purple" />
                <text x="250" y="135" >{word}</text>
                {/* <foreignObject x={350} y={200} width={300} height={300}>
                    <h1>{word}</h1>
                </foreignObject> */}


            </svg>


        </div>
        <input type="text" onChange={updateWord} />
    </>)
}