import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

function OtrosProductosPage() {
  const productIds = ['product1', 'product2', 'product3', 'product4', 'product5', 'product6', 'product7', 'product8'];

  // Refs for description paragraphs (for "Leer más")
  const descRefs = productIds.reduce((acc, id) => {
    acc[id] = useRef(null);
    return acc;
  }, {});

  // Refs for product cards (for scroll animation)
  const cardRefs = productIds.reduce((acc, id) => {
    acc[id] = useRef(null);
    return acc;
  }, {});

  // State for "Leer más" functionality
  const [expandedState, setExpandedState] = useState({});
  const [showReadMore, setShowReadMore] = useState({});

  // State for card visibility (scroll animation)
  const [cardVisibility, setCardVisibility] = useState({});

  // Effect for "Leer más" (calculating if button is needed)
  useEffect(() => {
    const newShowReadMore = {};
    productIds.forEach(id => {
      const pElement = descRefs[id].current;
      if (pElement && pElement.scrollHeight > pElement.clientHeight) {
        newShowReadMore[id] = true;
      } else {
        newShowReadMore[id] = false;
      }
    });
    setShowReadMore(newShowReadMore);
  }, []); // Runs once on mount

  // Effect for scroll-triggered card animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use dataset.productId which we are setting below
            setCardVisibility((prev) => ({ ...prev, [entry.target.dataset.productId]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    productIds.forEach(id => {
      const cardElement = cardRefs[id].current;
      if (cardElement) {
        cardElement.dataset.productId = id; // Store ID on the element for the observer
        observer.observe(cardElement);
      }
    });

    return () => { // Cleanup observer on component unmount
      productIds.forEach(id => {
        const cardElement = cardRefs[id].current;
        if (cardElement) {
          observer.unobserve(cardElement);
        }
      });
    };
    // productIds and cardRefs are stable as they are defined in component scope
    // and not as props or state. If they were, they'd need to be in dependency array.
  }, [productIds, cardRefs]); 

  const handleToggleReadMore = (productId) => {
    setExpandedState(prevState => ({
      ...prevState,
      [productId]: !prevState[productId]
    }));
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Otros Productos - Colageno es Salud</title>
        <link rel="icon" type="image/jpg" href="/img/favicon.jpg" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
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

      <div className="page-header">
        <div className="container">
          <h1>Nuestra Gama de Otros Productos</h1>
          <Link href="/">
            <a className="back-link-center">
              <i className="fas fa-arrow-left"></i> Volver al Inicio
            </a>
          </Link>
        </div>
      </div>

      <main className="container">
        <div className="products-grid-other">
          {/* Producto 1: Cuidado Bucal */}
          <div 
            className={`product-card ${cardVisibility.product1 ? 'product-card-visible' : 'product-card-hidden'}`} 
            ref={cardRefs.product1}
          >
            <img src="/img/cuidadoBucal.jpg" alt="Cuidado Bucal AP 24" />
            <div className="product-info">
              <h3>Cuidado Bucal AP 24</h3>
              <div className="description-container">
                <p className={`product-description ${expandedState.product1 ? 'expanded' : ''}`} ref={descRefs.product1}>
                  Los productos de cuidado oral de Nu Skin proporcionan una sensación limpia y fresca de larga duración. Nuestros productos AP 24 están diseñados para promover un cuidado bucal superior ya que cubren diversas necesidades de higiene dental como limpieza, antiplaca y ayudan a proteger los dientes y a prevenir las caries.
                </p>
              </div>
              {showReadMore.product1 && (
                <button 
                  type="button" 
                  className="read-more-btn" 
                  onClick={() => handleToggleReadMore('product1')}
                  style={{ display: 'block' }}
                >
                  {expandedState.product1 ? 'Leer menos' : 'Leer más'}
                </button>
              )}
              <a href="https://nskn.co/tLcWe9" className="btn-buy-now" target="_blank" rel="noopener noreferrer">Comprar ahora</a>
            </div>
          </div>

          {/* Producto 2: G3 Suplemento */}
          <div 
            className={`product-card ${cardVisibility.product2 ? 'product-card-visible' : 'product-card-hidden'}`} 
            ref={cardRefs.product2}
          >
            <img src="/img/g3.png" alt="G3 Suplemento Antioxidante" />
            <div className="product-info">
              <h3>G3 Suplemento Antioxidante</h3>
              <div className="description-container">
                <p className={`product-description ${expandedState.product2 ? 'expanded' : ''}`} ref={descRefs.product2}>
                  ¿Quieres ayudar a reforzar la cantidad de antioxidantes que ingieres en tu dieta cotidiana? Agrega G3 (1 botella) a una Suscripción mensual y disfruta de sus increíbles beneficios: no contiene azúcar añadido, su color anaranjado es natural, pues proviene de los carotenoides que contiene y su efecto en la influencia de la medición de carotenoides con el Escáner Biofotónico ha sido comprobado.
                </p>
              </div>
              {showReadMore.product2 && (
                <button 
                  type="button" 
                  className="read-more-btn" 
                  onClick={() => handleToggleReadMore('product2')}
                  style={{ display: 'block' }}
                >
                  {expandedState.product2 ? 'Leer menos' : 'Leer más'}
                </button>
              )}
              <a href="https://nskn.co/tLcWe9" className="btn-buy-now" target="_blank" rel="noopener noreferrer">Comprar ahora</a>
            </div>
          </div>

          {/* Producto 3: Nu Colour Lash + Brow Serum */}
          <div 
            className={`product-card ${cardVisibility.product3 ? 'product-card-visible' : 'product-card-hidden'}`} 
            ref={cardRefs.product3}
          >
            <img src="/img/colourLash.png" alt="Nu Colour Lash + Brow Serum" />
            <div className="product-info">
              <h3>Nu Colour Lash + Brow Serum</h3>
              <div className="description-container">
                <p className={`product-description ${expandedState.product3 ? 'expanded' : ''}`} ref={descRefs.product3}>
                  ¿Quieres unas pestañas y cejas impresionantes? Entonces tienes que probar Nu Colour Lash + Brow Serum. Nuestra fórmula te dará unas pestañas y cejas visiblemente más largas, más gruesas, más pobladas, más brillantes y con aspecto más sano, todo en uno en tan sólo cuatro semanas. Consigue el tuyo hoy mismo y logra unas pestañas y cejas que dejarán boquiabiertos a todos.
                </p>
              </div>
              {showReadMore.product3 && (
                <button 
                  type="button" 
                  className="read-more-btn" 
                  onClick={() => handleToggleReadMore('product3')}
                  style={{ display: 'block' }}
                >
                  {expandedState.product3 ? 'Leer menos' : 'Leer más'}
                </button>
              )}
              <a href="https://nskn.co/tLcWe9" className="btn-buy-now" target="_blank" rel="noopener noreferrer">Comprar ahora</a>
            </div>
          </div>

          {/* Producto 4: NaPCA Moisture Mist */}
          <div 
            className={`product-card ${cardVisibility.product4 ? 'product-card-visible' : 'product-card-hidden'}`} 
            ref={cardRefs.product4}
          >
            <img src="/img/naPCA.png" alt="NaPCA Moisture Mist" />
            <div className="product-info">
              <h3>NaPCA Moisture Mist</h3>
              <div className="description-container">
                <p className={`product-description ${expandedState.product4 ? 'expanded' : ''}`} ref={descRefs.product4}>
                  Lleno de ingredientes que conservan de forma natural la hidratación como el NaPCA, el ácido hialurónico y la urea, esta fórmula mantiene su piel con una sensación de frescura. Este spray refrescante también es ideal para el cuerpo y el cabello. NaPCA Moisture Mist está recomendado para hombres, mujeres y niños que vivan en entornos secos o cálidos y húmedos.<br /><br />El ácido hialurónico mejora la capacidad de la piel para retener la humedad.<br />Aumenta el nivel de hidratación, dándole a su piel una sensación de tersura y flexibilidad, y dejando su cabello suave y sedoso.<br />Le protege frente a los efectos dañinos del viento, la contaminación del aire y otros factores ambientales, que pueden reesecar el pelo.<br />Puede usarlo para fijar su maquillaje.<br />Sin perfume.<br />Sometido a pruebas de alergia dermatológica.
                </p>
              </div>
              {showReadMore.product4 && (
                <button 
                  type="button" 
                  className="read-more-btn" 
                  onClick={() => handleToggleReadMore('product4')}
                  style={{ display: 'block' }}
                >
                  {expandedState.product4 ? 'Leer menos' : 'Leer más'}
                </button>
              )}
              <a href="https://nskn.co/tLcWe9" className="btn-buy-now" target="_blank" rel="noopener noreferrer">Comprar ahora</a>
            </div>
          </div>

          {/* Producto 5: Galvanic Face Spa Essentials */}
          <div 
            className={`product-card ${cardVisibility.product5 ? 'product-card-visible' : 'product-card-hidden'}`} 
            ref={cardRefs.product5}
          >
            <img src="/img/galvanicFaceSpa.webp" alt="Galvanic Face Spa Essentials" />
            <div className="product-info">
              <h3>Galvanic Face Spa Essentials</h3>
              <div className="description-container">
                <p className={`product-description ${expandedState.product5 ? 'expanded' : ''}`} ref={descRefs.product5}>
                  Revitaliza tu piel en sólo 5 minutos con 2 sencillos pasos. Con el Sistema Galvanic Face Spa Essentials tienes todo lo que necesitas para tu rutina facial en casa. Las corrientes galvánicas de la Galvanic Spa impulsan los ingredientes de los Geles Faciales de manera profunda en tu piel, ayudando a reducir las líneas de expresión y arrugas para revelar una apariencia más firme, levantada, contorneada y luminosa.
                </p>
              </div>
              {showReadMore.product5 && (
                <button 
                  type="button" 
                  className="read-more-btn" 
                  onClick={() => handleToggleReadMore('product5')}
                  style={{ display: 'block' }}
                >
                  {expandedState.product5 ? 'Leer menos' : 'Leer más'}
                </button>
              )}
              <a href="https://nskn.co/tLcWe9" className="btn-buy-now" target="_blank" rel="noopener noreferrer">Comprar ahora</a>
            </div>
          </div>

          {/* Producto 6: Day Dream Protective Cream */}
          <div 
            className={`product-card ${cardVisibility.product6 ? 'product-card-visible' : 'product-card-hidden'}`} 
            ref={cardRefs.product6}
          >
            <img src="/img/dayDream.webp" alt="Day Dream Protective Cream" />
            <div className="product-info">
              <h3>Day Dream Protective Cream</h3>
              <div className="description-container">
                <p className={`product-description ${expandedState.product6 ? 'expanded' : ''}`} ref={descRefs.product6}>
                  Empieza a vivir tu sueño de tener una gran piel con la crema Day Dream Protective Cream. Esta fórmula con FPS 35 es una crema que ayuda a que tu piel se mantenga suave e hidratada sin importar lo que la vida le depare.
                </p>
              </div>
              {showReadMore.product6 && (
                <button 
                  type="button" 
                  className="read-more-btn" 
                  onClick={() => handleToggleReadMore('product6')}
                  style={{ display: 'block' }}
                >
                  {expandedState.product6 ? 'Leer menos' : 'Leer más'}
                </button>
              )}
              <a href="https://nskn.co/tLcWe9" className="btn-buy-now" target="_blank" rel="noopener noreferrer">Comprar ahora</a>
            </div>
          </div>

          {/* Producto 7: Epoch Polishing Bar */}
          <div 
            className={`product-card ${cardVisibility.product7 ? 'product-card-visible' : 'product-card-hidden'}`} 
            ref={cardRefs.product7}
          >
            <img src="/img/epochPolishingBar.webp" alt="Epoch Polishing Bar" />
            <div className="product-info">
              <h3>Epoch Polishing Bar</h3>
              <div className="description-container">
                <p className={`product-description ${expandedState.product7 ? 'expanded' : ''}`} ref={descRefs.product7}>
                  Exfolia tu piel mientras la limpia. Contiene barro marino Glacial Marine Mud y sisku'pas (corteza molida), usada por una tribu nativo-americana del Noroeste del Pacífico para suavizar la piel, este profundo limpiador integral, libre de jabón, limpia efectivamente mientras ayuda a exfoliar las células muertas brindando una sensación de tersura y limpieza.
                </p>
              </div>
              {showReadMore.product7 && (
                <button 
                  type="button" 
                  className="read-more-btn" 
                  onClick={() => handleToggleReadMore('product7')}
                  style={{ display: 'block' }}
                >
                  {expandedState.product7 ? 'Leer menos' : 'Leer más'}
                </button>
              )}
              <a href="https://nskn.co/tLcWe9" className="btn-buy-now" target="_blank" rel="noopener noreferrer">Comprar ahora</a>
            </div>
          </div>

          {/* Producto 8: Kit Promocional */}
          <div 
            className={`product-card ${cardVisibility.product8 ? 'product-card-visible' : 'product-card-hidden'}`} 
            ref={cardRefs.product8}
          >
            <img src="/img/kitPromocional.webp" alt="Kit Promocional" />
            <div className="product-info">
              <h3>Kit Promocional</h3>
              <div className="description-container">
                <p className={`product-description ${expandedState.product8 ? 'expanded' : ''}`} ref={descRefs.product8}>
                  KIT PROMOCIONAL
                </p>
              </div>
              {showReadMore.product8 && (
                <button 
                  type="button" 
                  className="read-more-btn" 
                  onClick={() => handleToggleReadMore('product8')}
                  style={{ display: 'block' }}
                >
                  {expandedState.product8 ? 'Leer menos' : 'Leer más'}
                </button>
              )}
              <a href="https://nskn.co/tLcWe9" className="btn-buy-now" target="_blank" rel="noopener noreferrer">Comprar ahora</a>
            </div>
          </div>
        </div>
      </main>

      <div id="footer-placeholder"></div>
    </>
  );
}

export default OtrosProductosPage;
