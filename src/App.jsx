import { useState } from 'react'
import './App.css'
import TextPressure from './components/TextPressure'

function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeLink, setActiveLink] = useState('inicio')

  return (
    <div className="app-container">
      {/* Skip to main content link for screen readers */}
      <a className="sr-only" href="#main-content">
        skip to the main content
      </a>

      {/* Dark overlay for when sidebar is open on smaller screens */}
      {showSidebar && (
        <div
          className="sidebar-overlay"
          onClick={() => setShowSidebar(false)}
          aria-hidden="true"
        />
      )}

      {/* Top Navigation Bar */}
      <nav
        className={`top-navbar ${showSidebar ? 'navbar-open' : ''}`}
        aria-label="navigation"
      >
        <div className="navbar-content">
          {/* Logo */}
          <a href="#" className="navbar-logo">
            <span className="sr-only">homepage</span>
            <span className="logo-text">Aca tu logo</span>
          </a>

          {/* Search */}
          <div className="search-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              className="search-icon"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="search"
              className="search-input"
              name="search"
              aria-label="Search"
              placeholder="Search"
            />
          </div>

          {/* Navigation Links */}
          <div className="navbar-links">
          <a
            href="#"
            className={`navbar-link ${activeLink === 'inicio' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveLink('inicio')
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="link-icon"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Inicio</span>
            {activeLink === 'inicio' && <span className="sr-only">active</span>}
          </a>

          <a
            href="#"
            className={`navbar-link ${activeLink === 'panaderia' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveLink('panaderia')
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="link-icon"
              aria-hidden="true"
            >
              <path d="M10 2a3 3 0 0 0-3 3v1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1V5a3 3 0 0 0-3-3Z" />
              <path d="M13 9a1 1 0 0 1 1 1v4a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1h6Z" />
            </svg>
            <span>Panadería</span>
          </a>

          <a
            href="#"
            className={`navbar-link ${activeLink === 'bebidas' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveLink('bebidas')
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="link-icon"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM5 4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4Zm9 10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-1h10v1Zm-1.5-10a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 13.5 4h-1Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Bebidas</span>
          </a>

          <a
            href="#"
            className={`navbar-link ${activeLink === 'ubicacion' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveLink('ubicacion')
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="link-icon"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9ZM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Ubicación</span>
          </a>

          <a
            href="#"
            className={`navbar-link ${activeLink === 'nosotros' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveLink('nosotros')
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="link-icon"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Nosotros</span>
          </a>
        </div>
        </div>
      </nav>

      {/* Main Content */}
      <div id="main-content" className="main-content">
        {activeLink === 'inicio' && (
          <>
            <div style={{ position: 'relative', height: '300px', marginTop: '2rem' }}>
              <TextPressure
                text="Bienvenido!"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#6b4e3d"
                strokeColor="#d4a5a5"
                minFontSize={36}
              />
            </div>

            {/* Cards Section */}
            <div className="cards-container">
              <div className="info-card">
                <div className="card-icon">🍞</div>
                <h3 className="card-title">Panadería Fresca</h3>
                <p className="card-description">
                  Pan recién horneado todos los días con ingredientes de la más alta calidad
                </p>
              </div>

              <div className="info-card">
                <div className="card-icon">☕</div>
                <h3 className="card-title">Café Artesanal</h3>
                <p className="card-description">
                  Granos seleccionados y tostados a la perfección para el mejor sabor
                </p>
              </div>

              <div className="info-card">
                <div className="card-icon">🍰</div>
                <h3 className="card-title">Postres Caseros</h3>
                <p className="card-description">
                  Deliciosos postres hechos con amor y recetas tradicionales
                </p>
              </div>

              <div className="info-card">
                <div className="card-icon">🌿</div>
                <h3 className="card-title">Ambiente Acogedor</h3>
                <p className="card-description">
                  Un espacio cálido y relajante para disfrutar de tus momentos especiales
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Toggle button for small screen */}
      <button
        className="navbar-toggle"
        onClick={() => setShowSidebar(!showSidebar)}
        aria-label="navigation toggle"
      >
        {showSidebar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="toggle-icon"
            aria-hidden="true"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="toggle-icon"
            aria-hidden="true"
          >
            <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2z" />
          </svg>
        )}
        <span className="sr-only">sidebar toggle</span>
      </button>
    </div>
  )
}

export default App
