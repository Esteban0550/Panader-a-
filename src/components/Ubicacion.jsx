function Ubicacion() {
  return (
    <div className="ubicacion-section">
      {/* Header */}
      <div className="ubicacion-header">
        <h1 className="ubicacion-title">📍 Encuéntranos</h1>
        <p className="ubicacion-subtitle">Visítanos en nuestra cafetería y disfruta de un ambiente acogedor</p>
      </div>

      {/* Main Content */}
      <div className="ubicacion-content">
        {/* Info Cards */}
        <div className="ubicacion-info">
          <div className="info-card-ubicacion">
            <div className="info-icon">📍</div>
            <h3 className="info-title">Dirección</h3>
            <p className="info-text">
              Calle 60 #456<br />
              Centro Histórico<br />
              Mérida, Yucatán 97000
            </p>
          </div>

          <div className="info-card-ubicacion">
            <div className="info-icon">🕐</div>
            <h3 className="info-title">Horarios</h3>
            <p className="info-text">
              Lunes - Viernes: 7:00 AM - 8:00 PM<br />
              Sábados: 8:00 AM - 9:00 PM<br />
              Domingos: 9:00 AM - 7:00 PM
            </p>
          </div>

          <div className="info-card-ubicacion">
            <div className="info-icon">📞</div>
            <h3 className="info-title">Contacto</h3>
            <p className="info-text">
              Teléfono: (555) 123-4567<br />
              Email: contacto@cafeluna.com<br />
              WhatsApp: +52 555 123 4567
            </p>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mapa-container">
          <div className="mapa-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.38368488504!2d-89.62456128459364!3d20.96737008611111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56715ca126c5a5%3A0x8c2c5b5b5b5b5b5b!2sCentro%20Hist%C3%B3rico%2C%20M%C3%A9rida%2C%20Yuc.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Café Luna en Mérida, Yucatán"
              className="mapa-iframe"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="ubicacion-footer">
        <div className="ubicacion-footer-content">
          <h2>🚗 Estacionamiento disponible</h2>
          <p>Contamos con estacionamiento gratuito para nuestros clientes. ¡Te esperamos!</p>
        </div>
      </div>
    </div>
  )
}

export default Ubicacion

