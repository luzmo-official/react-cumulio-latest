import React, { useState, useRef } from 'react';
import './App.css';
import { CumulioDashboardComponent } from '@cumul.io/react-cumulio-dashboard';

const App = () => {
  const [activeDashboard, setActiveDashboard] = useState(0);
  const dashboardRef = useRef();
  const dashboards = [
    {
      name: 'Facebook',
      dashboardId: '763177aa-9b93-4ae7-903e-3cb07dc593d8'
    },
    {
      name: 'LinkedIn',
      dashboardId: '722fa789-89c8-4149-be4d-bc3eb348a65f'
    },
    {
      name: 'Adwords',
      dashboardId: 'eb8a3bec-2d19-4229-b40a-2f31ad379780'
    }
  ];

  const refreshData = () => {
    dashboardRef.current.reloadDashboard();
  };

  return (
    <div className="full-page">
      <div className="wrapper">
        <div className="main-container">
          <div className="tab-container">
            <div className="navbar-title">Your application</div>
            <div className="navbar-subtitle">Example of Cumul.io embedded dashboard</div>
            <ul className="tabs">
              { dashboards.map((dashboard, index) => (
                <li key={index} className={index === activeDashboard ? "active" : ""} onClick={(e) => setActiveDashboard(index)}>
                  {dashboard.name}
                </li>
              ))}
              <li className="tab-underline"></li>
            </ul>
          </div>
          <button className="btn btn-primary float-right my-3 mr-3" onClick={(e) => refreshData()}>
            Refresh Data
          </button>
          <div className="dashboard-outer-container">
            <div className="dashboard-inner-container">
              <CumulioDashboardComponent
                ref={dashboardRef}
                dashboardId={dashboards[activeDashboard].dashboardId}
                loaderBackground="rgb(238, 243, 246)"
                loaderFontColor="rgb(0, 45, 112)"
                loaderSpinnerColor="rgb(0, 54, 136)"
                loaderSpinnerBackground="rgb(194, 209, 233)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
