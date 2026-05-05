export function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--border)]">
      <p className="text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} Your Name
      </p>
    </footer>
  )
}
