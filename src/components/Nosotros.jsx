import TextType from './TextType';

function Nosotros() {
  return (
    <div className="nosotros-section">
      {/* Header with TextType */}
      <div className="nosotros-header">
        <div className="nosotros-title-container">
          <TextType 
            text={["Bienvenidos a Café Luna", "Donde cada taza cuenta una historia", "Tu lugar favorito en Mérida"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="nosotros-text-type"
          />
        </div>
        <p className="nosotros-subtitle">
          Somos más que una cafetería, somos un espacio donde los sabores tradicionales se encuentran con la calidez yucateca
        </p>
      </div>

      {/* Main Content */}
      <div className="nosotros-content">
        <div className="nosotros-card">
          <div className="nosotros-card-icon">☕</div>
          <h3 className="nosotros-card-title">Nuestra Historia</h3>
          <p className="nosotros-card-text">
            Café Luna nació del sueño de crear un lugar especial en el corazón de Mérida, 
            donde cada visita sea una experiencia única. Desde 2015, hemos estado sirviendo 
            café de calidad y productos artesanales con el sabor auténtico de Yucatán.
          </p>
        </div>

        <div className="nosotros-card">
          <div className="nosotros-card-icon">🌿</div>
          <h3 className="nosotros-card-title">Nuestros Valores</h3>
          <p className="nosotros-card-text">
            Creemos en la calidad, la tradición y el servicio excepcional. Cada producto 
            que servimos está hecho con ingredientes frescos y locales, respetando las 
            recetas tradicionales mientras innovamos con nuevos sabores.
          </p>
        </div>

        <div className="nosotros-card">
          <div className="nosotros-card-icon">❤️</div>
          <h3 className="nosotros-card-title">Nuestra Misión</h3>
          <p className="nosotros-card-text">
            Crear momentos especiales para nuestros clientes a través de excelentes 
            productos, un ambiente acogedor y el servicio cálido que caracteriza a 
            la hospitalidad yucateca. Queremos ser tu segunda casa.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="nosotros-team">
        <h2 className="nosotros-team-title">Nuestro Equipo</h2>
        <p className="nosotros-team-description">
          Un equipo apasionado por el café, la panadería y hacer que cada visita sea memorable.
        </p>
      </div>

      {/* Footer Message */}
      <div className="nosotros-footer">
        <div className="nosotros-footer-content">
          <h2>🌟 ¡Te esperamos!</h2>
          <p>Ven y forma parte de nuestra familia. En Café Luna, cada cliente es especial.</p>
        </div>
      </div>
    </div>
  )
}

export default Nosotros

