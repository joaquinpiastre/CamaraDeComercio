# Limpiar repo y subir sin node_modules ni dist

Tu repo [CamaraDeComercio](https://github.com/joaquinpiastre/CamaraDeComercio) tiene **node_modules** y **dist** subidos. Eso no debe estar en Git y puede causar el error 126 en Vercel.

## Pasos (desde la carpeta hcd-react)

Abrí terminal en **hcd-react** (donde está `package.json`).

### 1. Conectar el repo (si todavía no está)

```bash
git remote add origin https://github.com/joaquinpiastre/CamaraDeComercio.git
```

Si ya tenés `origin`, no hace falta. Si querés reemplazarlo:

```bash
git remote set-url origin https://github.com/joaquinpiastre/CamaraDeComercio.git
```

### 2. Dejar de trackear node_modules y dist (sin borrarlos de tu PC)

```bash
git rm -r --cached node_modules
git rm -r --cached dist
```

Si sale error "did not match any files", es que en tu copia local no estaban en Git; en ese caso seguí al paso 3.

### 3. Agregar todo y commitear

```bash
git add .
git status
```

Revisá que **no** aparezcan `node_modules/` ni `dist/` en la lista. Si aparecen, el `.gitignore` no está bien ubicado (tiene que estar dentro de `hcd-react`).

```bash
git commit -m "Quitar node_modules y dist del repo, agregar .gitignore"
git push -u origin main
```

### 4. Vercel

Después del push, Vercel hace un deploy nuevo. En el build hará `npm install` (genera `node_modules`) y `npm run build` (genera `dist`), sin usar los que estaban en Git.

---

## Si preferís empezar el repo de cero

Desde la carpeta **hcd-react**:

```bash
Remove-Item -Recurse -Force .git
git init
git add .
git commit -m "HCD Chos Malal - React + Vite"
git branch -M main
git remote add origin https://github.com/joaquinpiastre/CamaraDeComercio.git
git push -u origin main --force
```

**Atención:** `--force` reescribe la historia en GitHub. Si tenés algo importante en el repo, mejor usar los pasos 1–3 de arriba.
