import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

function HomePage() {
  const [openDetails, setOpenDetails] = useState({
    collagenPlusDetails: false,
    lumispaDetails: false,
    wellspaDetails: false,
  });

  const handleToggleProductInfo = (productId) => {
    setOpenDetails(prevState => ({
      ...prevState,
      [productId]: !prevState[productId]
    }));
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Colageno es Salud | Productos de Colágeno para Bienestar y Belleza</title>
        <link rel="icon" type="image/jpg" href="/img/favicon.jpg" />
        
        {/* Meta etiquetas SEO */}
        <meta name="description" content="Descubre nuestra línea de productos de colágeno y dispositivos de belleza para mejorar tu salud, piel, articulaciones y bienestar general. Productos como Collagen+, Lumispa y ageLOC WellSpa iO." />
        <meta name="keywords" content="colágeno, suplementos de colágeno, Collagen+, Lumispa, ageLOC WellSpa iO, péptidos de colágeno, dispositivos de belleza, limpieza facial, bienestar corporal, salud, belleza, piel, articulaciones, rejuvenecimiento" />
        <meta name="author" content="Colageno es Salud" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://colagenoessalud.com/" />
        <meta property="og:title" content="Colageno es Salud | Productos naturales para tu bienestar" />
        <meta property="og:description" content="Productos naturales de colágeno para mejorar tu salud, piel, articulaciones y bienestar general." />
        <meta property="og:image" content="https://colagenoessalud.com/img/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://colagenoessalud.com/" />
        <meta property="twitter:title" content="Colageno es Salud | Productos naturales para tu bienestar" />
        <meta property="twitter:description" content="Productos naturales de colágeno para mejorar tu salud, piel, articulaciones y bienestar general." />
        <meta property="twitter:image" content="https://colagenoessalud.com/img/og-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://colagenoessalud.com/" />
        
        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </Head>

      <header>
        <div className="container">
          <a href="https://nskn.co/tLcWe9" className="header-link" target="_blank" rel="noopener noreferrer">
            <h1>Colageno es Salud</h1>
            <p className="tagline">Productos naturales para tu bienestar</p>
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Mejora tu salud con nuestros productos de colágeno</h2>
            <p>Descubre nuestra línea de productos naturales diseñados para mejorar tu bienestar y calidad de vida.</p>
            <div className="hero-buttons">
              <a href="#productos" className="btn btn-primary">Ver Productos Principales</a>
              <Link href="/otros-productos">
                <a className="btn btn-secondary">Ver Otros Productos</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="productos" className="products">
        <div className="container">
          <h2 className="section-title">Nuestros Productos Destacados</h2>
          <div className="product-showcase">
            {/* Producto 1: Collagen + */}
            <div className="product-item">
              <a href="https://nskn.co/tLcWe9" className="product-image" target="_blank" rel="noopener noreferrer">
                <img src="/img/collagenPlus.webp" alt="COLLAGEN + - Suplemento avanzado" />
              </a>
              <div className="product-info">
                <a href="https://nskn.co/tLcWe9" className="product-title" target="_blank" rel="noopener noreferrer">
                  <h3>COLLAGEN +</h3>
                </a>
                <p>Fórmula avanzada con péptidos de colágeno para una máxima absorción y resultados visibles.</p>
                <div className="product-buttons">
                  <a href="https://nskn.co/tLcWe9" className="btn-buy" target="_blank" rel="noopener noreferrer">Comprar ahora</a>
                  <Link href="/products/collagen-plus">
                    <a className="btn-secondary">Ver detalles</a>
                  </Link>
                  <button type="button" className="read-more-btn" onClick={() => handleToggleProductInfo('collagenPlusDetails')}>
                    {openDetails.collagenPlusDetails ? 'Leer menos...' : 'Leer más...'}
                  </button>
                </div>
                <div 
                  id="collagenPlusDetails" 
                  className={`more-details-content ${openDetails.collagenPlusDetails ? 'active' : ''}`} 
                  style={{ display: openDetails.collagenPlusDetails ? 'block' : 'none', marginTop: '1rem' }}
                >
                  <h4>CONOCE COLLAGEN+</h4>
                  <p><strong>¿Estás listo para conseguir resultados espectaculares?</strong></p>
                  <p>Ayuda a mejorar la producción de colágeno y elastina con Inner Focus Collagen+.</p>
                  <p><strong>¿Cómo?</strong></p>
                  <p>Cada porción proporciona 2,5 gramos de péptidos de colágeno. Se trata de nuestra mezcla patentada clínicamente probada con una combinación de beneficios que simplemente no podrás encontrar en ningún otro lugar.</p>
                  <p><strong>¿POR QUÉ TE VA A ENCANTAR COLLAGEN+?</strong></p>
                  <ul>
                    <li>Ayuda a aumentar la producción de colágeno y elastina.</li>
                    <li>Con certificación SCS de nivel I, para que sepas que los carotenoides se absorben y aumentan tu puntuación del escáner.</li>
                    <li>Elaborado sin colorantes, saborizantes ni edulcorantes artificiales.</li>
                    <li>Tiene un delicioso sabor natural a naranja.</li>
                  </ul>
                  <p><strong>¿QUÉ ACTIVA COLLAGEN+?</strong></p>
                  <ul>
                    <li>Péptidos de Colágeno Bioactivos— péptidos de colágeno de alta calidad con una "huella" peptídica única que ha demostrado contribuir en la estimulación de la producción de colágeno y elastina.</li>
                  </ul>
                  <p><strong>¿CÓMO USAR COLLAGEN+?</strong></p>
                  <p>Disfruta de una medida de Collagen+ al día. Conservar en un lugar fresco y seco.</p>
                  <p><small>Este producto no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad.</small></p>
                </div>
              </div>
            </div>

            {/* Producto 2: Lumispa */}
            <div className="product-item product-item-reverse">
              <a href="https://nskn.co/tLcWe9" className="product-image" target="_blank" rel="noopener noreferrer">
                <img src="/img/lumispa.avif" alt="Lumispa - Dispositivo de limpieza facial" />
              </a>
              <div className="product-info">
                <a href="https://nskn.co/tLcWe9" className="product-title" target="_blank" rel="noopener noreferrer">
                  <h3>Lumispa</h3>
                </a>
                <p>Dispositivo de limpieza facial profunda para una piel radiante y rejuvenecida.</p>
                <div className="product-buttons">
                  <a href="https://nskn.co/tLcWe9" className="btn-buy" target="_blank" rel="noopener noreferrer">Comprar ahora</a>
                  <Link href="/products/lumispa">
                    <a className="btn-secondary">Ver detalles</a>
                  </Link>
                  <button type="button" className="read-more-btn" onClick={() => handleToggleProductInfo('lumispaDetails')}>
                    {openDetails.lumispaDetails ? 'Leer menos...' : 'Leer más...'}
                  </button>
                </div>
                <div 
                  id="lumispaDetails" 
                  className={`more-details-content ${openDetails.lumispaDetails ? 'active' : ''}`} 
                  style={{ display: openDetails.lumispaDetails ? 'block' : 'none', marginTop: '1rem' }}
                >
                  <h4>CONOCE AGELOC LUMISPA IO</h4>
                  
                  <h5>¿CÓMO FUNCIONA AGELOC LUMISPA IO?</h5>
                  <p>Con su cabezal de tratamiento de silicona suave, la tecnología patentada de oscilación por micropulsos de ageLOC LumiSpa permite al dispositivo moverse a la frecuencia precisa para ayudar a promover la renovación de la piel, dando una apariencia más suave y tersa después de un solo uso. Al mismo tiempo, limpia de manera suave pero profunda la suciedad, la grasa, el maquillaje y las toxinas a través de su acción patentada de rotación inversa y purificación de poros, dejando la piel más suave y pura mientras reduce la apariencia de los poros.</p>

                  <h5>¿QUÉ HACE ÚNICO A AGELOC LUMISPA IO?</h5>
                  <p>A diferencia de los dispositivos de limpieza que se encuentran actualmente en el mercado, que tienen cepillos abrasivos o cabezales con cerdas, ageLOC LumiSpa iO cuenta con un cabezal de tratamiento de silicona suave y más higiénico que no daña la piel.</p>

                  <div className="benefits-list">
                    <div className="benefit-item">
                      <span className="icon">✨</span>
                      <p>ageLOC LumiSpa iO cuenta con la tecnología de oscilación por micropulsos para estimular la piel, tratarla y limpiarla con mayor eficacia y así brindar beneficios superiores de renovación de la piel.</p>
                    </div>
                    <div className="benefit-item">
                      <span className="icon">✨</span>
                      <p>ageLOC LumiSpa iO es un dispositivo de doble acción y ahorro de tiempo que ofrece un tratamiento superior para perfeccionar la piel y brinda beneficios de limpieza profunda al mismo tiempo.</p>
                    </div>
                    <div className="benefit-item">
                      <span className="icon">✨</span>
                      <p>ageLOC LumiSpa iO se conecta a la aplicación Nu Skin Vera® para optimizar tu proceso de cuidado de la piel con tratamientos personalizables, entrenamiento inteligente, premios y una cronología con selfies.</p>
                    </div>
                  </div>

                  <h5>¿QUÉ ES IoT Y QUÉ SIGNIFICA PARA MI AGELOC LUMISPA IO?</h5>
                  <p>IoT significa literalmente "internet de las cosas" u objetos físicos diseñados para conectarse. Para ti significa que ageLOC LumiSpa iO ahora incluye Bluetooth que permite que el dispositivo se conecte con la aplicación Nu Skin Vera® en tu teléfono. Esta nueva tecnología abre un nuevo mundo de posibilidades y experiencias.</p>
                  <p>Los sensores del dispositivo pueden detectar:</p>
                  <ul>
                    <li>Cuándo es el momento de reemplazar el cabezal de tratamiento</li>
                    <li>Cuándo se aplica demasiada presión</li>
                    <li>Cuándo se frota demasiado rápido durante la rutina</li>
                  </ul>
                  <p>También puedes guardar rutinas personalizadas entre tu dispositivo y Nu Skin Vera. Piensa en ello como una optimización para el cuidado de la piel.</p>
                </div>
              </div>
            </div>

            {/* Producto 3: ageLOC WellSpa iO */}
            <div className="product-item">
              <a href="https://nskn.co/tLcWe9" className="product-image" target="_blank" rel="noopener noreferrer">
                <img src="/img/ageLocWellSpaIO.jpeg" alt="ageLOC WellSpa iO - Bienestar y belleza" />
              </a>
              <div className="product-info">
                <a href="https://nskn.co/tLcWe9" className="product-title" target="_blank" rel="noopener noreferrer">
                  <h3>ageLOC WellSpa iO</h3>
                </a>
                <p>Sistema integrado para el bienestar corporal y la belleza de la piel.</p>
                <div className="product-buttons">
                  <a href="https://nskn.co/tLcWe9" className="btn-buy" target="_blank" rel="noopener noreferrer">Comprar ahora</a>
                  <Link href="/products/ageloc-wellspa-io">
                    <a className="btn-secondary">Ver detalles</a>
                  </Link>
                  <button type="button" className="read-more-btn" onClick={() => handleToggleProductInfo('wellspaDetails')}>
                    {openDetails.wellspaDetails ? 'Leer menos...' : 'Leer más...'}
                  </button>
                </div>
                <div 
                  id="wellspaDetails" 
                  className={`more-details-content ${openDetails.wellspaDetails ? 'active' : ''}`} 
                  style={{ display: openDetails.wellspaDetails ? 'block' : 'none', marginTop: '1rem' }}
                >
                  <h4>CONOCE AGELOC WELLSPA IO</h4>
                  
                  <p>ageLOC WellSpa iO ofrece beneficios para ayudar a tu cuerpo a sentirse en un estado más óptimo. Nuestro dispositivo de bienestar y belleza integrados personaliza tu tratamiento con los beneficios de un diseño innovador que ayuda a mejorar el aspecto de la piel, un estimulador de microcorriente y un instrumento para la recuperación de tu cuerpo antes y después del ejercicio, todo en uno.</p>

                  <div className="ageloc-features">
                    <div className="feature-item">
                      <img src="/img/ageLoc1.svg" alt="Tecnología de microcorriente adaptativa" />
                      <p>El dispositivo cuenta con tecnología de microcorriente adaptativa que se ajusta cómodamente a la piel en tiempo real.</p>
                    </div>
                    <div className="feature-item">
                      <img src="/img/ageLoc2.svg" alt="Aplicación IoT" />
                      <p>Una aplicación conectada a IoT que te ayuda a cumplir y superar tus objetivos.</p>
                    </div>
                    <div className="feature-item">
                      <img src="/img/ageLoc3.svg" alt="Productos ageLOC" />
                      <p>Sus productos ageLOC efectivamente formulados que producen resultados inmediatos que puedes ver y sentir.</p>
                    </div>
                    <div className="feature-item">
                      <img src="/img/ageLoc4.svg" alt="Dispositivo único" />
                      <p>Con todo esto y más, no existe ningún otro dispositivo como este en el mundo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2 className="section-title">Beneficios del Colágeno para tu Salud</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Mejora la Piel</h3>
              <p>Aumenta la elasticidad y reduce arrugas y líneas de expresión.</p>
            </div>
            <div className="benefit-item">
              <h3>Fortalece Articulaciones</h3>
              <p>Reduce dolores articulares y mejora la movilidad.</p>
            </div>
            <div className="benefit-item">
              <h3>Cabello y Uñas Fuertes</h3>
              <p>Promueve el crecimiento y fortalecimiento del cabello y uñas.</p>
            </div>
            <div className="benefit-item">
              <h3>Salud Digestiva</h3>
              <p>Ayuda a reparar el revestimiento intestinal y mejora la digestión.</p>
            </div>
          </div>
        </div>
      </section>

      <div id="footer-placeholder"></div>
    </>
  );
}

export default HomePage;
