import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from "./DashboardLayout.module.css"

const DashboardLayout = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.body}>
                <Sidebar />
                <main className={styles.main}>
                    <Outlet />
                </main>
            </div>

        </div>
    )
}

export default DashboardLayout