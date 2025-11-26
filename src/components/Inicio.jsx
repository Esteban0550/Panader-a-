import TextPressure from './TextPressure'

function Inicio() {
  return (
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
  )
}

export default Inicio

