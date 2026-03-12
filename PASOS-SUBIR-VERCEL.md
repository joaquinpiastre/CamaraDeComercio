# Pasos para volver a subir el proyecto a Git y Vercel

## Opción A: Eliminar Git y crear un repositorio nuevo

Ejecutá estos comandos **desde la carpeta del proyecto** (donde está `package.json`).

Si tu repo en GitHub/Vercel es **solo la carpeta hcd-react**, entrá primero a esa carpeta:

```bash
cd hcd-react
```

### 1. Borrar la carpeta .git (elimina la historia de Git)

**En PowerShell (Windows):**
```powershell
Remove-Item -Recurse -Force .git
```

**En CMD (Windows):**
```cmd
rmdir /s /q .git
```

### 2. Inicializar un repo nuevo y subir

```bash
git init
git add .
git commit -m "Proyecto HCD Chos Malal - React + Vite"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

Reemplazá `TU-USUARIO` y `TU-REPO` por tu usuario de GitHub y el nombre del repositorio.

---

## Opción B: Si el repo está en la carpeta padre (Camara-de-comercio)

Si conectaste en Vercel el repo **Camara-de-comercio** (y en Vercel pusiste Root Directory = `hcd-react`), entonces:

1. Abrí terminal en **Camara-de-comercio** (la carpeta que tiene `hcd-chosmalal` y `hcd-react`).
2. Borrá `.git` solo si querés empezar de cero:
   ```powershell
   Remove-Item -Recurse -Force .git
   ```
3. Luego:
   ```bash
   git init
   git add .
   git commit -m "Proyecto HCD Chos Malal"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```
4. En **Vercel** → Project Settings → **Root Directory** → poné `hcd-react`.

---

## Configuración en Vercel

- **Root Directory:** `hcd-react` (si el repo incluye varias carpetas).
- **Build Command:** dejalo vacío o `npm run build` (el `package.json` ya usa `npm exec -- vite build`).
- **Output Directory:** `dist`.
- **Install Command:** `npm install`.

Después de hacer push, Vercel va a hacer un nuevo deploy con los archivos actualizados.
