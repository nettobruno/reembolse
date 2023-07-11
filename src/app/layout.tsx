import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../lib/registry'
import GlobalStyle from '../style/globalStyles'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reembolse.me',
  description: 'Facilitando o reembolso corporativo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GlobalStyle />
      <html lang="pt-br" suppressHydrationWarning={true}>
        <body className={inter.className}>  
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </>
  )
}
