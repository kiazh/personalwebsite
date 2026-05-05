'use client'

import { useEffect, useState } from 'react'

interface SpotifyData {
  track: string
  artist: string
  album?: string
  albumArt?: string
  url?: string
}

export function SpotifyNowPlaying() {
  const [spotify, setSpotify] = useState<SpotifyData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const response = await fetch('https://api.lanyard.rest/v1/users/43154900344923750')
        const data = await response.json()

        if (data.success && data.data?.spotify) {
          const s = data.data.spotify
          setSpotify({
            track: s.song,
            artist: s.artist,
            album: s.album,
            albumArt: s.album_art_url,
            url: `https://open.spotify.com/track/${s.track_id}`,
          })
        }
      } catch (error) {
        console.error('Failed to fetch Spotify data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSpotify()
    const interval = setInterval(fetchSpotify, 30000) // Refresh every 30s

    return () => clearInterval(interval)
  }, [])

  if (loading) return null
  if (!spotify) return null

  return (
    <div style={{
      position: 'fixed',
      top: '48px',
      left: '24px',
      fontSize: '13px',
      color: 'var(--muted)',
      fontFamily: 'var(--font-eb-garamond)',
      maxWidth: '200px',
      lineHeight: 1.4,
    }}>
      <span style={{ opacity: 0.6 }}>listening to</span>
      <br />
      <a
        href={spotify.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'var(--fg)',
          textDecoration: 'none',
          display: 'block',
          marginTop: '2px',
          transition: 'color 0.15s ease',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)')}
        onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)')}
      >
        {spotify.track}
      </a>
      <span style={{ fontSize: '12px', opacity: 0.7 }}>
        {spotify.artist}
      </span>
    </div>
  )
}
