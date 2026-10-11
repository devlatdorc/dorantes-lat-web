# Dorantes Lat — sitio web estático

Página de presentación corporativa en español, adaptativa y lista para GitHub Pages, sin frameworks ni dependencias externas.

**Archivos**
- `index.html`: estructura, contenido y metadatos de la web.
- `styles.css`: diseño para escritorio y móvil.
- `script.js`: menú móvil y año dinámico en el pie.
- `assets/favicon.svg`: ícono de la web.
- `.nojekyll`: permite servir archivos directamente con GitHub Pages.

## 1. Publicar en GitHub Pages

1. Inicia sesión en https://github.com y crea un repositorio **público**. Por ejemplo: `dorantes-lat-web`.
2. Usa **Add file → Upload files** y sube los archivos y la carpeta `assets` del ZIP (no subas el ZIP sin descomprimir). Mantén `index.html` en la raíz.
3. Confirma los cambios en la rama `main`.
4. Ve a **Settings → Pages → Build and deployment**.
5. En **Source**, selecciona `Deploy from a branch`.
6. Elige **Branch: main** y **Folder: /(root)**, luego **Save**.
7. Espera a que aparezca la URL provisional: `https://TU-USUARIO.github.io/dorantes-lat-web/`.

## 2. Conectar dorantes.lat (Spaceship)

Cuando la web funcione en la URL de GitHub:

1. En **Settings → Pages → Custom domain**, escribe `dorantes.lat` y pulsa **Save**. GitHub gestionará el archivo `CNAME` cuando publiques desde una rama.
2. En el administrador de DNS de Spaceship, configura estos registros para el dominio raíz:

| Tipo | Host | Valor |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

3. Elimina o reemplaza exclusivamente los registros `A` antiguos para `@` que apunten a otro alojamiento (si los hay). Revisa también si hay `AAAA` contradictorios.
4. **IMPORTANTE PARA TU CORREO:** no elimines los registros `MX`, `TXT` de SPF o verificación, ni otros registros necesarios para el reenvío de `contacto@dorantes.lat`. Cambiar el alojamiento web no requiere borrar la configuración de correo.
5. Opcional: para `www.dorantes.lat`, crea un registro `CNAME` con host `www` y valor `TU-USUARIO.github.io` (sustituye con tu usuario real, sin incluir el nombre del repositorio).
6. Vuelve a **Settings → Pages** y activa **Enforce HTTPS** cuando GitHub permita hacerlo. La propagación DNS puede tardar hasta 24 horas.

Documentación oficial:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## 3. Cambios rápidos

- Para editar contenido (incluida la fecha de fundación), modifica `index.html`.
- Para cambiar el contacto, busca `contacto@dorantes.lat` en `index.html`.
- Para personalizar colores, cambia los valores definidos al inicio de `styles.css`.
- Puedes abrir `index.html` directamente en tu navegador para revisar el diseño antes de publicarlo.

## Nota sobre información de empresa

El sitio incluye la fecha «Fundada en enero de 2025», indicada por el solicitante. **Confirma que la fecha es real antes de publicarla**. El sitio no aporta prueba de incorporación formal, inversión ni elegibilidad en programas de terceros. Si la fecha describe el inicio de un proyecto pero no una constitución legal, ajusta la redacción para ser preciso. No se han incluido métricas, clientes, sedes ni productos terminados no acreditados.
