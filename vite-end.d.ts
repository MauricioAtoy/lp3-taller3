interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // agrega otras variables de entorno aquí si las tienes
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}