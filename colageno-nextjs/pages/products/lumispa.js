import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

function LumispaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const openModal = (imageSrc) => {
    setIsModalOpen(true);
    setModalImageSrc(imageSrc);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc('');
  };

  const handleModalBackdropClick = (e) => {
    // Check if the click is directly on the modal backdrop
    if (e.target.id === 'imageModal') {
      closeModal();
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lumispa - Limpieza Facial | Colageno es Salud</title>
        <link rel="icon" type="image/jpg" href="/img/favicon.jpg" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </Head>

      <style jsx global>{`
        .results-grid {
            display: flex; /* Cambiado de grid a flex */
            flex-direction: column; /* Apila los items verticalmente */
            gap: 30px; /* Espacio entre los items de resultado */
        }

        .results-grid .result-item a.image-link {
            display: block;
            text-decoration: none;
        }
        .results-grid .result-item a.image-link img {
            display: block;
            max-width: 80%; /* Permitir que la imagen sea más grande por defecto */
            height: auto;
            margin-top: 15px;
            margin-left: auto; /* Centrar imagen si es más pequeña que max-width */
            margin-right: auto; /* Centrar imagen */
            cursor: pointer;
            border: 1px solid #eee;
            border-radius: 4px;
            transition: transform 0.2s ease-in-out; /* Efecto suave al pasar el ratón */
        }

        .results-grid .result-item a.image-link img:hover {
            transform: scale(1.03); /* Ligero zoom al pasar el ratón */
        }

        .result-item {
            display: flex;
            flex-direction: column;
            align-items: center; /* Centra el contenido del item horizontalmente */
            text-align: center; /* Centra el texto */
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
        }
        .result-item h4 {
            margin-bottom: 10px;
            font-size: 1.4em;
        }
        .result-item p {
            margin-bottom: 15px;
            max-width: 600px; /* Limita el ancho del texto para mejor legibilidad */
        }

        /* Estilos para el Modal */
        .modal {
            /* display: none;  Controlado por React state ahora */
            position: fixed; /* Se queda fijo en la pantalla */
            z-index: 1000; /* Por encima de todo */
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto; /* Permite scroll si la imagen es muy grande */
            background-color: rgba(0,0,0,0.85); /* Fondo negro semitransparente */
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            margin: auto;
            display: block;
            max-width: 85%;
            max-height: 85vh; /* Altura máxima relativa al viewport */
        }

        .close-modal {
            position: absolute;
            top: 20px;
            right: 35px;
            color: #fff;
            font-size: 40px;
            font-weight: bold;
            transition: 0.3s;
        }

        .close-modal:hover,
        .close-modal:focus {
            color: #bbb;
            text-decoration: none;
            cursor: pointer;
        }
      `}</style>

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
              <img src="/img/lumispa.avif" alt="Lumispa - Dispositivo de limpieza facial" />
            </div>
            <div className="product-info">
              <h2>Lumispa</h2>
              <p className="product-description">Dispositivo de limpieza facial profunda para una piel radiante y rejuvenecida.</p>
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
              <h3>INTRODUCCIÓN</h3>
              <p>Nu Skin creó un nuevo dispositivo para el cuidado de la piel que puede mejorar la apariencia de la piel mientras la limpia. Lo hace a través de la tecnología de Oscilación por Micropulsaciones, un movimiento de oscilación inversa pulsante de 15 Hz. Esto da como resultado un movimiento único de la piel que es una interacción entre la superficie de silicona y los productos tópicos especialmente creados. Evaluamos los beneficios de este movimiento en la apariencia de la piel a lo largo de una evaluación clínica de 12 semanas.</p>
            </section>

            <section className="product-section">
              <h3>RESULTADOS</h3>
              <p>Los sujetos observaron mejorías estadísticamente significativas en cuanto a las características visibles de belleza de la piel incluyendo suavidad, tersura, limpieza, aspecto radiante, claridad, luminosidad, aspecto de los poros y firmeza de la piel al final y/o durante todo el estudio. Las mejorías en las características variaron un poco entre cada grupo y mostraron diferentes respuestas en diferentes tipos de piel. Las mejorías en el número de características y su intensidad se extendieron a lo largo del estudio de 12 semanas.</p>
              
              <div className="results-grid">
                <div className="result-item">
                  <h4>Piel Normal a Mixta</h4>
                  <p>En el tipo de piel normal a mixta utilizando un producto tópico formulado para las necesidades de la piel y el cabezal de tratamiento normal se notaron las siguientes mejorías en la semana 12.</p>
                  <a href="javascript:void(0);" className="image-link" onClick={() => openModal('/img/figura1.png')}>
                    <img src="/img/figura1.png" alt="Resultados piel normal a mixta" />
                  </a>
                </div>
                <div className="result-item">
                  <h4>Piel Seca</h4>
                  <p>En el tipo de piel seca utilizando un producto tópico formulado para las necesidades de la piel y el cabezal de tratamiento normal se notaron las siguientes mejorías en la semana 12.</p>
                  <a href="javascript:void(0);" className="image-link" onClick={() => openModal('/img/figura2.jpg')}>
                    <img src="/img/figura2.jpg" alt="Resultados piel seca" />
                  </a>
                </div>
                <div className="result-item">
                  <h4>Piel Grasa</h4>
                  <p>En el tipo de piel grasa utilizando un producto tópico formulado para las necesidades de la piel y el cabezal de tratamiento firme se notaron las siguientes mejorías en la semana 12.</p>
                  <a href="javascript:void(0);" className="image-link" onClick={() => openModal('/img/figura3.jpg')}>
                    <img src="/img/figura3.jpg" alt="Resultados piel grasa" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* El Modal */}
      <div 
        id="imageModal" 
        className="modal" 
        style={{ display: isModalOpen ? 'flex' : 'none' }} 
        onClick={handleModalBackdropClick}
      >
        <span className="close-modal" onClick={closeModal}>&times;</span>
        <img className="modal-content" id="modalImage" src={modalImageSrc} alt="Imagen Ampliada" />
      </div>

      <div id="footer-placeholder"></div>
    </>
  );
}

export default LumispaPage;
