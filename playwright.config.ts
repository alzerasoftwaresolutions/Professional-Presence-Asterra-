import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e/specs',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 2,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL: 'http://localhost:5174',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    channel: 'msedge',
  },
  projects: [
    {
      name: 'Desktop Edge',
      use: {
        ...devices['Desktop Edge'],
        viewport: { width: 1440, height: 900 },
        channel: 'msedge',
      },
    },
    {
      name: 'Mobile Viewport',
      use: {
        ...devices['Pixel 5'],
        channel: 'msedge',
      },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5174',
    reuseExistingServer: true,
    timeout: 30000,
  },
});
