import React from "react";
import { Field } from "formik";
import Debug from "../Debug";

export default function SubmitPage() {
  return (
    <>
      <div>
        <div>
          <label>
            <Field type="checkbox" name="tos"></Field>I agree to the Tos
          </label>
        </div>
        <Debug></Debug>
        <button className="next">Submit</button>
      </div>
    </>
  );
}
