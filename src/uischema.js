export const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/TaxID",
    },
    {
      type: "Group",
      label: "Account Holder Address",
      elements: [
        {
          type: "Control",
          scope: "#/properties/AccountHolderAddress/properties/State",
        },
        {
          type: "Control",
          scope: "#/properties/AccountHolderAddress/properties/City",
        },
        {
          type: "Control",
          scope: "#/properties/AccountHolderAddress/properties/Address",
        },
      ],
    },
    {
      type: "Group",
      label: "Customer Account",
      elements: [
        {
          type: "Control",
          scope: "#/properties/BankDetails/properties/AccountNumber",
        },
      ],
    },

    {
      type: "Control",
      scope: "#/properties/PaymentPurpose",
    },
  ],
};
