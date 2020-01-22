import React, { Component } from "react";
import { Switch, Route, Prompt, Redirect, matchPath } from "react-router-dom";
import { Formik, Form } from "formik";

import BasicPage from "./form/basic";
import LocationPage from "./form/location";
import SubmitPage from "./form/submit";

class WizardForm extends Component {
  state = {
    submitted: false
  };

  handleSubmit = () => {
    this.setState(
      {
        submitted: true
      },
      () => this.props.history.push("/")
    );
  };

  render() {
    return (
      <div>
        <Prompt
          when={!this.state.submitted}
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
            tos: false
          }}
          onSubmit={this.handleSubmit}
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
    );
  }
}

export default WizardForm;
