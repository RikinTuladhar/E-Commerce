import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="px-4 pt-4 container-fluid">
      <div className="mb-4 row">
        <div className="col-sm-6 col-lg-3">
          <div className="p-4 border-0 rounded card bg-light">
            <i className="bi bi-cash-stack fs-2 text-primary"></i>
            <div className="ms-3">
              <p className="mb-1">Today Sale</p>
              <h5 className="mb-0">$1234</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="p-4 border-0 rounded card bg-light">
            <i className="bi bi-currency-dollar fs-2 text-primary"></i>
            <div className="ms-3">
              <p className="mb-1">Total Sale</p>
              <h5 className="mb-0">$1234</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="p-4 border-0 rounded card bg-light">
            <i className="bi bi-cash-coin fs-2 text-primary"></i>
            <div className="ms-3">
              <p className="mb-1">Today Revenue</p>
              <h5 className="mb-0">$1234</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="p-4 border-0 rounded card bg-light">
            <i className="bi bi-bar-chart fs-2 text-primary"></i>
            <div className="ms-3">
              <p className="mb-1">Total Revenue</p>
              <h5 className="mb-0">$1234</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="p-4 border-0 rounded card bg-light">
            <div className="mb-4 d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Product Resell Requests</h5>
              <a href="#" className="text-primary">
                Show All
              </a>
            </div>
            {/* Product resell requests */}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="p-4 border-0 rounded card bg-light">
            <div className="mb-4 d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Sales & Revenue</h5>
              <a href="#" className="text-primary">
                Show All
              </a>
            </div>
            <canvas id="salesRevenueChart"></canvas>
          </div>
        </div>
      </div>

      <div className="mt-4 row">
        <div className="col-lg-6">
          <div className="p-4 border-0 rounded card bg-light">
            <div className="mb-4 d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Recent Sales</h5>
              <a href="#" className="text-primary">
                Show All
              </a>
            </div>
            <table className="table table-hover table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Invoice</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <a href="#" className="btn btn-sm btn-primary">
                      Detail
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <a href="#" className="btn btn-sm btn-primary">
                      Detail
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <a href="#" className="btn btn-sm btn-primary">
                      Detail
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <a href="#" className="btn btn-sm btn-primary">
                      Detail
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <a href="#" className="btn btn-sm btn-primary">
                      Detail
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="p-4 border-0 rounded card bg-light">
            <div className="mb-4 d-flex justify-content-between align-items-center">
              <h5 className="mb-0">FAQ</h5>
              <a href="#" className="text-primary">
                Show All
              </a>
            </div>
            <div className="mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Messages</h5>
                <p className="card-text">Sample message content goes here...</p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
            <div className="mb-3 card">
              <div className="card-body">
                <h5 className="card-title">Calendar</h5>
                <p className="card-text">
                  Sample calendar content goes here...
                </p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">To Do List</h5>
                <p className="card-text">
                  Sample to-do list content goes here...
                </p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
