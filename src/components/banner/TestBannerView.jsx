import React from 'react'

export default function TestBannerView({ align = 'left' }) {
  const containerStyle = {
    textAlign: align === 'center' ? 'center' : 'left',
    padding: '12px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: align === 'center' ? 'center' : 'flex-start'
  }

  const titleStyle = { margin: 0, fontSize: 16, fontWeight: 600 }
  const descStyle = { margin: 0, fontSize: 14, color: 'rgba(0,0,0,0.7)' }

  const primaryButton = {
    marginTop: '6px',
    padding: '8px 14px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: 6,
    background: '#111827',
    color: '#fff'
  }

  const ghostButton = {
    marginTop: '6px',
    padding: '8px 14px',
    cursor: 'pointer',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: 6,
    background: 'transparent',
    color: 'inherit'
  }

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Custom Banner Content</h2>
      <p style={descStyle}>
        This is a test view placed into Banner's children. It preserves the prop-based layout patterns
        (title, description, actions) while using inline styles so you can test interactions.
      </p>

      <div style={{ display: 'flex', gap: 8 }}>
        <button style={primaryButton} onClick={() => console.log('Primary clicked')}>Take Action</button>
        <button style={ghostButton} onClick={() => console.log('Secondary clicked')}>Dismiss</button>
      </div>
    </div>
  )
}