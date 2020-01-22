import React from "react";
import { Link } from "react-router-dom";
import { Field } from "formik";
import Debug from "../Debug";

export default function LocationPage() {
  return (
    <>
      <div>
        <div>
          <Field type="text" name="address" placeholder="Address" />
        </div>
        <div>
          <Field type="text" name="city" placeholder="City" />
        </div>
        <div>
          <Field type="text" name="state" placeholder="State" />
        </div>
        <div>
          <Field type="text" name="zipCode" placeholder="Zip Code" />
        </div>
        <Debug></Debug>
        <Link to="/form/basic" className="next">
          Back
        </Link>
        <Link to="/form/submit" className="next">
          Next
        </Link>
      </div>
    </>
  );
}
