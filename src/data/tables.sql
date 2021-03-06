
CREATE TABLE IF NOT EXISTS
    products (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(100) NOT NULL,
        brand VARCHAR(100) NOT NULL,
        price INTEGER NOT NULL,
        image_url VARCHAR(200),
        category VARCHAR(100) NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
    );

CREATE TABLE IF NOT EXISTS
	reviews(
		comment VARCHAR(500) NOT NULL,
		rate INTEGER NOT NULL,
		product_id INTEGER REFERENCES products (id),
		created_at TIMESTAMPTZ DEFAULT NOW(),
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY
	);
