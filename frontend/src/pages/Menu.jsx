import './menu.css'

const Menu = () => {
  return (
    <div className="menu-container">
        
        <div className="menu">
          <h1>Explore Our Menu</h1>
          <div className="menuwrapper">
            <div className="menu_details">
                <div className="menu_descriptions">
                  <div>
                    <h2>Caffe Mocha</h2>
                  <p>saturated with milk, and whiped cream</p>
                  </div>
                  <div>
                    <h4>$4.05</h4>
                  </div>
                </div>
                <div className="menu_descriptions">
                  <div>
                    <h2>Caffe Americano </h2>
                  <p>light layer of cream, and whiped cream</p>
                  </div>
                  <div>
                    <h4>$6.05</h4>
                  </div>
                </div>
                <div className="menu_descriptions">
                  <div>
                    <h2>Vanilla latte</h2>
                  <p>saturated with milk, flavor cream</p>
                  </div>
                  <div>
                    <h4>$3.05</h4>
                  </div>
                </div>
                <div className="menu_descriptions">
                  <div>
                    <h2>Macchiato</h2>
                  <p>saturated with milk, and foam</p>
                  </div>
                  <div>
                    <h4>$4.05</h4>
                  </div>
                </div>
                <div className="menu_descriptions">
                  <div><h2>Cocoa</h2>
                  <p>saturated with milk, and whiped cream</p></div>
                  <div>
                    <h4>$4.05</h4>
                  </div>
                </div>
            </div>
            <div className="menu_details">
                <div className="menu_descriptions">
                  <div>
                    <h2>Cappuccino</h2>
                  <p>saturated with milk, and whiped cream</p>
                  </div>
                  <div>
                    <h4>$4.05</h4>
                  </div>
                </div>
                <div className="menu_descriptions">
                  <div>
                    <h2>Caffe_iced </h2>
                  <p>light layer of cream, and whiped cream</p>
                  </div>
                  <div>
                    <h4>$6.05</h4>
                  </div>
                </div>
                <div className="menu_descriptions">
                  <div>
                    <h2>Kenya special</h2>
                  <p>saturated with milk, flavor cream</p>
                  </div>
                  <div>
                    <h4>$3.67</h4>
                  </div>
                </div>
                <div className="menu_descriptions">
                  <div>
                    <h2>caramell macchiato</h2>
                  <p>saturated with milk, and foam</p>
                  </div>
                  <div>
                    <h4>$3.05</h4>
                  </div>
                </div>
                <div className="menu_descriptions">
                  <div><h2>iced_smoked latte</h2>
                  <p>saturated with milk, and whiped cream</p></div>
                  <div>
                    <h4>$4.65</h4>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="desc">
            <h3>Kill your day with coffee😋</h3>
            <p>Take Away are also availble...</p>
        </div>

    </div>
  )
}

export default Menu