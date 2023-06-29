import React,{ useState, useEffect} from 'react';
import axios from 'axios';

export const Home_admin = () => {

  const [user, setUser] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:3001/auth-user/count").then((response) => {
      setUser(response.data.count)
    });
  }, []);

  const [active, setActive] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:3001/auth-user/active-count").then((response) => {
      setActive(response.data.count)
    });
  }, []);

  const [hre, setHre] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:3001/auth-hre/count").then((response) => {
      setHre(response.data.count)
    });
  }, []);

  const [applications, setApplications] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:3001/application/application-count").then((response) => {
      setApplications(response.data.count)
    });
  }, []);

  const [interview, setInterview] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:3001/interview/interview-count").then((response) => {
      setInterview(response.data.count)
    });
  }, []);

  const [visa, setVisa] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:3001/visa/visa-count").then((response) => {
      setVisa(response.data.count)
    });
  }, []);

  return (

    <div style={{ margin: "20px", minHeight: '480px' }}>
      <h4 className='text-center'>Admin Home</h4>
      <div className='container m-5'>
          <div class="row mb-5">
            <div className="col-md-4">
              <div className="card px-2 text-light" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor: '#FFC107 '}} >
                <h1 className='pt-5'>{user}</h1>
                <h6>Total Users</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card px-2 text-light" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor: '#4CAF50'}}>
                <h1 className='pt-5'>{active}</h1>
                <h6>Active Users</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card px-2 text-light" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor: '#2196F3 '}}>
                <h1 className='pt-5'>{hre}</h1>
                <h6>Total HR Executive</h6>
              </div>
            </div>
          </div>

          <div class="row">
            <div className="col-md-4">
              <div className="card px-2 text-light" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor: '#F44336'}}>
                <h1 className='pt-5'>{applications}</h1>
                <h6>Visa Applications</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card px-2 text-light" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor: '#9C27B0'}}>
                <h1 className='pt-5'>{interview}</h1>
                <h6>Total Interviews</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card px-2 text-light" style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',backgroundColor: '#607D8B'}}>
                <h1 className='pt-5'>{visa}</h1>
                <h6>Visa Approved</h6>
              </div>
            </div>
        </div>

      </div>

    </div>

  )
}
