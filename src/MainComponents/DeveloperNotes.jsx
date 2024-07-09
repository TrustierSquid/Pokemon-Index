import { useRef } from "react";


export default function DeveloperNotes() {
  let original = useRef()
  let tech = useRef()
  
  
  let showTech = ()=> {
    original.current.classList.toggle('visibility')
  }

  return <>
    <section id="developersNote">
        <h1>Developers Note</h1>
        <br />
        <ul id="links">
          <li onClick={showTech}>Technologies Used</li>
        </ul>
        <br />
        <br />
        <p className="visibility" ref={original}>This index will not show every pokemon of every types. Just the well known ones.
          only to demonstrate skills SSR (Server Side Rendering) and React.js.
          Thanks for viewing!
        </p>
        <br />
    </section>
  </>;
}
