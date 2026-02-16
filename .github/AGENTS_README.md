# Custom AI Agents Documentation

Este proyecto utiliza un conjunto de agentes especializados de IA para mejorar la productividad y mantener la calidad del código.

## 📋 Agentes Disponibles

### 1. @orchestrator - Orquestador de Proyecto
**Rol**: Arquitecto senior y coordinador de tareas

**Cuándo usar**:
- Al planificar nuevas funcionalidades complejas
- Para dividir tareas grandes en subtareas manejables
- Cuando necesites una visión general de la arquitectura
- Para coordinar trabajo entre frontend y documentación

**Ejemplo de uso**:
```
@orchestrator Necesito agregar un sistema de niveles de dificultad al juego. 
¿Cómo debería estructurarlo?
```

**Especialidades**:
- Diseño de arquitectura de sistemas
- Gestión de dependencias
- Revisión de código
- Planificación de integración
- Mejores prácticas

---

### 2. @frontend - Experto en Frontend
**Rol**: Desarrollador frontend senior especializado en HTML, CSS, JavaScript

**Cuándo usar**:
- Para implementar componentes de UI
- Al resolver problemas de CSS o diseño responsive
- Para optimizar rendimiento del frontend
- Cuando necesites código JavaScript limpio y moderno
- Para mejorar accesibilidad

**Ejemplo de uso**:
```
@frontend Crea un componente de scoreboard responsive que muestre 
puntuación, tiempo y nivel. Debe funcionar en móviles.
```

**Especialidades**:
- HTML5 semántico
- CSS moderno (Grid, Flexbox, Custom Properties)
- JavaScript ES6+
- Diseño responsive
- Accesibilidad web (WCAG)
- Optimización de rendimiento

---

### 3. @writer - Documentador Técnico
**Rol**: Escritor técnico experto en documentación

**Cuándo usar**:
- Para crear o actualizar README
- Al documentar APIs o funciones
- Para escribir guías de usuario
- Cuando necesites comentarios de código
- Para crear diagramas de arquitectura

**Ejemplo de uso**:
```
@writer Documenta la nueva función calculateScore() y actualiza 
el README con las instrucciones de uso del sistema de puntuación.
```

**Especialidades**:
- Documentación técnica (API, arquitectura)
- Guías de usuario
- Comentarios de código
- Markdown y formato
- Diagramas (Mermaid)
- Changelog y release notes

---

## 🌐 Reglas de Idioma

### Código y Comentarios (Inglés)
```javascript
// Calculate total score based on hits and combo multiplier
function calculateTotalScore(hits, comboMultiplier) {
  const basePoints = hits * 10;
  return basePoints * comboMultiplier;
}
```

### Interfaz de Usuario (Español)
```javascript
// UI messages must be in Spanish
displayMessage('¡Felicidades! Has ganado');
button.textContent = 'Iniciar Juego';
alert('Tiempo agotado. Puntuación final: ' + score);
```

### Nombres de Variables (Inglés)
```javascript
// ✅ Correcto
const gameScore = 0;
const timeRemaining = 30;
const startButton = document.getElementById('startBtn');

// ❌ Incorrecto
const puntuacionJuego = 0;
const tiempoRestante = 30;
```

---

## 🚀 Ejemplos de Uso

### Ejemplo 1: Planificación de Feature
```
Prompt: @orchestrator Quiero agregar un modo multijugador al juego

Respuesta: 
## Análisis de Feature: Modo Multijugador

### Arquitectura
1. WebSocket para comunicación en tiempo real
2. Sistema de lobby para emparejar jugadores
3. Sincronización de estado del juego
4. Tabla de clasificación compartida

### Tareas Delegadas
[@frontend] Crear UI de lobby con lista de jugadores
[@frontend] Implementar cliente WebSocket
[@writer] Documentar protocolo de comunicación
...
```

### Ejemplo 2: Implementación de Componente
```
Prompt: @frontend Crea un modal de game over que muestre estadísticas del juego

Respuesta:
## Modal de Game Over

### HTML
<div class="modal" id="gameOverModal" role="dialog" aria-labelledby="modalTitle">
  <div class="modal__content">
    <h2 id="modalTitle">¡Juego Terminado!</h2>
    ...
```

