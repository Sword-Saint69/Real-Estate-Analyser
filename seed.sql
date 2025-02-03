-- Seed data for properties table
INSERT INTO properties (
  name, address, purchase_price, interest_rate, down_payment, loan_length, rental_income, created_at, updated_at
) VALUES
  ('Sunny Apartments', '123 Sunshine St, Sunville, CA 90001', 450000.00, 3.25, 90000.00, 30, 3500.00, NOW(), NOW()),
  ('Greenview Villas', '456 Green Valley Rd, Greenway, TX 75001', 550000.00, 3.75, 110000.00, 30, 4200.00, NOW(), NOW()),
  ('Blue Ocean Condos', '789 Ocean Blvd, Coastline, FL 33001', 750000.00, 3.5, 150000.00, 30, 5000.00, NOW(), NOW()),
  ('Mountainview Homes', '135 Mountain Top Ln, Highland, CO 80001', 350000.00, 2.75, 70000.00, 15, 2700.00, NOW(), NOW()),
  ('Riverfront Residences', '246 Riverside Dr, Rivercity, WA 98001', 600000.00, 3.0, 120000.00, 30, 4500.00, NOW(), NOW());
