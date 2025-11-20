'use client'

import { useState } from "react"

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false)
  const updateFilter = () => {}
  return (
    <div className="catalog-button">
      <button onClick={() => setIsOpen(!isOpen)}>
        <span className="catalog-button_burger"></span>
        <span className="catalog-button_text">Каталог</span>
      </button>
      <div className="catalog" style={{display: isOpen ? 'block' : 'none'}}>
        <ul className="catalog-list">
          <li>Игровая приставка</li>
          <li>Периферия для ПК</li>
          <li>Игры и софт</li>
        </ul>
      </div>
    </div>
  )
}