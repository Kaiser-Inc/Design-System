import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "./Form.js";
import { Input } from "../Input/Input.js";

const meta: Meta = { title: "Components/Form", tags: ["autodocs"], parameters: { layout: "centered" } };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [submitted, setSubmitted] = useState(false);
    return (
      <div className="w-80">
        <Form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
          <Form.Field hint="Enter your full name">
            <Form.Label required>Name</Form.Label>
            <Input placeholder="Alice Silva" />
          </Form.Field>
          <Form.Field hint="We'll never share your email">
            <Form.Label required>Email</Form.Label>
            <Input type="email" placeholder="alice@example.com" />
          </Form.Field>
          <Form.Submit loading={false}>{submitted ? "Submitted!" : "Submit"}</Form.Submit>
        </Form>
      </div>
    );
  },
};

export const WithErrors: Story = {
  render: () => (
    <div className="w-80">
      <Form>
        <Form.Field error="Name is required">
          <Form.Label required>Name</Form.Label>
          <Input placeholder="Alice Silva" />
        </Form.Field>
        <Form.Field error="Please enter a valid email">
          <Form.Label required>Email</Form.Label>
          <Input type="email" placeholder="alice@example.com" />
        </Form.Field>
        <Form.Submit>Submit</Form.Submit>
      </Form>
    </div>
  ),
};
