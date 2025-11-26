import { useState } from 'react'

function Postres() {
  const [hoveredId, setHoveredId] = useState(null)

  const postres = [
    {
      id: 1,
      nombre: 'Pastel de Chocolate',
      precio: '$8.50',
      descripcion: 'Pastel de chocolate belga con crema batida',
      imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
      destacado: true
    },
    {
      id: 2,
      nombre: 'Cheesecake',
      precio: '$7.00',
      descripcion: 'Cheesecake cremoso con frutos rojos',
      imagen: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=400&fit=crop',
      destacado: false
    },
    {
      id: 3,
      nombre: 'Tiramisú',
      precio: '$6.50',
      descripcion: 'Postre italiano tradicional con café',
      imagen: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop',
      destacado: false
    },
    {
      id: 4,
      nombre: 'Flan Napolitano',
      precio: '$4.50',
      descripcion: 'Flan casero con caramelo',
      imagen: '/flannapolitano.jpg',
      destacado: false
    },
    {
      id: 5,
      nombre: 'Brownie',
      precio: '$5.00',
      descripcion: 'Brownie de chocolate con nueces',
      imagen: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop',
      destacado: false
    },
    {
      id: 6,
      nombre: 'Pay de Limón',
      precio: '$5.50',
      descripcion: 'Pay de limón con merengue tostado',
      imagen: '/paylimon.jpg',
      destacado: false
    },
    {
      id: 7,
      nombre: 'Gelatina de Mosaico',
      precio: '$3.50',
      descripcion: 'Gelatina de mosaico con frutas',
      imagen: '/gelatina.jpg',
      destacado: false
    },
    {
      id: 8,
      nombre: 'Tres Leches',
      precio: '$6.00',
      descripcion: 'Pastel tres leches tradicional',
      imagen: '/tresleches.jpg',
      destacado: true
    }
  ]

  return (
    <div className="postres-section">
      {/* Header */}
      <div className="postres-header">
        <h1 className="postres-title">🍰 Nuestros Postres</h1>
        <p className="postres-subtitle">Dulces tentaciones hechas con amor y los mejores ingredientes</p>
      </div>

      {/* Postres List - Horizontal Cards */}
      <div className="postres-container">
        {postres.map((postre, index) => (
          <div
            key={postre.id}
            className={`postre-card ${postre.destacado ? 'featured-postre' : ''} ${index % 2 === 0 ? 'reverse' : ''}`}
            onMouseEnter={() => setHoveredId(postre.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="postre-image-container">
              <img
                src={postre.imagen}
                alt={postre.nombre}
                className="postre-image"
                loading="lazy"
              />
              {postre.destacado && (
                <div className="postre-badge">⭐ Destacado</div>
              )}
              {hoveredId === postre.id && (
                <div className="postre-overlay">
                  <span className="postre-price-overlay">{postre.precio}</span>
                </div>
              )}
            </div>
            <div className="postre-content">
              <div className="postre-header-content">
                <h3 className="postre-name">{postre.nombre}</h3>
                <span className="postre-price">{postre.precio}</span>
              </div>
              <p className="postre-description">{postre.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Banner */}
      <div className="postres-footer">
        <div className="postres-footer-content">
          <h2>💝 Endulza tu día</h2>
          <p>Todos nuestros postres se preparan diariamente con ingredientes frescos y recetas tradicionales. ¡Ven y disfruta de un momento dulce!</p>
        </div>
      </div>
    </div>
  )
}

export default Postres

