import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home ">
      <div className="hc">
          <div className="home-img">
              
          </div>
         <div className='home-description'>
            <h1>Welcome To <span>HIGHLAND</span> Cafe</h1>
            <p>
              It is really captivating in how a way, coffee are everything and you can imagine and our shop help you see everything you couldn't 
              have imagined!!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, sint magni dignissimos fugit nemo sit iusto dolore corporis ullam earum, est delectus voluptates iure accusamus. Perspiciatis natus nihil cupiditate laborum.
            </p>
            <Link to='/booking'><button class="btn-book">Book a Table</button></Link>   
         </div>
      </div>
      
    </div>
      
    
  )
}

export default Home