# MovieHub - Plataforma de Gestión de Películas

Una aplicación web moderna construida con **Next.js 16**, **React 19** y **Tailwind CSS** que consume una API FastAPI para gestionar películas, usuarios y favoritos.

## Características

✅ **Gestión de Usuarios**
- Registro e inicio de sesión
- Visualización de perfil
- Edición de datos personales

✅ **Exploración de Películas**
- Búsqueda avanzada por título y director
- Filtrado por género, año y clasificación
- Vista detallada de películas

✅ **Sistema de Favoritos**
- Marcar/desmarcar películas como favoritas
- Colecciones personalizadas
- Gestión de favoritos

✅ **Estadísticas**
- Visualización de películas populares
- Gráficos por género, clasificación y año
- Métricas de usuario

## Configuración
# frontend
## # 1. Instalar Node 20
curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs -y

# 2. Instalar PNPM globalmente
sudo npm install -g pnpm

# 3. Verificar versiones
node -v
npm -v
pnpm -v 
# Instalar dependencias del proyecto Node
pnpm install

# Ejecutar en modo desarrollo
pnpm dev

### Requisitos
- Node.js 18+
- API FastAPI ejecutándose (del repositorio lp3-taller2)

### Instalación

1. **Clona este repositorio**
   \`\`\`bash
   git clone <tu-repo>
   cd moviehub
   \`\`\`

2. **Instala las dependencias**
   \`\`\`bash
   npm install
   \`\`\`

3. **Configura la variable de entorno**
   
   Copia `.env.example` a `.env.local`:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Edita `.env.local` y asegúrate que `NEXT_PUBLIC_API_URL` apunte a tu API:
   \`\`\`
   NEXT_PUBLIC_API_URL=http://localhost:8000
   \`\`\`

4. **Inicia la aplicación**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Abre en tu navegador**
   \`\`\`
   http://localhost:3000
   \`\`\`

## Configuración de la API

### Opción 1: API Local (Desarrollo)

Asegúrate de tener la API FastAPI ejecutándose en `http://localhost:8000`:

\`\`\`bash
# En otro terminal
cd lp3-taller2
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
\`\`\`

Luego en `.env.local`:
\`\`\`
NEXT_PUBLIC_API_URL=http://localhost:8000
\`\`\`

### Opción 2: API Remota (Producción)

Si desplegaste la API en Vercel u otro servicio, actualiza:
\`\`\`
NEXT_PUBLIC_API_URL=https://tu-api-deployada.com
\`\`\`

## Estructura del Proyecto

\`\`\`
moviehub/
├── app/
│   ├── page.tsx              # Página principal con navegación
│   ├── layout.tsx            # Layout global
│   └── globals.css           # Estilos globales
├── components/
│   ├── layout/
│   │   ├── main-layout.tsx   # Wrapper principal
│   │   ├── header.tsx        # Encabezado con usuario
│   │   └── sidebar.tsx       # Navegación lateral
│   ├── pages/
│   │   ├── dashboard.tsx     # Estadísticas
│   │   ├── movies.tsx        # Explorador y búsqueda
│   │   ├── favorites.tsx     # Mis favoritos
│   │   ├── statistics.tsx    # Análisis detallados
│   │   └── profile.tsx       # Perfil de usuario
│   └── forms/
│       └── login-form.tsx    # Registro e inicio sesión
├── lib/
│   └── api.ts                # Configuración de API
└── .env.example              # Variables de entorno ejemplo
\`\`\`

## Endpoints de API Consumidos

La aplicación consume los siguientes endpoints:

### Usuarios
- `GET /usuarios/` - Listar usuarios
- `GET /usuarios/{id}` - Obtener usuario
- `POST /usuarios/` - Crear usuario
- `PUT /usuarios/{id}` - Actualizar usuario
- `GET /usuarios/{id}/favoritos` - Favoritos del usuario
- `GET /usuarios/{id}/estadisticas` - Estadísticas del usuario

### Películas
- `GET /peliculas/` - Listar películas
- `GET /peliculas/{id}` - Obtener película
- `GET /peliculas/buscar/` - Búsqueda avanzada
- `GET /peliculas/populares/top` - Películas populares

### Favoritos
- `GET /favoritos/` - Listar favoritos
- `GET /favoritos/usuario/{usuario_id}` - Favoritos por usuario
- `POST /favoritos/` - Crear favorito
- `DELETE /favoritos/{id}` - Eliminar favorito
- `GET /favoritos/verificar/{usuario_id}/{pelicula_id}` - Verificar si es favorito

## Deployment

### Vercel

1. **Conecta tu repositorio a Vercel**
   \`\`\`bash
   vercel
   \`\`\`

2. **Configura variables de entorno**
   - Ve a Vercel Dashboard → Settings → Environment Variables
   - Añade: `NEXT_PUBLIC_API_URL=https://tu-api-deployada.com`

3. **Deploy**
   \`\`\`bash
   vercel --prod
   \`\`\`

### Docker

\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

\`\`\`bash
docker build -t moviehub .
docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=http://localhost:8000 moviehub
\`\`\`

## Desarrollo

### Scripts disponibles

\`\`\`bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila para producción
npm run start    # Inicia servidor de producción
npm run lint     # Ejecuta linter
\`\`\`

### Tecnologías utilizadas

- **Next.js 16** - Framework React con SSR/SSG
- **React 19** - Interfaz de usuario
- **Tailwind CSS v4** - Estilos
- **Lucide React** - Iconos
- **TypeScript** - Type safety
- **FastAPI** - API Backend

## Solución de Problemas

### La API no se conecta
- Verifica que la API está ejecutándose en `http://localhost:8000`
- Revisa la consola del navegador (F12) para errores de CORS
- Asegúrate que `NEXT_PUBLIC_API_URL` está correctamente configurada

### "Usuario no encontrado" al iniciar sesión
- Primero debes registrarte con un correo válido
- Luego puedes iniciar sesión con ese mismo correo

### Error de CORS
La API debe tener CORS habilitado. En FastAPI:

\`\`\`python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://tu-dominio.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
\`\`\`

## Licencia

MIT

## Soporte

Si tienes preguntas o encuentras bugs, abre un issue en el repositorio.
