import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Yuso",
  description: "Yuso application",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
