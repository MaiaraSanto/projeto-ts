import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
	title: "Portfoleo",
	description: "Portfólio de projetos de desenvolvimento",
}

const fonte = Montserrat({
	subsets: ["latin"],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${fonte.className} antialiased`}>{children}</body>
		</html>
	)
}
