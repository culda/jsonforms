export const schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  allOf: [
    {
      if: {
        properties: {
          IDType: {
            const: "TaxID",
          },
        },
      },
      then: {
        properties: {
          ID: {
            errorMessage: "TaxID must be 9 to 10 digits",
            maxLength: 10,
            minLength: 9,
          },
        },
      },
    },
    {
      if: {
        properties: {
          IDType: {
            const: "NationalID",
          },
        },
      },
      then: {
        properties: {
          ID: {
            errorMessage: "NationalID must be 6 to 10 digits",
            maxLength: 10,
            minLength: 6,
          },
        },
      },
    },
    {
      if: {
        properties: {
          IDType: {
            const: "ForeignerID",
          },
        },
      },
      then: {
        properties: {
          ID: {
            errorMessage: "ForeignerID must be 6 to 7 digits",
            maxLength: 7,
            minLength: 6,
          },
        },
      },
    },
    {
      if: {
        properties: {
          IDType: {
            const: "Passport",
          },
        },
      },
      then: {
        properties: {
          ID: {
            errorMessage: "Passport must be between 8 to 11 characters",
            maxLength: 11,
            minLength: 8,
          },
        },
      },
    },
  ],
  properties: {
    AccountHolderAddress: {
      properties: {
        Address: {
          maxLength: 70,
          title: "Address",
          type: "string",
        },
        City: {
          maxLength: 35,
          title: "Town",
          type: "string",
        },
        State: {
          maxLength: 35,
          title: "State/Province",
          type: "string",
        },
      },
      required: ["State", "City", "Address"],
      title: "Account Holder Address",
      type: "object",
    },
    BankDetails: {
      properties: {
        AccountNumber: {
          maxLength: 20,
          minLength: 5,
          title: "Account Number",
          type: "string",
        },
        Bank: {
          oneOf: [
            {
              const: "LP001507",
              title: "Banca Digital Nequi",
            },
            {
              const: "CCAICOBB",
              title: "Banco Agrario",
            },
          ],
          title: "Bank",
          type: "string",
        },
        Type: {
          enum: ["Checking", "Savings"],
          title: "Account Type",
          type: "string",
        },
      },
      required: ["AccountNumber", "Bank", "Type"],
      title: "Bank Details",
      type: "object",
    },
    ID: {
      title: "ID Code",
      type: "string",
    },
    IDType: {
      enum: ["TaxID", "NationalID", "ForeignerID", "Passport"],
      title: "Identification Type",
      type: "string",
    },
    PaymentPurpose: {
      enum: [
        "family support",
        "education",
        "gift and donation",
        "medical treatment",
        "maintenance expenses",
        "travel",
        "small value remittance",
        "liberalized remittance",
        "construction expenses",
        "hotel accommodation",
        "advertising expenses",
        "advisory fees",
        "business insurance",
        "insurance claims",
        "delivery fees",
        "exported goods",
        "service charges",
        "loan payment",
        "office expenses",
        "property purchase",
        "property rental",
        "royalty fees",
        "shares investment",
        "fund investment",
        "tax payment",
        "transportation fees",
        "utility bills",
        "personal transfer",
        "salary payment",
        "other fees",
        "other",
        "own account abroad",
      ],
      title: "Payment Purpose",
      type: "string",
    },
  },
  required: [
    "AccountHolderAddress",
    "IDType",
    "ID",
    "PaymentPurpose",
    "BankDetails",
  ],
  type: "object",
};
