import React from "react";
import { Link } from "react-router-dom";
import { Field } from "formik";
import Debug from "../Debug";
import { Form } from "react-bootstrap";

export default function LocationPage() {
  return (
    <>
      <div className="mx-auto">
        <Form>
          <Field
            render={({ field, formProps }) => (
              <>
                <Form.Group controlId="address">
                  <Form.Label>Address:</Form.Label>
                  <Form.Control
                    type="text"
                    value={field.address}
                    onChange={field.onChange}
                  />
                </Form.Group>
                <Form.Group controlId="city">
                  <Form.Label>City:</Form.Label>
                  <Form.Control
                    type="text"
                    value={field.city}
                    onChange={field.onChange}
                  />
                </Form.Group>
                <Form.Group controlId="state">
                  <Form.Label>State:</Form.Label>
                  <Form.Control
                    type="text"
                    value={field.state}
                    onChange={field.onChange}
                  />
                </Form.Group>
                <Form.Group controlId="zipCode">
                  <Form.Label>Zip code:</Form.Label>
                  <Form.Control
                    type="text"
                    value={field.zipCode}
                    onChange={field.onChange}
                  />
                </Form.Group>
              </>
            )}
          />
        </Form>
      </div>

      <Debug></Debug>
      <Link to="/form/basic" className="next">
        Back
      </Link>
      <Link to="/form/submit" className="next">
        Next
      </Link>
    </>
  );
}
