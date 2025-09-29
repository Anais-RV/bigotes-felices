# 🐱 Bigotes Felices – Proyecto Educativo Colaborativo

App web para la protectora **“Bigotes Felices”**, desarrollada de forma colaborativa por el equipo de SuperKode.  
Este proyecto es parte de nuestro entrenamiento como desarrolladores y sigue un flujo profesional de trabajo en equipo.

---

## 🚀 Cómo arrancar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Anais-RV/bigotes-felices.git
   cd bigotes-felices
   ```

2. Instalar dependencias:
   ```bash
   npm install
   # o
   pnpm install
   ```

3. Ejecutar en local:
   ```bash
   npm run dev
   ```

El proyecto abrirá en `http://localhost:5173`.

---

## 🌳 Flujo de ramas

- **main** → código estable y protegido.  
- **dev** → rama de integración.  
- **feature/** → cada tarea se desarrolla en su propia rama.  
  - Ejemplo: `feature/HOME-03-slider-base`

---

## 📝 Convención de commits

Usamos el formato:
```
tipo(scope): mensaje breve
```

Tipos:
- `feat` → nueva funcionalidad  
- `fix` → corrección de errores  
- `refactor` → cambios internos sin cambiar funcionalidad  
- `chore` → configuración o tareas menores  
- `test` → pruebas  

Ejemplo:
```
feat(HOME-02): catService con getCats()
```

---

## 🔀 Pull Requests

1. Toda rama **feature/** debe crear un **PR hacia dev**.  
2. El título debe seguir la convención:  
   ```
   feat(HOME-XX): descripción breve
   ```
3. En la descripción añadir:  
   ```
   Closes #<número-de-issue>
   ```
   Esto cerrará la issue automáticamente al mergear.  
4. Todo PR necesita al menos **1 aprobación**.

---

## 🏷️ Etiquetas

- **Área**: `frontend`, `backend`, `infraestructura`, `test`, `documentación`  
- **Dificultad**: `easy`, `medium`, `hard`  
- **Prioridad**: `P1`, `P2`, `P3`  

---

## ✅ Reglas del tablero

- **Backlog**: todas las tareas futuras.  
- **To Do**: tareas desbloqueadas y listas para empezar.  
- **In Progress**: tareas en las que alguien está trabajando.  
- **Code Review**: tareas con PR abierto pendiente de revisión.  
- **Done**: tareas completadas y mergeadas.  

---

## 🤝 Roles en el equipo

- **Repo master** → revisa ramas y PRs.  
- **Tablero master** → mantiene el tablero actualizado.  
- **Demo master** → prepara las presentaciones.  

Estos roles son rotativos para que todos pasen por cada experiencia.

---

## 📚 Recursos

- [Vite docs](https://vitejs.dev/guide/)  
- [React docs](https://react.dev/)  
- [React Router](https://reactrouter.com/)  
- [The Cat API](https://thecatapi.com/)  

---

💡 *Recordad: somos desarrolladores, resolvemos problemas. El tablero y el flujo de ramas son nuestras herramientas para trabajar como un equipo real.*
