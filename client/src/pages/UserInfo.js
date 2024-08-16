import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';



function UserInfo() {
  const { users } = useSelector((state) => state.usersReducer);
  const { id } = useParams();

  const user = users.find((user) => user._id === id);
  return (
    <div>
      <DefaultLayout>
        {user && (
          <div>
            <h3>
              <b>Personal inforamtion</b>
            </h3>
            <p>
              <b>Full name : </b>
              {user.fullName}
            </p>
            <p>
              <b>Register Number : </b>
              {user.registernumber}
            </p>
            <p>
              <b>Email : </b>
              {user.email}
            </p>
            <p>
              <b>Mobile Number : </b>
              {user.mobileNumber}
            </p>
           
          </div>
        )}
      </DefaultLayout>
    </div>
  );
}

export default UserInfo;
