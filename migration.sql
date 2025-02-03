-- Up migration
CREATE TABLE properties (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  purchase_price DECIMAL(12,2) NOT NULL,
  interest_rate DECIMAL(5,2) NOT NULL,
  down_payment DECIMAL(12,2) NOT NULL,
  loan_length INTEGER NOT NULL,
  rental_income DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

-- Down migration
DROP TABLE properties;
