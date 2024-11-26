# repositorioJuegos
### Backend

El backend será realizado con [typescript](https://www.typescriptlang.org/docs/) y [express](https://expressjs.com/), además se utilizará un método de organización de código llamado **Model-Controller-Service** el cual busca facilitar la organización, mantenimiento y escalabilidad.

El modelo **Model-Controller-Service**, usa el siguiente sistema de carpetas:

Aquí tienes el texto en formato Markdown:

markdown
Copiar código
### Backend

El backend será realizado con [typescript](https://www.typescriptlang.org/docs/) y [express](https://expressjs.com/), además se utilizará un método de organización de código llamado **Model-Controller-Service** el cual busca facilitar la organización, mantenimiento y escalabilidad.

El modelo **Model-Controller-Service**, usa el siguiente sistema de carpetas:

src/ │ ├── controllers/ # Contiene los controladores, manejadores de rutas │ └── userController.ts # Controlador para las rutas relacionadas con los usuarios │ ├── services/ # Contiene la lógica de negocio │ └── userService.ts # Servicio para la gestión de usuarios │ ├── models/ # Contiene los modelos, definición de datos y validaciones │ └── userModel.ts # Modelo de usuario (puede interactuar con la base de datos) │ ├── repositories/ # Capa que abstrae el acceso a la base de datos │ └── userRepository.ts # Repositorio para la gestión de usuarios en la base de datos │ ├── routes/ # Definición de rutas │ └── userRoutes.ts # Rutas de la API de usuarios │ ├── middlewares/ # Middleware de validación, autenticación, etc. │ └── authMiddleware.ts # Middleware para la autenticación │ ├── utils/ # Funciones auxiliares y utilidades (opcional) │ └── logger.ts # Logger, funciones de utilidad │ ├── config/ # Configuración general de la aplicación │ └── dbConfig.ts # Configuración de la base de datos │ ├── server.ts # Archivo principal para configurar el servidor Express └── app.ts # Configuración de la aplicación y rutas (opcional en este caso)
