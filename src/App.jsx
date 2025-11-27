import { useState } from 'react'
import './App.css'
import Inicio from './components/Inicio'
import Bebidas from './components/Bebidas'
import Panaderia from './components/Panaderia'
import Postres from './components/Postres'
import Ubicacion from './components/Ubicacion'
import Nosotros from './components/Nosotros'

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
          <a 
            href="#" 
            className="navbar-logo"
            onClick={(e) => {
              e.preventDefault()
              setActiveLink('inicio')
              setShowSidebar(false)
            }}
          >
            <span className="sr-only">homepage</span>
            <img src="/cafeluna.png" alt="Cafe Luna" className="logo-image" />
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
              setShowSidebar(false)
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
            className={`navbar-link ${activeLink === 'bebidas' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveLink('bebidas')
              setShowSidebar(false)
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
                d="M10 2a3 3 0 0 0-3 3v1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1V5a3 3 0 0 0-3-3ZM8 5a2 2 0 1 1 4 0v1H8V5Zm-1 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7Z"
                clipRule="evenodd"
              />
              <path d="M7 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-3Z" />
            </svg>
            <span>Bebidas</span>
          </a>

          <a
            href="#"
            className={`navbar-link ${activeLink === 'panaderia' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveLink('panaderia')
              setShowSidebar(false)
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="link-icon"
              aria-hidden="true"
            >
              <path d="M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM5 4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4Zm9 10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-1h10v1Zm-1.5-10a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 13.5 4h-1Z" />
            </svg>
            <span>Panadería</span>
          </a>

          <a
            href="#"
            className={`navbar-link ${activeLink === 'postres' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveLink('postres')
              setShowSidebar(false)
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
                d="M10 2a3 3 0 0 0-3 3v1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1V5a3 3 0 0 0-3-3ZM8 5a2 2 0 1 1 4 0v1H8V5Zm-1 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7Z"
                clipRule="evenodd"
              />
              <path d="M7 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-3Z" />
            </svg>
            <span>Postres</span>
          </a>

          <a
            href="#"
            className={`navbar-link ${activeLink === 'ubicacion' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveLink('ubicacion')
              setShowSidebar(false)
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
              setShowSidebar(false)
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
        {activeLink === 'inicio' && <Inicio />}
        {activeLink === 'bebidas' && <Bebidas />}
        {activeLink === 'panaderia' && <Panaderia />}
        {activeLink === 'postres' && <Postres />}
        {activeLink === 'ubicacion' && <Ubicacion />}
        {activeLink === 'nosotros' && <Nosotros />}
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
