# Colageno es Salud - Landing Page

Una landing page estática para la marca "Colageno es Salud" que muestra productos de colágeno y sus beneficios. El sitio está desarrollado utilizando HTML, CSS y JavaScript puro, lo que lo hace ideal para alojarlo en GitHub Pages.

## Características

- Diseño responsivo que se adapta a todos los dispositivos
- Paleta de colores pasteles acuosos
- Sección de productos con imágenes y descripciones
- Páginas de detalle para cada producto
- Efectos acuosos y animaciones sutiles
- Totalmente estático (sin necesidad de backend)

## Estructura del Proyecto

```
colagenoEsSalud/
├── index.html                # Página principal
├── styles.css                # Estilos globales
├── script.js                 # JavaScript para interactividad
├── img/                      # Directorio de imágenes
│   ├── wave.svg              # SVG de ondas para efectos decorativos
│   ├── wave-bg.svg           # SVG de fondo para sección hero
│   ├── producto1.jpg         # Imagen de producto (placeholder)
│   ├── producto2.jpg         # Imagen de producto (placeholder)
│   ├── producto3.jpg         # Imagen de producto (placeholder)
│   └── producto4.jpg         # Imagen de producto (placeholder)
└── products/                 # Páginas de detalle de productos
    ├── colageno-hidrolizado.html
    ├── colageno-vitamina-c.html
    ├── colageno-marino.html
    └── crema-colageno.html
```

## Despliegue en GitHub Pages

1. Sube este repositorio a GitHub
2. Ve a Settings > Pages
3. En Source, selecciona la rama main
4. Haz clic en Save
5. Tu sitio estará disponible en `https://[tu-usuario].github.io/colagenoEsSalud/`

## Personalización

### Colores
Puedes personalizar la paleta de colores editando las variables CSS en el archivo `styles.css`:

```css
:root {
    --primary-color: #a2d2ff; /* Azul pastel acuoso */
    --secondary-color: #bde0fe; /* Azul claro pastel */
    --accent-color: #ffafcc; /* Rosa pastel */
    --light-accent: #ffc8dd; /* Rosa claro pastel */
    --background-color: #f8f9fa;
    --text-color: #333;
    --footer-color: #cdb4db; /* Lavanda pastel */
}
```

### Productos
Para añadir o modificar productos:

1. Actualiza la sección de productos en `index.html`
2. Crea nuevas páginas de producto en el directorio `products/`
3. Añade las imágenes correspondientes en el directorio `img/`

## Licencia

Este proyecto está bajo la Licencia MIT. Eres libre de usarlo, modificarlo y distribuirlo según tus necesidades. 