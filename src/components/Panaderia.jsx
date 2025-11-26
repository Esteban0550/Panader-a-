import { useState } from 'react'

function Panaderia() {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const categorias = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'panes', nombre: 'Panes' },
    { id: 'dulces', nombre: 'Dulces' },
    { id: 'salados', nombre: 'Salados' },
    { id: 'especiales', nombre: 'Especiales' }
  ]

  const productos = [
    {
      id: 1,
      nombre: 'Pan Integral',
      categoria: 'panes',
      precio: '$4.50',
      descripcion: 'Pan artesanal con granos enteros',
      imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      nombre: 'Croissant',
      categoria: 'dulces',
      precio: '$3.00',
      descripcion: 'Hojaldre dorado y mantecoso',
      imagen: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      nombre: 'Pan de Ajo',
      categoria: 'salados',
      precio: '$5.50',
      descripcion: 'Delicioso pan con mantequilla de ajo',
      imagen: '/panajo.jpg'
    },
    {
      id: 4,
      nombre: 'Baguette',
      categoria: 'panes',
      precio: '$3.50',
      descripcion: 'Pan francés tradicional crujiente',
      imagen: '/baguette.jpg'
    },
    {
      id: 5,
      nombre: 'Donas',
      categoria: 'dulces',
      precio: '$2.50',
      descripcion: 'Donas glaseadas de diferentes sabores',
      imagen: '/dona.jpg'
    },
    {
      id: 6,
      nombre: 'Empanadas',
      categoria: 'salados',
      precio: '$6.00',
      descripcion: 'Empanadas recién horneadas',
      imagen: '/empanadas.jpg'
    },
    {
      id: 7,
      nombre: 'Pan de Muerto',
      categoria: 'especiales',
      precio: '$7.00',
      descripcion: 'Pan tradicional mexicano',
      imagen: '/pandemuerto.jpg'
    },
    {
      id: 8,
      nombre: 'Rosca de Reyes',
      categoria: 'especiales',
      precio: '$25.00',
      descripcion: 'Rosca tradicional con frutas',
      imagen: '/roscadereyes.jpg'
    },
    {
      id: 9,
      nombre: 'Muffins',
      categoria: 'dulces',
      precio: '$3.50',
      descripcion: 'Muffins caseros de varios sabores',
      imagen: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=400&fit=crop'
    },
    {
      id: 10,
      nombre: 'Pan de Elote',
      categoria: 'dulces',
      precio: '$4.00',
      descripcion: 'Pan dulce de maíz tradicional',
      imagen: '/pandeelote.jpg'
    },
    {
      id: 11,
      nombre: 'Pizza Pan',
      categoria: 'salados',
      precio: '$5.00',
      descripcion: 'Pan de pizza artesanal',
      imagen: '/pizzapan.jpg'
    },
    {
      id: 12,
      nombre: 'Conchas',
      categoria: 'dulces',
      precio: '$2.00',
      descripcion: 'Pan dulce mexicano tradicional',
      imagen: '/conchas.jpg'
    }
  ]

  const productosFiltrados = selectedCategory === 'todos' 
    ? productos 
    : productos.filter(p => p.categoria === selectedCategory)

  return (
    <div className="panaderia-section">
      {/* Hero Section */}
      <div className="panaderia-hero">
        <div className="hero-content">
          <h1 className="panaderia-main-title">Panadería Artesanal</h1>
          <p className="panaderia-subtitle">Pan recién horneado todos los días con ingredientes naturales</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="panaderia-filters">
        {categorias.map(categoria => (
          <button
            key={categoria.id}
            className={`filter-button ${selectedCategory === categoria.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(categoria.id)}
          >
            {categoria.nombre}
          </button>
        ))}
      </div>

      {/* Products Grid - Different Layout */}
      <div className="panaderia-products">
        {productosFiltrados.map((producto, index) => (
          <div 
            key={producto.id} 
            className={`product-card ${index % 3 === 0 ? 'featured' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="product-image-wrapper">
              <img 
                src={producto.imagen} 
                alt={producto.nombre} 
                className="product-image"
                loading="lazy"
              />
              <div className="product-overlay">
                <span className="product-price-badge">{producto.precio}</span>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{producto.nombre}</h3>
              <p className="product-description">{producto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Info Banner */}
      <div className="panaderia-banner">
        <div className="banner-content">
          <h2>🍞 Horneamos todos los días</h2>
          <p>Nuestro pan se prepara fresco cada mañana desde las 5:00 AM usando recetas tradicionales y los mejores ingredientes locales.</p>
        </div>
      </div>
    </div>
  )
}

export default Panaderia

