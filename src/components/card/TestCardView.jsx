import React from 'react'

export default function TestCardViewSimple() {
  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '16px'
  }

  const titleStyle = {
    margin: 0,
    fontSize: '16px',
    fontWeight: '600',
    color: '#111827'
  }

  const descStyle = {
    margin: 0,
    fontSize: '13px',
    color: 'rgba(0,0,0,0.7)',
    lineHeight: '1.5'
  }

  const featureListStyle = {
    margin: 0,
    paddingLeft: '16px',
    fontSize: '12px',
    color: 'rgba(0,0,0,0.7)'
  }

  const featureItemStyle = {
    margin: '4px 0'
  }

  return (
    <div style={contentStyle}>
      <h3 style={titleStyle}>React Component Library</h3>
      
      <p style={descStyle}>
        A flexible and reusable component collection for building modern UIs.
      </p>

      <div>
        <p style={{ ...descStyle, fontWeight: 500, marginBottom: 0 }}>Features:</p>
        <ul style={featureListStyle}>
          <li style={featureItemStyle}>✓ Type-safe components</li>
          <li style={featureItemStyle}>✓ Responsive design</li>
          <li style={featureItemStyle}>✓ Customizable styling</li>
          <li style={featureItemStyle}>✓ Accessibility ready</li>
        </ul>
      </div>
    </div>
  )
}