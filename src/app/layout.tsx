'use client';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '../lib/registry';
import { myTheme } from '@/styles/tokens';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
