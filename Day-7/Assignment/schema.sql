CREATE DATABASE IF NOT EXISTS food_ordering;
USE food_ordering;

CREATE TABLE IF NOT EXISTS customers (
    cust_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS category (
    cat_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS menu_items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    cat_id INT,
    is_veg TINYINT(1) DEFAULT 1,
    FOREIGN KEY (cat_id) REFERENCES category(cat_id)
);

CREATE TABLE IF NOT EXISTS orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    cust_id INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cust_id) REFERENCES customers(cust_id)
);

CREATE TABLE IF NOT EXISTS order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    item_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (item_id) REFERENCES menu_items(item_id)
);

-- Sample data
INSERT IGNORE INTO customers (name, email, password) VALUES
('Test User', 'test@test.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'); -- password: password

INSERT IGNORE INTO category (cat_id, name) VALUES (1,'Veg'), (2,'Non-Veg');

INSERT IGNORE INTO menu_items (item_name, price, description, image_url, cat_id, is_veg) VALUES
('Margherita Pizza',    199.00, 'Classic tomato & mozzarella pizza',      'https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg', 1, 1),
('Veggie Burger',       149.00, 'Crispy veggie patty with fresh veggies', 'https://www.themealdb.com/images/media/meals/xrgqsx1487345411.jpg', 1, 1),
('Paneer Tikka',        229.00, 'Grilled paneer with spices',             'https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg', 1, 1),
('Chicken Burger',      179.00, 'Juicy grilled chicken burger',           'https://www.themealdb.com/images/media/meals/sywwoj1511461486.jpg', 2, 0),
('Chicken Biryani',     299.00, 'Aromatic basmati rice with chicken',     'https://www.themealdb.com/images/media/meals/utmxtu1511737919.jpg', 2, 0),
('Butter Chicken',      279.00, 'Creamy tomato-based chicken curry',      'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg', 2, 0),
('Masala Dosa',         129.00, 'Crispy dosa with spiced potato filling', 'https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg', 1, 1),
('Veg Fried Rice',      159.00, 'Wok-tossed rice with mixed veggies',    'https://www.themealdb.com/images/media/meals/1550441882.jpg',       1, 1);
