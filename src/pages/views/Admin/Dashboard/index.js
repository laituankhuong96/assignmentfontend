import React from 'react'
import PropTypes from 'prop-types'

const Dashboard = ({ products, category }) => {
    const num = products.length
    const num2 = category.length
    return (
        <div className="row">
            <div className="col-xl-3 col-md-6">
                <div className="card bg-primary text-white mb-4">
                    <div className="card-body">Products: <a>{num}</a></div>

                    {/* <div className="card-footer d-flex align-items-center justify-content-between">
                        <a className="small text-white stretched-link" href="#">View Details</a>
                        <div className="small text-white"><i className="fas fa-angle-right" /></div>
                    </div> */}
                </div>
            </div>
            <div className="col-xl-3 col-md-6">
                <div className="card bg-primary text-white mb-4">
                    <div className="card-body">Warning Card: <a>{num2}</a></div>
                    {/* <div className="card-footer d-flex align-items-center justify-content-between">
                        <a className="small text-white stretched-link" href="#">View Details</a>
                        <div className="small text-white"><i className="fas fa-angle-right" /></div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
