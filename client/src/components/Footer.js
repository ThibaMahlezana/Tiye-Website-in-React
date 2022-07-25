import React from 'react'
import '../styles/global.css'
import '../styles/footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div class="footer col-12 text-center">
      <p>
        <span class="current-year">{currentYear}, TIYE TECHNOLOGIES (PTY) LTD</span>
      </p>
    </div>
  )
}
