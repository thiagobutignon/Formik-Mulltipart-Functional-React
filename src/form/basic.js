import React from "react";
import { Link } from "react-router-dom";
import { Field } from "formik";
import Debug from "../Debug";

export default function BasicPage() {
  return (
    <>
      <div>
        <div>
          <Field type="email" name="email" placeholder="Email"></Field>
        </div>
        <div>
          <Field type="text" name="firstName" placeholder="First Name"></Field>
        </div>
        <div>
          <Field type="text" name="lastName" placeholder="Last Name"></Field>
        </div>
        <Debug></Debug>
        <Link to="/form/location" className="next">
          Next
        </Link>
      </div>
    </>
  );
}
