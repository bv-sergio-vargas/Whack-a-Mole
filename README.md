# 🎮 Whack-a-Mole Game Collection

A collection of interactive Whack-a-Mole game implementations built with HTML5, CSS3, and Vanilla JavaScript. This project showcases different approaches and progressive enhancement of the classic arcade game.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Demos Disponibles](#-demos-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Cómo Empezar](#-cómo-empezar)
- [Cómo Jugar](#-cómo-jugar)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Configuración](#-configuración)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

## ✨ Características

✅ **Tablero de Juego Interactivo**: Cuadrícula 3x3 con animaciones fluidas  
✅ **Aparición Aleatoria**: Los topos aparecen en posiciones y tiempos aleatorios  
✅ **Sistema de Puntuación**: Gana puntos por cada topo golpeado exitosamente  
✅ **Temporizador de Juego**: Sesiones de juego cronometradas (configurables)  
✅ **Retroalimentación Visual**: Animaciones y efectos al golpear topos  
✅ **Diseño Responsive**: Funciona en dispositivos móviles, tablets y escritorio  
✅ **Sin Dependencias**: JavaScript vanilla puro, sin frameworks requeridos  
✅ **Múltiples Implementaciones**: Diferentes enfoques de código y complejidad  

## 🎯 Demos Disponibles

### Demo 01 - Versión Básica
**Nivel**: Principiante  
**Idioma del Código**: English  
**Idioma de UI**: English  

Implementación básica del juego con características fundamentales. Ideal para aprender los conceptos básicos de manipulación del DOM y manejo de eventos.

**Características específicas:**
- Sistema de puntuación simple
- Temporizador de 30 segundos
- Modal de fin de juego
- Animaciones CSS básicas
- Código limpio y bien comentado

📁 [Ver Demo01](./Demo01/)

---

### Demo 02 - Versión Mejorada
**Nivel**: Intermedio  
**Idioma del Código**: Español  
**Idioma de UI**: Español  

Versión mejorada con mejor manejo de estados y lógica de juego más robusta. Incluye optimizaciones y prevención de bugs comunes.

**Características específicas:**
- Prevención de topos duplicados
- Control de temporizadores mejorado
- Validación de estado del juego
- Comentarios detallados en español
- Mejor gestión de memoria

📁 [Ver Demo02](./Demo02/)

---

### Demo 03 - Versión Avanzada
**Nivel**: Avanzado  
**Idioma del Código**: Español  
**Idioma de UI**: Español  

Implementación más compleja con características adicionales y arquitectura mejorada.

**Características específicas:**
- Todo lo de Demo02 +
- Dificultad progresiva (velocidad aumenta)
- Sistema de logs para debugging
- Arquitectura modular
- Manejo avanzado de eventos
- Optimizaciones de rendimiento

📁 [Ver Demo03](./Demo03/)

## 📁 Estructura del Proyecto

```
Whack-a-Mole/
│
├── Demo01/                      # Implementación básica (English)
│   ├── index.html              # Estructura HTML
│   ├── style.css               # Estilos y animaciones
│   ├── script.js               # Lógica del juego
│   ├── README.md               # Documentación detallada
│   └── COPILOT_INTERACTION_GUIDE.md
│
├── Demo02/                      # Versión mejorada (Español)
│   ├── index.html              # Estructura HTML mejorada
│   ├── style.css               # Estilos mejorados
│   └── script.js               # Lógica optimizada
│
├── Demo03/                      # Versión avanzada (Español)
│   ├── index.html              # Estructura HTML avanzada
│   ├── style.css               # Estilos avanzados
│   └── script.js               # Lógica con dificultad progresiva
│
├── .github/                     # Configuración GitHub
│   ├── copilot-instructions.md # Instrucciones para GitHub Copilot
│   └── agents/                 # Agentes especializados
│       ├── frontend.md
│       ├── orchestrator.md
│       └── writer.md
│
├── LICENSE                      # Licencia GPL-3.0
└── README.md                    # Este archivo

```

## 🚀 Cómo Empezar

### Requisitos Previos

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (opcional, para modificar el código)

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/Whack-a-Mole.git
   cd Whack-a-Mole
   ```

2. **Abrir la demo deseada**
   
   Navega a la carpeta de la demo que quieras probar (Demo01, Demo02, o Demo03) y abre el archivo `index.html` en tu navegador web.

   **Opción A - Doble clic:**
   - Navega a la carpeta deseada
   - Doble clic en `index.html`

   **Opción B - Desde terminal:**
   ```bash
   # En Windows
   cd Demo01
   start index.html

   # En macOS
   cd Demo01
   open index.html

   # En Linux
   cd Demo01
   xdg-open index.html
   ```

   **Opción C - Con servidor local (recomendado para desarrollo):**
   ```bash
   # Usando Python 3
   cd Demo01
   python -m http.server 8000

   # Usando Node.js (con npx)
   cd Demo01
   npx http-server -p 8000
   ```
   Luego abre `http://localhost:8000` en tu navegador.

## 🎮 Cómo Jugar

1. **Iniciar el Juego**: Haz clic en el botón "Start Game" / "Iniciar Juego"
2. **Golpear Topos**: Haz clic rápidamente en los topos cuando aparezcan
3. **Ganar Puntos**: Cada golpe exitoso aumenta tu puntuación en 1 punto
4. **Sobrevivir**: Trata de obtener la puntuación más alta antes de que se acabe el tiempo
5. **Reiniciar**: Usa el botón "Reset" / "Reiniciar" en cualquier momento

### Consejos de Juego

- 🎯 Mantén el cursor cerca del centro del tablero
- ⚡ Reacciona rápido, los topos no duran mucho tiempo arriba
- 📱 En móviles, usa los pulgares para mayor velocidad
- 🏆 En Demo03, la dificultad aumenta con el tiempo

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica del juego
- **CSS3**: 
  - Flexbox y CSS Grid para layouts
  - Animaciones y transiciones
  - Variables CSS para theming
  - Diseño responsive con media queries
- **JavaScript (ES6+)**:
  - Vanilla JavaScript (sin frameworks)
  - Manipulación del DOM
  - Event handling
  - Timers e intervals
  - Programación funcional

## ⚙️ Configuración

Puedes personalizar el comportamiento del juego modificando las constantes en `script.js` de cada demo:

```javascript
// Demo01 example
const GAME_DURATION = 30;        // Duración del juego en segundos
const MOLE_SHOW_TIME = 1000;     // Tiempo que el topo permanece visible (ms)
const MOLE_SPAWN_INTERVAL = 800; // Intervalo entre apariciones (ms)
```

### Parámetros Configurables

| Parámetro | Descripción | Valor por Defecto | Rango Sugerido |
|-----------|-------------|-------------------|----------------|
| `GAME_DURATION` | Duración total del juego | 30 segundos | 15-60s |
| `MOLE_SHOW_TIME` | Tiempo visible del topo | 1000ms | 500-2000ms |
| `MOLE_SPAWN_INTERVAL` | Intervalo de aparición | 800ms | 400-1500ms |

## 🤝 Contribuir

Las contribuciones son bienvenidas. Este proyecto sigue las guías de [GitHub Copilot Custom Instructions](.github/copilot-instructions.md).

### Normas de Código

- **Código y comentarios técnicos**: Inglés
- **Interfaz de usuario y mensajes**: Español
- Seguir las convenciones de cada demo
- Mantener la compatibilidad cross-browser
- Incluir comentarios descriptivos

### Proceso de Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la GNU General Public License v3.0. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 📞 Contacto

¿Preguntas? ¿Sugerencias? ¡Abre un issue en GitHub!

---

**¡Disfruta del juego! 🎯🔨**
