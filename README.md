# QA Automation – Playwright

Proyecto de automatización de pruebas end-to-end sobre [Sauce Demo](https://www.saucedemo.com/), desarrollado con Playwright y TypeScript.

## Tecnologías utilizadas

- [Playwright Test](https://playwright.dev/) (`@playwright/test`)
- TypeScript
- Node.js / npm
- Navegadores: Chromium, Firefox y WebKit

## Requisitos

- [Node.js](https://nodejs.org/) 20 o superior (incluye npm)

## Instalación

Instalar las dependencias del proyecto:

```bash
npm install
```

Instalar los navegadores de Playwright:

```bash
npx playwright install
```

## Ejecución de los tests

Ejecutar todos los tests en todos los navegadores:

```bash
npx playwright test
```

Ejecutar solo el sanity test en Chromium:

```bash
npx playwright test tests/sanity.spec.ts --project=chromium
```

Ver el reporte HTML de la última ejecución:

```bash
npx playwright show-report
```

## Sanity Test

El archivo `tests/sanity.spec.ts` verifica que la página principal de Sauce Demo cargue correctamente:

1. Navega a la URL base configurada en `playwright.config.ts` (`baseURL`).
2. Valida que la página tenga un título no vacío.
3. Valida que el `body` de la página sea visible.
4. Valida que el botón de **Login** (`#login-button`) sea visible.

Si alguna de estas validaciones falla, el sitio no está disponible o no cargó bien, y no tiene sentido ejecutar el resto de las pruebas.
