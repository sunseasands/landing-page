import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div>
      <Header />
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <h1 className="font-sans text-5xl font-black tracking-tight uppercase sm:text-7xl">
          {title}
        </h1>
        <p className="font-serif text-sm text-muted">Coming soon.</p>
      </section>
      <Footer />
    </div>
  )
}
