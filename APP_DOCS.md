# Documentación del Proyecto

Esta aplicación es una plataforma de mensajería construida con **React**. El objetivo es gestionar contactos y conversaciones de forma fluida. La navegación se maneja con **React Router**, y el entorno de desarrollo corre sobre **Vite** para asegurar una carga rápida.

## Tecnologías Principales

El proyecto se apoya en estas librerías clave:

### Producción
*   **react**: La base para construir toda la interfaz de usuario.
*   **react-dom**: Permite que React interactúe con el navegador.
*   **react-router** y **react-router-dom**: Gestionan las rutas y la navegación entre pantallas.

### Desarrollo
*   **vite**: Se encarga de empaquetar el código y levantar el servidor local.
*   **eslint**: Ayuda a mantener el código limpio y sin errores de sintaxis.

## Estructura del Código

El código fuente está en la carpeta `src` y se organiza de la siguiente manera:

### 1. Contextos (`src/Context`)
Aquí manejamos el estado que necesita toda la aplicación.
*   **ContactDetailContext**: Guarda los datos del contacto que estemos viendo.
*   **ContactListContext**: Mantiene la lista completa de contactos.
*   **ThemeContext**: Controla la configuración visual (como el modo oscuro).

### 2. Componentes (`src/Components`)
Son las piezas reutilizables de la interfaz.
*   **ChatHeader**: La barra superior del chat.
*   **ContactList**: Muestra la lista de personas.
*   **ContactSearchForm**: El buscador para filtrar contactos.
*   **ContactSidebar**: La barra lateral para navegación.

### 3. Pantallas (`src/Screens`)
Representan las páginas completas de la app.
*   **ChatScreen**: La vista principal de conversación.
*   **MessagesScreen**: Listado de mensajes.
*   **NewContact**: Formulario para agregar alguien nuevo.
*   **WelcomeScreen**: Pantalla inicial de bienvenida.

### 4. Archivos Raíz
*   **App.jsx**: Estructura principal y configuración de rutas.
*   **main.jsx**: Punto de entrada donde se monta la aplicación.
*   **Input.jsx**: Componente base para campos de texto.
