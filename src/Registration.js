import React, { useState, useEffect } from "react";
import "./Registration.css";

import { GetRegister, PostRegister, Deleteuserbyid } from "./axios";
import picture from "./download.jpg";
import { useHistory } from "react-router-dom";
function Registration() {
  let [FullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [mobilenumber, setmobilenumber] = useState("");
  let [profile, setProfile] = useState("");
  let [jobtype, setJobtype] = useState("");
  let [dateofbirth, setDateofbirth] = useState("");
  let [location, setLocation] = useState("");
  let [data, setData] = useState([]);

  let userData = {
    FullName: FullName,
    email: email,
    mobilenumber: mobilenumber,
    jobtype: jobtype,
    dateofbirth: dateofbirth,
    location: location,
    profile: profile,
  };

  useEffect(async () => {
    let data = await GetRegister();
    setData(data.data);
    console.log(data);
  }, []);
  let history= useHistory();
  console.log(history)

  return (
    <>
      {/* <img src={picture} /> */}
      <h1>Registration</h1>
      <div className="container">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            console.log(userData);

            await PostRegister(userData);

            setFullName("");
            setEmail("");
            setmobilenumber("");
            setJobtype("");
            setDateofbirth("");
            setLocation("");
            setProfile("");
          }}
        >
          <div class="form-group row">
            <label for="name" class="col-sm-1 col-form-label">
              FullName
            </label>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                placeholder="FullName"
                value={FullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>
            <label type="email" for="email" class="col-sm-1 col-form-label">
              Email-Id
            </label>
            <div class="col-sm-4">
              <input
                type="email"
                required
                class="form-control"
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          {/* <div>
  <label>Profile-pic-</label>
 <input type="file"  />
  </div> */}
          <div class="form-group row ">
            <label className="col-sm-1">Mobile</label>
            <select>
              <option selected>+91</option>
              <option value="1">+31</option>
              <option value="2">+1</option>
              <option value="3">+41</option>
            </select>

            <input
              type="number"
              placeholder="99xx99xx99"
              required
              pattern="[0-9]{10}"
              value={mobilenumber}
              onChange={(e) => {
                setmobilenumber(e.target.value);
              }}
            />

            <label class="col-sm-2 col-form-label offset-1">Profile-pic</label>
            <div class="col-sm-4">
              <input
                type="file"
                class="form-control"
                value={profile}
                onChange={(e) => {
                  setProfile(e.target.value);
                }}
              />
            </div>
          </div>

          <div class=" row">
            <label for="name" class="col-md-1 col-form-label">
              JobType
            </label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioDisabled"
                value="PT"
                onChange={(e) => {
                  setJobtype(e.target.value);
                }}
              />
              <label class="form-check-label" for="flexRadioDisabled">
                PT
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioCheckedDisabled"
                value="FT"
                onChange={(e) => {
                  setJobtype(e.target.value);
                }}
              />
              <label class="form-check-label" for="flexRadioCheckedDisabled">
                FT
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioCheckedDisabled"
                value="Consultant"
                onChange={(e) => {
                  setJobtype(e.target.value);
                }}
              />
              <label class="form-check-label" for="flexRadioCheckedDisabled">
                Consultant
              </label>
            </div>

            <label for="email" class="col-sm-3 col-form-label offset-1">
              DOB
            </label>
            <div class="col-sm-4">
              <input
                type="date"
                class="form-control"
                value={dateofbirth}
                onChange={(e) => {
                  setDateofbirth(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-1">
              <label for="location">Pref.Location</label>
            </div>
            <div class="form-group  col-md-2 offset-1">
              <select
                id="location"
                class="form-control"
                required
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              >
                <option selected>Open this select</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Mysuru">Mysuru</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>
          </div>
          <div class="button">
            <button className="btn btn-warning" type="submit">
              Add/Update
            </button>
          </div>
        </form>
      </div>

      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">FullName</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
            <th scope="col">MobileNumber</th>

            <th scope="col">JobLocation</th>

            <th scope="col">JobType</th>
            <th scope="col">Update/Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((users, index) => {
            return (
              <tr>
                <td>{users.FullName}</td>
                <td>{users.email}</td>
                <td>{users.dateofbirth}</td>
                <td>{users.mobilenumber}</td>
                <td>{users.location}</td>
                <td>{users.jobtype}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={ () => {
                      history.push(`/Update/${users._id}`);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={async () => {
                      await Deleteuserbyid(users._id);
                      history.push("/");
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Registration;
