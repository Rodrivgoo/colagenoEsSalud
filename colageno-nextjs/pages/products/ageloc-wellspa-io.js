import Head from 'next/head';
import Link from 'next/link';

function AgelocWellspaIoPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ageLOC WellSpa iO - Bienestar y Belleza | Colageno es Salud</title>
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
              <img src="/img/ageLocWellSpaIO.jpeg" alt="ageLOC WellSpa iO - Bienestar y belleza" />
            </div>
            <div className="product-info">
              <h2>ageLOC WellSpa iO</h2>
              <p className="product-description">Sistema integrado para el bienestar corporal y la belleza de la piel.</p>
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
              <h3>DESCRIPCIÓN</h3>
              <p>ageLOC WellSpa iO ofrece beneficios para ayudar a tu cuerpo a sentirse en un estado más óptimo. Nuestro dispositivo de bienestar y belleza integrados personaliza tu tratamiento con los beneficios de un diseño innovador que ayuda a mejorar el aspecto de la piel, un estimulador de microcorriente y un instrumento para la recuperación de tu cuerpo antes y después del ejercicio, todo en uno.</p>
            </section>

            <section className="product-section">
              <h3>CARACTERÍSTICAS PRINCIPALES</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <img src="/img/ageLoc1.svg" alt="Tecnología de microcorriente adaptativa" />
                  <h4>Tecnología Adaptativa</h4>
                  <p>El dispositivo cuenta con tecnología de microcorriente adaptativa que se ajusta cómodamente a la piel en tiempo real.</p>
                </div>
                <div className="feature-item">
                  <img src="/img/ageLoc2.svg" alt="Aplicación IoT" />
                  <h4>Aplicación IoT</h4>
                  <p>Una aplicación conectada a IoT que te ayuda a cumplir y superar tus objetivos.</p>
                </div>
                <div className="feature-item">
                  <img src="/img/ageLoc3.svg" alt="Productos ageLOC" />
                  <h4>Productos Efectivos</h4>
                  <p>Sus productos ageLOC efectivamente formulados que producen resultados inmediatos que puedes ver y sentir.</p>
                </div>
                <div className="feature-item">
                  <img src="/img/ageLoc4.svg" alt="Dispositivo único" />
                  <h4>Diseño Único</h4>
                  <p>Con todo esto y más, no existe ningún otro dispositivo como este en el mundo.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <div id="footer-placeholder"></div>
    </>
  );
}

export default AgelocWellspaIoPage;
