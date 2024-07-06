import { useContext } from "react"
import { UserContext } from "../context/userContext"
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate()
  return (
    <div className="container my-5 w-50">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Full Name  :-</h6>
            </div>
            <div className="col-sm-9 text-secondary">{user && (user.name || "")}</div>
          </div>

          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Email  :-</h6>
            </div>
            <div className="col-sm-9 text-secondary">{user && (user.email || "-")}</div>
          </div>

          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Gender  :-</h6>
            </div>
            <div className="col-sm-9 text-secondary">{user && (user.gender || "-")}</div>
          </div>

          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Age  :-</h6>
            </div>
            <div className="col-sm-9 text-secondary">{user && (user.age || "-")}</div>
          </div>

          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Education  :-</h6>
            </div>
            <div className="col-sm-9 text-secondary">{user && (user.education || "-")}</div>
          </div>

          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Address  :-</h6>
            </div>
            <div className="col-sm-9 text-secondary">{user && (user.address || "-")}</div>
          </div>

          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">City  :-</h6>
            </div>
            <div className="col-sm-9 text-secondary">{user && (user.city || "-")}</div>
          </div>

          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">State  :-</h6>
            </div>
            <div className="col-sm-9 text-secondary">{user && (user.state || "-")}</div>
          </div>

          <hr />
          <div className="row">
            <div className="col-sm-12">
              <Link className="btn btn-info" to={'/update'}>Edit</Link>
              <button className="btn btn-info m-2" onClick={() => navigate('/login')}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}