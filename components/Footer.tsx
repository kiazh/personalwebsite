export function Footer() {
  return (
    <footer className="pb-10">
      <p className="text-xs" style={{ color: 'var(--muted)' }}>
        © {new Date().getFullYear()}
      </p>
    </footer>
  )
}
