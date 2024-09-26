export const schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    AccountHolderAddress: {
      properties: {
        Address: {
          maxLength: 70,
          title: "Beneficiary Address",
          type: "string",
        },
        City: {
          maxLength: 35,
          title: "Beneficiary Town Name",
          type: "string",
        },
        State: {
          maxLength: 35,
          title: "Beneficiary Country Sub Division (State/Province)",
          type: "string",
        },
      },
      required: ["State", "City", "Address"],
      type: "object",
    },
    IdentifierDetails: {
      allOf: [
        {
          if: {
            properties: {
              IdentifierType: {
                const: "TaxID",
              },
            },
          },
          then: {
            properties: {
              Identifier: {
                const: "",
                errorMessage: "TaxID must be empty in the identifier",
              },
            },
          },
        },
        {
          if: {
            properties: {
              IdentifierType: {
                const: "PhoneNumber",
              },
            },
          },
          then: {
            properties: {
              Identifier: {
                const: "",
                errorMessage: "PhoneNumber must be empty in the identifier",
              },
            },
          },
        },
        {
          if: {
            properties: {
              IdentifierType: {
                const: "Email",
              },
            },
          },
          then: {
            properties: {
              Identifier: {
                errorMessage: "Email must be a valid email address",
                format: "email",
              },
            },
            required: ["Identifier"],
          },
        },
        {
          if: {
            properties: {
              IdentifierType: {
                const: "UUID",
              },
            },
          },
          then: {
            properties: {
              Identifier: {
                errorMessage: "Alias must be between 3 and 32 characters",
                maxLength: 32,
                minLength: 3,
              },
            },
            required: ["Identifier"],
          },
        },
      ],
      properties: {
        Identifier: {
          title: "Identifier",
          type: "string",
        },
        IdentifierType: {
          enum: ["PhoneNumber", "Email", "TaxID", "UUID"],
          title: "Identifier Type",
          type: "string",
        },
      },
      required: ["IdentifierType"],
      type: "object",
    },
    PaymentPurpose: {
      enum: [
        "FAMILY_SUPPORT",
        "EDUCATION",
        "GIFT_AND_DONATION",
        "MEDICAL_TREATMENT",
        "MAINTENANCE_EXPENSES",
        "TRAVEL",
        "SMALL_VALUE_REMITTANCE",
        "LIBERALIZED_REMITTANCE",
        "CONSTRUCTION_EXPENSES",
        "HOTEL_ACCOMMODATION",
        "ADVERTISING_EXPENSES",
        "ADVISORY_FEES",
        "BUSINESS_INSURANCE",
        "INSURANCE_CLAIMS",
        "DELIVERY_FEES",
        "EXPORTED_GOODS",
        "SERVICE_CHARGES",
        "LOAN_PAYMENT",
        "OFFICE_EXPENSES",
        "PROPERTY_PURCHASE",
        "PROPERTY_RENTAL",
        "ROYALTY_FEES",
        "SHARES_INVESTMENT",
        "FUND_INVESTMENT",
        "TAX_PAYMENT",
        "TRANSPORTATION_FEES",
        "UTILITY_BILLS",
        "PERSONAL_TRANSFER",
        "SALARY_PAYMENT",
        "OTHER_FEES",
        "OTHER",
        "OWN_ACCOUNT_ABROAD",
      ],
      title: "Payment Purpose",
      type: "string",
    },
    PhoneNumber: {
      pattern: "^(\\+55)?[0-9]{11}$",
      title: "Phone Number",
      type: "string",
    },
    TaxID: {
      pattern: "^\\d{11}$",
      title: "Beneficiary Tax ID (CPF)",
      type: "string",
    },
  },
  required: [
    "TaxID",
    "PhoneNumber",
    "IdentifierDetails",
    "AccountHolderAddress",
    "PaymentPurpose",
  ],
  type: "object",
};
