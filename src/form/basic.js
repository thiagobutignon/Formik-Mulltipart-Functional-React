import React from "react";
import { Link } from "react-router-dom";
import { Field } from "formik";
import Debug from "../Debug";
import { Form } from "react-bootstrap";
export default function BasicPage() {
  return (
    <>
      <div className="mx-auto">
        <Form>
          <Field
            render={({ field, formProps }) => (
              <>
                <Form.Group controlId="email">
                  <Form.Label>Email:</Form.Label>

                  <Form.Control
                    type="email"
                    value={field.name}
                    onChange={field.onChange}
                    placeholder="Email"
                  />

                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="firstName">
                  <Form.Label>First name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={field.firstName}
                    onChange={field.onChange}
                  />
                </Form.Group>

                <Form.Group controlId="lastName">
                  <Form.Label>Last name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={field.lastName}
                    onChange={field.onChange}
                  />
                </Form.Group>

                <Form.Group controlId="rg">
                  <Form.Label>Identification number:</Form.Label>
                  <Form.Control
                    type="text"
                    value={field.rg}
                    onChange={field.onChange}
                  />
                </Form.Group>

                <Form.Group controlId="cpf">
                  <Form.Label>Cpf number:</Form.Label>
                  <Form.Control
                    type="text"
                    value={field.cpf}
                    onChange={field.onChange}
                  />
                </Form.Group>
              </>
            )}
          />
        </Form>
        <Debug></Debug>
        <Link to="/form/location" className="next">
          Next
        </Link>
      </div>
    </>
  );
}
