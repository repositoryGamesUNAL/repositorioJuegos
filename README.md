# repositorioJuegos
### Backend

El backend será realizado con [typescript](https://www.typescriptlang.org/docs/) y [express](https://expressjs.com/), además se utilizará un método de organización de código llamado **Model-Controller-Service** el cual busca facilitar la organización, mantenimiento y escalabilidad.

El modelo **Model-Controller-Service**, usa el siguiente sistema de carpetas:

src/  
│  
├── controllers/           # Contiene los controladores, manejadores de rutas  
│   └── userController.ts  # Controlador para las rutas relacionadas con los usuarios  
│  
├── services/              # Contiene la lógica de negocio  
│   └── userService.ts     # Servicio para la gestión de usuarios  
│  
├── models/                # Contiene los modelos, definición de datos y validaciones  
│   └── userModel.ts       # Modelo de usuario (puede interactuar con la base de datos)  
│  
├── repositories/          # Capa que abstrae el acceso a la base de datos  
│   └── userRepository.ts  # Repositorio para la gestión de usuarios en la base de datos  
│  
├── routes/                # Definición de rutas  
│   └── userRoutes.ts      # Rutas de la API de usuarios  
│  
├── middlewares/           # Middleware de validación, autenticación, etc.  
│   └── authMiddleware.ts  # Middleware para la autenticación  
│  
├── utils/                 # Funciones auxiliares y utilidades (opcional)  
│   └── logger.ts          # Logger, funciones de utilidad  
│  
├── config/                # Configuración general de la aplicación  
│   └── dbConfig.ts        # Configuración de la base de datos  
│  
├── server.ts              # Archivo principal para configurar el servidor Express  
└── app.ts                 # Configuración de la aplicación y rutas (opcional en este caso)  



### **1. controllers/**

- **`userController.ts`**: Es el controlador que maneja las solicitudes HTTP relacionadas con usuarios, como obtener un usuario por ID o crear un nuevo usuario. Llama a los servicios para que manejen la lógica de negocio.

### **2. services/**

- **`userService.ts`**: Aquí reside la lógica de negocio. El servicio maneja las operaciones relacionadas con los modelos, como obtener, actualizar o eliminar datos. Es responsable de aplicar las reglas de negocio y delega las consultas a los repositorios.

### **3. models/**

- **`userModel.ts`**: Define la estructura de datos del usuario y puede incluir decoradores o métodos para interactuar con la base de datos si se usa un ORM como TypeORM o Sequelize.

### **4. repositories/**

- **`userRepository.ts`**: Esta capa es responsable de la interacción directa con la base de datos. El repositorio maneja las consultas CRUD y abstrae el acceso a los datos de las demás capas de la aplicación (como servicios o controladores).
    
    Ejemplo de un repositorio simple utilizando un ORM como TypeORM:

### **5. routes/**

- **`userRoutes.ts`**: Define las rutas de la API para los usuarios. Estas rutas se conectan con el controlador correspondiente (`userController.ts`) para manejar las solicitudes HTTP.

### **6. middlewares/**

- **`authMiddleware.ts`**: Middleware para gestionar la autenticación o autorización de las solicitudes, verificando si el usuario tiene permisos o si está autenticado antes de acceder a ciertas rutas.

### **7. utils/**

- **`logger.ts`**: Contiene funciones de utilidad, como un logger para registrar información sobre las solicitudes, errores, y otros eventos de la aplicación.

### **8. config/**

- **`dbConfig.ts`**: Contiene la configuración de la base de datos, ya sea utilizando un ORM o una conexión directa, y maneja la conexión a la base de datos en función del entorno de ejecución.

### **9. app.ts**

- Archivo principal donde se configura Express, se inicializan los middlewares, las rutas y la base de datos. Aquí también se puede configurar la conexión a otros servicios.

### **10. server.ts**

- Es el archivo que arranca el servidor Express. Generalmente se importa la aplicación desde `app.ts` y se inicializa en este archivo.
    
    Ejemplo de **`server.ts`**:
