import './App.css';
import { IconName, FaGitHub } from "react-icons/fa";

function App() {
  return (
    <div className="box">
      <div className="container">
        <div className="row row-main">
          <div className="coloumns col-12 col-md-12 col-lg-4 d-flex justify-content-center text-align-center">
            <div className="content w-100">
              <div className="content-header text-center justify-content-center text-align-center">
                <h4>FREE</h4>
                <p><strong>$0</strong><sub>/month</sub></p>
                <hr></hr>
              </div>
              <div className="content-body">
                <p><left>&#10004;</left>Single User</p>
                <p><left>&#10004;</left>5GB Storage</p>
                <p><left>&#10004;</left>Unlimited Public Projects</p>
                <p><left>&#10004;</left>Community Access</p>
                <p><right>&#10008;</right>Unlimited Private Projects</p>
                <p><right>&#10008;</right>Dedicated Phone Support</p>
                <p><right>&#10008;</right>Free Subdomain</p>
                <p><right>&#10008;</right>Monthly Status Reports</p>
                <div className="content-body-btn w-100 justify-content-center text-center">
                  <button className="buttonz btn btn-primary">Button</button>
                </div>
              </div>
            </div>
          </div>
          <div className="coloumns col-12 col-md-12 col-lg-4 d-flex justify-content-center text-align-center">
            <div className="content w-100">
              <div className="content-header text-center justify-content-center text-align-center">
                <h4>PLUS</h4>
                <p><strong>$9</strong><sub>/month</sub></p>
                <hr></hr>
              </div>
              <div className="content-body">
                <p><left>&#10004;</left>5 Users</p>
                <p><left>&#10004;</left>50GB Storage</p>
                <p><left>&#10004;</left>Unlimited Public Projects</p>
                <p><left>&#10004;</left>Community Access</p>
                <p><left>&#10004;</left>Unlimited Private Projects</p>
                <p><left>&#10004;</left>Dedicated Phone Support</p>
                <p><left>&#10004;</left>Free Subdomain</p>
                <p><right>&#10008;</right>Monthly Status Reports</p>
                <div className="content-body-btn w-100 justify-content-center text-center">
                  <button className="buttonz btn btn-primary">Button</button>
                </div>
              </div>
            </div>
          </div>
          <div className="coloumns col-12 col-md-12 col-lg-4 d-flex justify-content-center text-align-center">
            <div className="content w-100">
              <div className="content-header text-center justify-content-center text-align-center">
                <h4>PRO</h4>
                <p><strong>$49</strong><sub>/month</sub></p>
                <hr></hr>
              </div>
              <div className="content-body">
                <p><left>&#10004;</left>Unlimited Users</p>
                <p><left>&#10004;</left>150GB Storage</p>
                <p><left>&#10004;</left>Unlimited Public Projects</p>
                <p><left>&#10004;</left>Community Access</p>
                <p><left>&#10004;</left>Unlimited Private Projects</p>
                <p><left>&#10004;</left>Dedicated Phone Support</p>
                <p><left>&#10004;</left>Unlimited Free Subdomains</p>
                <p><left>&#10004;</left>Monthly Status Reports</p>
                <div className="content-body-btn w-100 justify-content-center text-center">
                  <button className="buttonz btn btn-primary">Button</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;