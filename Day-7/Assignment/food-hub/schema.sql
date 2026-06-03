-- Run this in psql or pgAdmin

CREATE DATABASE food_ordering;

\c food_ordering;

CREATE TABLE customers (
    cust_id  SERIAL PRIMARY KEY,
    name     VARCHAR(100) NOT NULL,
    email    VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE category (
    cat_id SERIAL PRIMARY KEY,
    name   VARCHAR(50) NOT NULL
);

CREATE TABLE menu_items (
    item_id     SERIAL PRIMARY KEY,
    item_name   VARCHAR(100) NOT NULL,
    price       NUMERIC(10,2) NOT NULL,
    description TEXT,
    image_url   VARCHAR(255),
    cat_id      INT REFERENCES category(cat_id),
    is_veg      BOOLEAN DEFAULT TRUE
);

CREATE TABLE orders (
    order_id   SERIAL PRIMARY KEY,
    cust_id    INT NOT NULL REFERENCES customers(cust_id),
    total      NUMERIC(10,2) NOT NULL,
    status     VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE order_items (
    id       SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES orders(order_id),
    item_id  INT NOT NULL REFERENCES menu_items(item_id),
    quantity INT NOT NULL
);

-- Seed categories
INSERT INTO category (name) VALUES ('Veg'), ('Non-Veg');

-- Seed menu items (password for test user: "password")
INSERT INTO customers (name, email, password) VALUES
('Test User', 'test@test.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

INSERT INTO menu_items (item_name, price, description, image_url, cat_id, is_veg) VALUES
('Margherita Pizza',  199.00, 'Classic tomato & mozzarella pizza',      'https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg', 1, TRUE),
('Veggie Burger',     149.00, 'Crispy veggie patty with fresh veggies', 'https://www.themealdb.com/images/media/meals/xrgqsx1487345411.jpg', 1, TRUE),
('Paneer Tikka',      229.00, 'Grilled paneer with spices',             'https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg', 1, TRUE),
('Masala Dosa',       129.00, 'Crispy dosa with spiced potato filling', 'https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg', 1, TRUE),
('Veg Fried Rice',    159.00, 'Wok-tossed rice with mixed veggies',     'https://www.themealdb.com/images/media/meals/1550441882.jpg',       1, TRUE),
('Chicken Burger',    179.00, 'Juicy grilled chicken burger',           'https://www.themealdb.com/images/media/meals/sywwoj1511461486.jpg', 2, FALSE),
('Chicken Biryani',   299.00, 'Aromatic basmati rice with chicken',     'https://www.themealdb.com/images/media/meals/utmxtu1511737919.jpg', 2, FALSE),
('Butter Chicken',    279.00, 'Creamy tomato-based chicken curry',      'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg', 2, FALSE);
