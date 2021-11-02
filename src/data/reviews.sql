

CREATE TABLE IF NOT EXISTS
    reviews (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        comment VARCHAR(50) NOT NULL,
        rate VARCHAR(50) NOT NULL,
        product_id 
        created_at TIMESTAMP DEFAULT NOW()   
    );


