import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Dashboard from '../pages/Dashboard/Dashboard'
import DashboardLayout from '../layout/DashboardLayout'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/login" />} />
            <Route path='/login' element={<Login />} />

            {/* Vistas protegidas bajo un layout */}
            <Route element={<DashboardLayout />}>

                <Route path='/dashboard' element={<Dashboard />} />
                
            </Route>


        </Routes>
    )
}

export default AppRouter