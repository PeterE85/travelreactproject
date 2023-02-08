import React from "react"
import Navbar from "./components/Navbar"


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <h1>casin</h1>
    </div>
  )
}

export default App


// import React from "react"
// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import Card from "./components/Card"
// import data from "./data"

// export default function App() {
//     const cards = data.map(item => {
//         return (
//             <Card
//                 key={item.id}
//                 item={item}
//             />
//         )
//     })        
    
//             // <Hero />
//     return (
//         <div>
//             <Navbar />
//             <section className="cards-list">
//                 {cards}
//             </section>
//         </div>
//     )
// }