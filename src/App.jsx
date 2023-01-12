
import NavBar from './components/navbar';
import Hero from './components/Hero';
import Card from './components/Card'
import data from './data';
import './styles/App.css';
const dataArray=data.map((items)=>{
  return <Card 
  id={items.id}
  image={items.image}
  ratings={items.ratings}
  country={items.country}
  quotes={items.quotes}
  price={items.price}
  />
})
function App() {
  return (
    <div className="con">
 <NavBar />
 <Hero />
 <div>
 {dataArray}
 </div>
    </div>
  )
  }
export default App
