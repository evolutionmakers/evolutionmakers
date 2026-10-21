# evolutionmakers

La web publica de Evolution Makers y, mas adelante, la herramienta del Club.

```
packages/marca/   tokens, tipografias y componentes compartidos
apps/web/         www.evolutionmakers.plus   (este despliegue)
apps/club/        club.evolutionmakers.plus  (pendiente)
```

Un repositorio, **dos despliegues independientes**, dos origenes y dos juegos de
secretos: un retoque de copy no puede tumbar la herramienta, y un incidente en la
herramienta no se lleva la web por delante.

Las cookies de `club.` van atadas a ese host exacto, nunca a `.evolutionmakers.plus`,
con prefijo `__Host-`. Si se escapan al dominio padre, la separacion se cae.

## Trabajar en local

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # genera apps/web/dist
```

Node 22 (ver `.nvmrc`).

## El sistema de identidad

Esta en `packages/marca/styles/tokens.css`. La fuente de verdad sigue siendo
`claude/guia-de-estilos-web.md` (v3, 4/10/2026) en el proyecto de Claude.

Las tres reglas que mas se incumplen:

1. **Nunca un peso nuevo.** Si un titular tiene que destacar mas, sube de nivel.
2. **Nunca un tamano nuevo.** Los de la tabla y ninguno mas.
3. **Un solo boton** en toda la web: `#fac100`, texto negro, sin redondeo, y
   siempre con una linea de 15px en gris debajo.

Alfa Slab One solo en tres sitios: el `<h1>`, los botones y los acentos
declarados (numerales del decalogo, cifras grandes de las landings).

## Estado

Bloque 1 del plan (`claude/plan-salida-de-zoho-sites.md`): la tuberia entera,
probada de punta a punta con tres paginas portadas.

| Pagina | Estado |
|---|---|
| `/manifiesto` | Portada |
| `/aviso-legal` | Portada |
| `/gracias` | Portada, con el evento `generate_lead` intacto |
| `/` | Placeholder: la home se rehace en el bloque 3 |

Ninguna URL cambia respecto de la web actual.
