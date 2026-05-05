'use client'

import { useEffect, useState, useRef } from 'react'

interface SpotifyData {
  track: string
  artist: string
  url: string
  timestamps: { start: number; end: number } | null
}

function formatTime(ms: number): string {
  const s = Math.floor(ms / 1000)
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

export function SpotifyNowPlaying() {
  const [spotify, setSpotify] = useState<SpotifyData | null>(null)
  const [progress, setProgress] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch('https://api.lanyard.rest/v1/users/431549003449237505')
        const data = await res.json()
        if (data.success && data.data?.spotify) {
          const s = data.data.spotify
          setSpotify({
            track: s.song,
            artist: s.artist,
            url: `https://open.spotify.com/track/${s.track_id}`,
            timestamps: s.timestamps ?? null,
          })
        } else {
          setSpotify(null)
        }
      } catch {
        // silent fail
      }
    }

    fetchSpotify()
    const poll = setInterval(fetchSpotify, 30000)
    return () => clearInterval(poll)
  }, [])

  // tick progress every second using timestamps from API
  useEffect(() => {
    if (tickRef.current) clearInterval(tickRef.current)
    if (!spotify?.timestamps) return

    const tick = () => {
      const { start, end } = spotify.timestamps!
      const duration = end - start
      const current = Math.min(Date.now() - start, duration)
      setElapsed(current)
      setProgress(current / duration)
    }

    tick()
    tickRef.current = setInterval(tick, 1000)
    return () => { if (tickRef.current) clearInterval(tickRef.current) }
  }, [spotify])

  if (!spotify) return null

  const duration = spotify.timestamps ? spotify.timestamps.end - spotify.timestamps.start : 0

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '48px',
      fontFamily: 'var(--font-eb-garamond)',
      lineHeight: 1.4,
    }}>
      <span style={{ color: 'var(--muted)', fontSize: '12px', marginBottom: '4px' }}>listening to</span>
      <a
        href={spotify.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'var(--fg)',
          fontSize: '16px',
          fontWeight: 500,
          textDecoration: 'none',
          maxWidth: '260px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          transition: 'color 0.15s ease',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)')}
        onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)')}
      >
        {spotify.track}
      </a>
      <span style={{
        color: 'var(--muted)',
        fontSize: '13px',
        marginTop: '2px',
        maxWidth: '260px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}>
        {spotify.artist}
      </span>

      {duration > 0 && (
        <>
          <div style={{
            marginTop: '10px',
            width: '260px',
            height: '2px',
            background: 'var(--border)',
            borderRadius: '1px',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${Math.min(progress * 100, 100)}%`,
              background: 'var(--muted)',
              transition: 'width 1s linear',
            }} />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '260px',
            marginTop: '5px',
            fontSize: '11px',
            color: 'var(--muted)',
            opacity: 0.7,
          }}>
            <span>{formatTime(elapsed)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </>
      )}
    </div>
  )
}
