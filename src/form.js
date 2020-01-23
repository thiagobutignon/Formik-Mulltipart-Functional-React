import React from "react";
import { Switch, Route, Prompt, Redirect, matchPath } from "react-router-dom";
import { Formik, Form } from "formik";

import BasicPage from "./form/basic";
import LocationPage from "./form/location";
import SubmitPage from "./form/submit";

const state = {
  submitted: false
};
function handleSubmit() {
  this.setState(
    {
      submitted: true
    },
    () => this.props.history.push("/")
  );
}

export default function Stepper() {
  return (
    <>
      <div>
        <Prompt
          when={!state.submitted}
          message={({ pathname }) => {
            return matchPath(pathname, { path: "/form" })
              ? true
              : "Are you sure you want to navigate away?";
          }}
        ></Prompt>

        <Formik
          initialValues={{
            email: "",
            firstName: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            rg: "",
            tos: false
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Switch>
              <Redirect from="/form" exact to="/form/basic"></Redirect>
              <Route path="/form/basic" component={BasicPage}></Route>
              <Route path="/form/location" component={LocationPage}></Route>
              <Route path="/form/submit" component={SubmitPage}></Route>
            </Switch>
          </Form>
        </Formik>
      </div>
    </>
  );
}
