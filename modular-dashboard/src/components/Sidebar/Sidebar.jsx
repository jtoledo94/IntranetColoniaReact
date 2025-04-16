import React from 'react'
import styles from "./Sidebar.module.css"

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li>Inicio</li>
        <li>Usuarios</li>
        <li>Configuración</li>
      </ul>
    </aside>
  )
}

export default Sidebar