import Layout from '../components/Layout'
import '../styles/globals.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-50 antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