### Ejemplo 3: Documentación
```
Prompt: @writer Documenta el nuevo sistema de power-ups que acabamos de implementar

Respuesta:
## Sistema de Power-Ups

### Descripción Técnica (English)
The power-up system provides temporary advantages...

### Guía de Usuario (Español)
Los power-ups son bonificaciones especiales que aparecen...
```

---

## 🎯 Mejores Prácticas

### 1. Especifica el Agente Apropiado
- Usa `@orchestrator` para planificación
- Usa `@frontend` para código de UI
- Usa `@writer` para documentación

### 2. Sé Específico en tus Solicitudes
```
❌ Malo: "Mejora el juego"
✅ Bueno: "@frontend Optimiza el hitbox del topo para mejorar la detección de clics en dispositivos móviles"
```

### 3. Proporciona Contexto
```
@frontend Necesito un botón de pausa. El juego usa un temporizador con 
setInterval y tiene estados gameActive. El estilo debe coincidir con el 
botón de inicio existente.
```

### 4. Combina Agentes para Tareas Complejas
```
@orchestrator Planifica la implementación de un sistema de logros
[El orchestrator responde con plan]

@frontend Implementa el UI del panel de logros según el plan
@writer Documenta cada logro y cómo desbloquearlos
```

---

## 📁 Estructura de Archivos

```
.github/
├── copilot-instructions.md    # Instrucciones generales para Copilot
├── agents/
│   ├── orchestrator.md        # Configuración agente orchestrator
│   ├── frontend.md            # Configuración agente frontend
│   └── writer.md              # Configuración agente writer
└── AGENTS_README.md           # Esta documentación
```

---

## 🔧 Configuración

Los agentes están configurados en los archivos Markdown dentro de `.github/agents/`. 
GitHub Copilot lee estas configuraciones automáticamente.

### Activación
Los agentes se activan mencionándolos con `@` en tus conversaciones con Copilot:
- `@orchestrator`
- `@frontend`
- `@writer`

---

## 📊 Workflow Recomendado

```mermaid
graph TD
    A[Nueva Feature] --> B[@orchestrator: Planificar]
    B --> C{Tipo de Tarea}
    C -->|UI/Código| D[@frontend: Implementar]
    C -->|Documentación| E[@writer: Documentar]
    D --> F[Review]
    E --> F
    F --> G[@orchestrator: Integrar]
    G --> H[Feature Completa]
```

### Pasos:
1. **Planificación**: `@orchestrator` analiza y divide la tarea
2. **Implementación**: `@frontend` crea el código
3. **Documentación**: `@writer` documenta los cambios
4. **Integración**: `@orchestrator` valida que todo funcione junto
5. **Review**: Verificar calidad y estándares

---

## 💡 Tips y Trucos

### Tip 1: Usa el Orchestrator como Punto de Partida
Cuando no estés seguro de cómo abordar algo, pregunta al orchestrator primero.

### Tip 2: Solicita Código Completo
```
@frontend Dame el código completo del componente, no solo snippets
```

### Tip 3: Pide Validación
```
@orchestrator ¿Esta implementación sigue las mejores prácticas?
```

### Tip 4: Itera con Feedback
```
@frontend El modal queda muy grande en móviles, ajústalo
```

### Tip 5: Documenta Mientras Desarrollas
```
@frontend Implementa X
@writer Documenta la implementación de X
```

---

## 🐛 Troubleshooting

### El agente no responde como esperas
- Verifica que usaste el `@` correcto
- Proporciona más contexto en tu pregunta
- Intenta con el orchestrator primero para aclarar la tarea

### El código está en el idioma incorrecto
- Recuerda: código en inglés, UI en español
- Especifica en tu prompt: "código en inglés, mensajes en español"

### Necesitas combinar varios agentes
- Usa el orchestrator para coordinar
- Hazlo paso a paso, no todo a la vez

---

## 📝 Contribuir

Al usar estos agentes en tu desarrollo:
1. Mantén las convenciones de código (inglés)
2. Mantén los mensajes de UI en español
3. Documenta cambios importantes
4. Sigue las recomendaciones del orchestrator

---

## 📄 Licencia

Estos agentes son parte del proyecto Whack-a-Mole y están disponibles bajo la misma licencia.

---

## 🤝 Soporte

Para preguntas sobre el uso de los agentes:
1. Consulta esta documentación
2. Pregunta a `@orchestrator` por guía
3. Revisa los archivos en `.github/agents/`

---

**Última actualización**: Febrero 2026
**Versión**: 1.0.0
