export function Footer() {
  return (
    <footer style={{ paddingBottom: '40px' }}>
      <p style={{ color: 'var(--muted)', fontSize: '13px' }}>
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}
