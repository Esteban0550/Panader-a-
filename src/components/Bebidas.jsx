function Bebidas() {
  return (
    <div className="bebidas-section">
      <h1 className="bebidas-title">Nuestras Bebidas Más Vendidas</h1>
      
      {/* Bebidas destacadas */}
      <div className="bebidas-grid">
        <div className="bebida-card">
          <div className="bebida-image-container">
            <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop" alt="Café Espresso" className="bebida-image" />
            <div className="bebida-badge">Más Vendido</div>
          </div>
          <h3 className="bebida-name">Café Espresso</h3>
        </div>

        <div className="bebida-card">
          <div className="bebida-image-container">
            <img src="/capuchino.jpg" alt="Cappuccino" className="bebida-image" />
          </div>
          <h3 className="bebida-name">Cappuccino</h3>
        </div>

        <div className="bebida-card">
          <div className="bebida-image-container">
            <img src="/caramelo.jpg" alt="Caramelo" className="bebida-image" />
          </div>
          <h3 className="bebida-name">Caramelo</h3>
        </div>

        <div className="bebida-card">
          <div className="bebida-image-container">
            <img src="/mocha.jpg" alt="Mocha" className="bebida-image" />
          </div>
          <h3 className="bebida-name">Mocha</h3>
        </div>
      </div>

      {/* Menú de texto */}
      <div className="bebidas-menu">
        <h2 className="menu-title">Menú Completo</h2>
        
        <div className="menu-category">
          <h3 className="category-title">Cafés Calientes</h3>
          <div className="menu-items">
            <div className="menu-item">
              <span className="item-name">Espresso</span>
              <span className="item-price">$2.50</span>
            </div>
            <div className="menu-item">
              <span className="item-name">Americano</span>
              <span className="item-price">$3.00</span>
            </div>
            <div className="menu-item">
              <span className="item-name">Cappuccino</span>
              <span className="item-price">$3.50</span>
            </div>
            <div className="menu-item">
              <span className="item-name">Latte</span>
              <span className="item-price">$4.00</span>
            </div>
            <div className="menu-item">
              <span className="item-name">Mocha</span>
              <span className="item-price">$4.50</span>
            </div>
            <div className="menu-item">
              <span className="item-name">Macchiato</span>
              <span className="item-price">$3.75</span>
            </div>
          </div>
        </div>

        <div className="menu-category">
          <h3 className="category-title">Bebidas Frías</h3>
          <div className="menu-items">
            <div className="menu-item">
              <span className="item-name">Iced Coffee</span>
              <span className="item-price">$3.50</span>
            </div>
            <div className="menu-item">
              <span className="item-name">Cold Brew</span>
              <span className="item-price">$4.00</span>
            </div>
            <div className="menu-item">
              <span className="item-name">Frappé</span>
              <span className="item-price">$5.00</span>
            </div>
            <div className="menu-item">
              <span className="item-name">Smoothie</span>
              <span className="item-price">$5.50</span>
            </div>
          </div>
        </div>

        <div className="menu-category">
          <h3 className="category-title">Tés e Infusiones</h3>
          <div className="menu-items">
            <div className="menu-item">
              <span className="item-name">Té Verde</span>
              <span className="item-price">$2.75</span>
            </div>
            <div className="menu-item">
              <span className="item-name">Té Negro</span>
              <span className="item-price">$2.75</span>
            </div>
            <div className="menu-item">
              <span className="item-name">Té de Hierbas</span>
              <span className="item-price">$3.00</span>
            </div>
            <div className="menu-item">
              <span className="item-name">Chai Latte</span>
              <span className="item-price">$4.25</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bebidas

