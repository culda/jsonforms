import React from "react";
import { schema } from "./schema";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";

validator.ajv.addKeyword("errorMessage", {
  compile: (sch, parentSchema) => {
    console.log("hi");
    return (data) => {
      if (data === sch.const) {
        return sch.errorMessage;
      }
      return true;
    };
  },
  errors: true,
});

function App() {
  return (
    <div>
      <Form
        schema={schema}
        validator={validator}
        onSubmit={({ formData }) => console.log("Data submitted: ", formData)}
      />
    </div>
  );
}

export default App;
