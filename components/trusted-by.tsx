export function TrustedBy() {
  const companies = ["Microsoft", "Google", "Amazon", "Apple", "Meta", "Netflix", "Tesla", "Adobe"]

  return (
    <section className="border-y bg-muted/30 py-12">
      <div className="container">
        <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted By Industry Leaders
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">
          {companies.map((company) => (
            <div key={company} className="flex items-center justify-center">
              <span className="text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-foreground">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
