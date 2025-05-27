import Head from 'next/head';
import Link from 'next/link';

function CollagenPlusPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>COLLAGEN+ | Colageno es Salud</title>
        <link rel="icon" type="image/jpg" href="/img/favicon.jpg" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </Head>

      <header>
        <div className="container">
          <Link href="/">
            <a className="header-link">
              <h1>Colageno es Salud</h1>
              <p className="tagline">Productos naturales para tu bienestar</p>
            </a>
          </Link>
        </div>
      </header>

      <section className="product-detail">
        <div className="container">
          <div className="product-header">
            <div className="product-image">
              <img src="/img/collagenPlus.webp" alt="COLLAGEN+ - Suplemento avanzado" />
            </div>
            <div className="product-info">
              <h2>COLLAGEN+</h2>
              <p className="product-description">Fórmula avanzada con péptidos de colágeno para una máxima absorción y resultados visibles.</p>
              <div className="product-buttons">
                <a href="https://nskn.co/tLcWe9" className="btn-buy" target="_blank" rel="noopener noreferrer">Comprar ahora</a>
                <Link href="/">
                  <a className="btn-secondary">Volver al inicio</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="product-content">
            <section className="product-section">
              <h3>¿QUÉ ES EL COLÁGENO?</h3>
              <div className="info-grid">
                <div className="info-card">
                  <i className="fas fa-dna"></i>
                  <h4>Proteína Estructural</h4>
                  <p>El colágeno es una importante proteína estructural que se encuentra en la piel, los huesos, los músculos, los tendones, los ligamentos y los cartílagos.</p>
                </div>
                <div className="info-card">
                  <i className="fas fa-chart-line"></i>
                  <h4>Pérdida Natural</h4>
                  <p>En la edad adulta, el cuerpo produce aproximadamente un 1.5% menos de colágeno cada año, y su producción puede verse inhibida por factores como la luz solar.</p>
                </div>
                <div className="info-card">
                  <i className="fas fa-sync-alt"></i>
                  <h4>Doble Acción</h4>
                  <p>Mientras que el colágeno normal proporciona los componentes básicos, los péptidos de colágeno estimulan la producción natural de colágeno en tu piel.</p>
                </div>
                <div className="info-card">
                  <i className="fas fa-arrow-up"></i>
                  <h4>Mayor Absorción</h4>
                  <p>Los péptidos de colágeno son más digeribles, se absorben mejor y se distribuyen mejor por todo el cuerpo que el colágeno tradicional.</p>
                </div>
              </div>
            </section>

            <section className="product-section">
              <h3>¿POR QUÉ SON ESPECIALES LOS PÉPTIDOS DE COLLAGEN+?</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <i className="fas fa-fingerprint"></i>
                  <h4>Huella Única</h4>
                  <p>Nuestros péptidos presentan un perfil muy específico que los hace más bioactivos y sistemáticamente más eficaces.</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-flask"></i>
                  <h4>Composición Precisa</h4>
                  <p>La clave está en la composición general de los péptidos, donde cada porcentaje está cuidadosamente balanceado.</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-double"></i>
                  <h4>Calidad Garantizada</h4>
                  <p>Cada lote se somete a pruebas exhaustivas para garantizar la consistencia de la huella peptídica.</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-chart-bar"></i>
                  <h4>Máxima Eficacia</h4>
                  <p>Pequeñas variaciones en la composición pueden alterar drásticamente la bioactividad, por eso mantenemos estándares rigurosos.</p>
                </div>
              </div>
            </section>

            <section className="product-section">
              <h3>¿POR QUÉ TE VA A ENCANTAR COLLAGEN+?</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <h4>Producción Mejorada</h4>
                  <p>Ayuda a aumentar la producción de colágeno y elastina.</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-certificate"></i>
                  <h4>Certificación</h4>
                  <p>Con certificación SCS de nivel I, para que sepas que los carotenoides se absorben y aumentan tu puntuación del escáner.</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-leaf"></i>
                  <h4>Natural</h4>
                  <p>Elaborado sin colorantes, saborizantes ni edulcorantes artificiales.</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-glass-cheers"></i>
                  <h4>Sabor Delicioso</h4>
                  <p>Tiene un delicioso sabor natural a naranja.</p>
                </div>
              </div>
            </section>

            <section className="product-section">
              <h3>¿CÓMO USAR COLLAGEN+?</h3>
              <p>Disfruta de una medida de Collagen+ al día. Conservar en un lugar fresco y seco.</p>
              <p className="disclaimer"><small>Este producto no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad.</small></p>
            </section>

            <section className="product-section">
              <h3>INFORMACIÓN NUTRICIONAL</h3>
              <div className="nutritional-info-container">
                <img src="/img/collagenPlusInformaciónNutricional.png" alt="Información Nutricional de COLLAGEN+" />
              </div>
            </section>
          </div>
        </div>
      </section>

      <div id="footer-placeholder"></div>
    </>
  );
}

export default CollagenPlusPage;
