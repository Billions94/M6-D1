
CREATE TABLE IF NOT EXISTS
    products (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(100) NOT NULL,
        brand VARCHAR(100) NOT NULL,
        price INTEGER NOT NULL,
        image_url TEXT NOT NULL,
        category VARCHAR(100) NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
    );