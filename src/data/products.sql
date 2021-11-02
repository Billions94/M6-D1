
CREATE TABLE IF NOT EXISTS
    products (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(50) NOT NULL,
        description VARCHAR(50) NOT NULL,
        brand VARCHAR(50) NOT NULL,
        price INTEGER NOT NULL,
        image_url VARCHAR() NOT NULL,
        category VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
    );