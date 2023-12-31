import "@/assets/scss/style.scss";

export const metadata = {
  title: '포트폴리오 Next.js',
  description: 'Generated by create next app',
  keywords : ["포트폴리오", "넥스트", "Portfolio", "Next.js"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="next.svg" />
      <body>{children}</body>
    </html>
  )
}
