import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Topbar from '../../components/Admin/TopBar'
import Footer from '../../components/Admin/Footer'


export default ({ children }) => {
    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div className="page-container">
                    <div className="main-content">
                        <div id="content">
                            <Topbar />
                            <div className="container-fluid">
                                {children}
                                <Footer />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

