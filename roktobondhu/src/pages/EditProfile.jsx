import React from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div className="section-gap">
      <section className="container userProfile">
        <div>
          <ul className="nav fw-bold">
            <li className="nav-item">
              <Link
                className="nav-link active ps-0"
                aria-current="page"
                to="/profile"
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile/:id">
                Edit Profile
              </Link>
            </li>
          </ul>
        </div>
        <hr />

        <div className="row g-5">
          <div className="col-6 col-md-4">
            <div className="card">
              <img
                src="https://www.bootdey.com/img/Content/avatar/avatar1.png"
                className="card-img-top img-fluid p-2"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">Jon Duo</h5>
                <h5 className="card-title text-center bg-success p-2 text-dark bg-opacity-25 rounded">
                  Last Date of Donation mm-dd-yyyy
                </h5>
                <h5 className="card-title text-center bg-secondary p-2 text-dark bg-opacity-25 rounded">
                  01xxx xxxxxx
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-8">
            <div>
              <h3>Basic Information</h3>

              <div className="row gx-3 my-1">
                <p className="col-sm-3 text-end fw-bold">Name :</p>
                <p className="col-sm-9 bg-success text-dark bg-opacity-25 rounded fw-semibold">
                  Jon Duo
                </p>
              </div>
              <div className="row gx-3 my-1">
                <p className="col-sm-3 text-end fw-bold">Blood Group :</p>
                <p className="col-sm-9 bg-success text-dark bg-opacity-25 rounded fw-semibold">
                  A+
                </p>
              </div>
              <div className="row gx-3 my-1">
                <p className="col-sm-3 text-end fw-bold">Gender :</p>
                <p className="col-sm-9 bg-success text-dark bg-opacity-25 rounded fw-semibold">
                  Male
                </p>
              </div>
              <div className="row gx-3 my-1">
                <p className="col-sm-3 text-end fw-bold">Date of Birth :</p>
                <p className="col-sm-9 bg-success text-dark bg-opacity-25 rounded fw-semibold">
                  mm-dd-yyyy
                </p>
              </div>
            </div>

            <hr />

            <form onSubmit="">
              <div>
                <h3>Contact Information</h3>

                <div className="row gx-3 my-2">
                  <h5 className="col-sm-3 text-end fw-bold">Mobile :</h5>
                  <div className="col-sm-9 ps-0 ms-0">
                    <input
                      className="col-sm-7 rounded fw-semibold"
                      type="number"
                      placeholder="01xxx xxxxxx"
                    />
                    <input
                      className="ms-5 bg-success text-dark bg-opacity-25 rounded fw-semibold"
                      type="checkbox"
                    />{" "}
                    <label>Show Number Publicly</label>
                  </div>
                </div>
                <div className="row gx-3 my-2">
                  <h5 className="col-sm-3 text-end fw-bold">Email :</h5>
                  <input
                    className="col-sm-9 rounded"
                    type="email"
                    placeholder="example@example.com"
                  />
                </div>
                <div className="row gx-3 my-2">
                  <h5 className="col-sm-3 text-end fw-bold">
                    Present Address :
                  </h5>
                  <textarea
                    className="col-sm-9 rounded fw-semibold"
                    type="text"
                    placeholder="Dhaka, Bangladesh"
                  />
                </div>
                <div className="row gx-3 my-1">
                  <p className="col-sm-3 text-end fw-bold">
                    Permanent Address :
                  </p>
                  <p className="col-sm-9 bg-success text-dark bg-opacity-25 rounded fw-semibold">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-dark fw-bold">
                  Update Profile
                </button>
              </div>
            </form>

            <hr />

            <div>
              <h3>Other Information</h3>

              <div className="row gx-3 my-1">
                <p>!platelet donar && want to platelet donar...? register</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditProfile;
