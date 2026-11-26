import{test, expect} from '@playwright/test';
test('sanity test - la página principal carga correctamente', async ({ page }) => {
  // 1. Navega a la ruta raíz de tu baseURL
  await page.goto('/');

  // 2. Verifica que el título o un elemento clave sea visible(assertion)
  await expect(page).toHaveTitle(/.+/); // Verifica que tenga algún título no vacío
  await expect(page.locator('body')).toBeVisible();//body:es un locator

  // 3- Verificar que el botón de login es visible
await expect(page.locator('#login-button')).toBeVisible();

});


