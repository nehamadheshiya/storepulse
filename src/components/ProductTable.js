import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const ProductTable = () => {
  const data = [
    {
      "id": 1,
      "name": "Product 1",
      "brand": "Canon",
      "price": 448.26,
      "category": "Mobile Phones",
      "rating": 1.7,
      "stock": 47
    },
    {
      "id": 2,
      "name": "Product 2",
      "brand": "LG",
      "price": 1845.26,
      "category": "Laptops",
      "rating": 2.6,
      "stock": 16
    },
    {
      "id": 3,
      "name": "Product 3",
      "brand": "Canon",
      "price": 955.94,
      "category": "Laptops",
      "rating": 1.4,
      "stock": 99
    },
    {
      "id": 4,
      "name": "Product 4",
      "brand": "Dell",
      "price": 342.44,
      "category": "Televisions",
      "rating": 1.9,
      "stock": 67
    },
    {
      "id": 5,
      "name": "Product 5",
      "brand": "Sony",
      "price": 859.68,
      "category": "Cameras",
      "rating": 1.5,
      "stock": 52
    },
    {
      "id": 6,
      "name": "Product 6",
      "brand": "Samsung",
      "price": 1471.08,
      "category": "Tablets",
      "rating": 1.0,
      "stock": 31
    },
    {
      "id": 7,
      "name": "Product 7",
      "brand": "Samsung",
      "price": 2067.57,
      "category": "Laptops",
      "rating": 0.4,
      "stock": 70
    },
    {
      "id": 8,
      "name": "Product 8",
      "brand": "Samsung",
      "price": 2011.06,
      "category": "Cameras",
      "rating": 4.2,
      "stock": 62
    },
    {
      "id": 9,
      "name": "Product 9",
      "brand": "Sony",
      "price": 588.91,
      "category": "Mobile Phones",
      "rating": 0.1,
      "stock": 93
    },
    {
      "id": 10,
      "name": "Product 10",
      "brand": "Apple",
      "price": 1666.24,
      "category": "Cameras",
      "rating": 2.8,
      "stock": 8
    },
    {
      "id": 11,
      "name": "Product 11",
      "brand": "Dell",
      "price": 1598.0,
      "category": "Laptops",
      "rating": 0.9,
      "stock": 65
    },
    {
      "id": 12,
      "name": "Product 12",
      "brand": "Lenovo",
      "price": 731.08,
      "category": "Mobile Phones",
      "rating": 1.9,
      "stock": 35
    },
    {
      "id": 13,
      "name": "Product 13",
      "brand": "Dell",
      "price": 745.39,
      "category": "Laptops",
      "rating": 1.9,
      "stock": 71
    },
    {
      "id": 14,
      "name": "Product 14",
      "brand": "Canon",
      "price": 1728.62,
      "category": "Televisions",
      "rating": 3.6,
      "stock": 72
    },
    {
      "id": 15,
      "name": "Product 15",
      "brand": "Samsung",
      "price": 645.77,
      "category": "Mobile Phones",
      "rating": 1.6,
      "stock": 30
    },
    {
      "id": 16,
      "name": "Product 16",
      "brand": "Nikon",
      "price": 1402.11,
      "category": "Tablets",
      "rating": 0.2,
      "stock": 51
    },
    {
      "id": 17,
      "name": "Product 17",
      "brand": "Dell",
      "price": 1457.76,
      "category": "Cameras",
      "rating": 4.9,
      "stock": 94
    },
    {
      "id": 18,
      "name": "Product 18",
      "brand": "Apple",
      "price": 1830.15,
      "category": "Cameras",
      "rating": 4.9,
      "stock": 52
    },
    {
      "id": 19,
      "name": "Product 19",
      "brand": "LG",
      "price": 925.91,
      "category": "Mobile Phones",
      "rating": 2.6,
      "stock": 48
    },
    {
      "id": 20,
      "name": "Product 20",
      "brand": "Asus",
      "price": 1300.29,
      "category": "Mobile Phones",
      "rating": 3.9,
      "stock": 15
    },
    {
      "id": 21,
      "name": "Product 21",
      "brand": "Asus",
      "price": 1008.43,
      "category": "Mobile Phones",
      "rating": 5.0,
      "stock": 76
    },
    {
      "id": 22,
      "name": "Product 22",
      "brand": "Asus",
      "price": 2039.86,
      "category": "Cameras",
      "rating": 1.8,
      "stock": 65
    },
    {
      "id": 23,
      "name": "Product 23",
      "brand": "Apple",
      "price": 1269.28,
      "category": "Tablets",
      "rating": 1.7,
      "stock": 30
    },
    {
      "id": 24,
      "name": "Product 24",
      "brand": "Samsung",
      "price": 2037.39,
      "category": "Laptops",
      "rating": 4.9,
      "stock": 9
    },
    {
      "id": 25,
      "name": "Product 25",
      "brand": "Nikon",
      "price": 1827.51,
      "category": "Televisions",
      "rating": 1.4,
      "stock": 50
    },
    {
      "id": 26,
      "name": "Product 26",
      "brand": "Nikon",
      "price": 1756.23,
      "category": "Televisions",
      "rating": 4.0,
      "stock": 42
    },
    {
      "id": 27,
      "name": "Product 27",
      "brand": "Lenovo",
      "price": 1503.1,
      "category": "Televisions",
      "rating": 0.8,
      "stock": 96
    },
    {
      "id": 28,
      "name": "Product 28",
      "brand": "Apple",
      "price": 1648.59,
      "category": "Tablets",
      "rating": 4.3,
      "stock": 52
    },
    {
      "id": 29,
      "name": "Product 29",
      "brand": "Canon",
      "price": 1466.27,
      "category": "Televisions",
      "rating": 4.6,
      "stock": 3
    },
    {
      "id": 30,
      "name": "Product 30",
      "brand": "Dell",
      "price": 704.43,
      "category": "Tablets",
      "rating": 1.8,
      "stock": 40
    },
    {
      "id": 31,
      "name": "Product 31",
      "brand": "Lenovo",
      "price": 346.77,
      "category": "Cameras",
      "rating": 1.3,
      "stock": 63
    },
    {
      "id": 32,
      "name": "Product 32",
      "brand": "Nikon",
      "price": 2034.67,
      "category": "Televisions",
      "rating": 2.1,
      "stock": 20
    },
    {
      "id": 33,
      "name": "Product 33",
      "brand": "Samsung",
      "price": 1976.26,
      "category": "Cameras",
      "rating": 0.3,
      "stock": 93
    },
    {
      "id": 34,
      "name": "Product 34",
      "brand": "Nikon",
      "price": 522.9,
      "category": "Mobile Phones",
      "rating": 0.1,
      "stock": 30
    },
    {
      "id": 35,
      "name": "Product 35",
      "brand": "Dell",
      "price": 585.91,
      "category": "Tablets",
      "rating": 1.4,
      "stock": 46
    },
    {
      "id": 36,
      "name": "Product 36",
      "brand": "LG",
      "price": 849.84,
      "category": "Televisions",
      "rating": 0.7,
      "stock": 100
    },
    {
      "id": 37,
      "name": "Product 37",
      "brand": "Samsung",
      "price": 1122.15,
      "category": "Cameras",
      "rating": 4.8,
      "stock": 61
    },
    {
      "id": 38,
      "name": "Product 38",
      "brand": "LG",
      "price": 891.09,
      "category": "Cameras",
      "rating": 3.6,
      "stock": 61
    },
    {
      "id": 39,
      "name": "Product 39",
      "brand": "Dell",
      "price": 273.17,
      "category": "Mobile Phones",
      "rating": 2.5,
      "stock": 17
    },
    {
      "id": 40,
      "name": "Product 40",
      "brand": "Samsung",
      "price": 2002.53,
      "category": "Cameras",
      "rating": 3.2,
      "stock": 7
    },
    {
      "id": 41,
      "name": "Product 41",
      "brand": "HP",
      "price": 1710.45,
      "category": "Tablets",
      "rating": 2.1,
      "stock": 9
    },
    {
      "id": 42,
      "name": "Product 42",
      "brand": "Asus",
      "price": 185.42,
      "category": "Tablets",
      "rating": 2.4,
      "stock": 38
    },
    {
      "id": 43,
      "name": "Product 43",
      "brand": "Dell",
      "price": 185.42,
      "category": "Tablets",
      "rating": 3.4,
      "stock": 64
    },
    {
      "id": 44,
      "name": "Product 44",
      "brand": "Samsung",
      "price": 147.22,
      "category": "Tablets",
      "rating": 4.9,
      "stock": 1
    },
    {
      "id": 45,
      "name": "Product 45",
      "brand": "Sony",
      "price": 1456.75,
      "category": "Mobile Phones",
      "rating": 2.7,
      "stock": 90
    },
    {
      "id": 46,
      "name": "Product 46",
      "brand": "Lenovo",
      "price": 423.84,
      "category": "Laptops",
      "rating": 0.8,
      "stock": 11
    },
    {
      "id": 47,
      "name": "Product 47",
      "brand": "Asus",
      "price": 1584.49,
      "category": "Laptops",
      "rating": 2.8,
      "stock": 1
    },
    {
      "id": 48,
      "name": "Product 48",
      "brand": "Dell",
      "price": 542.02,
      "category": "Televisions",
      "rating": 2.6,
      "stock": 16
    },
    {
      "id": 49,
      "name": "Product 49",
      "brand": "HP",
      "price": 1509.75,
      "category": "Tablets",
      "rating": 0.4,
      "stock": 87
    },
    {
      "id": 50,
      "name": "Product 50",
      "brand": "Sony",
      "price": 517.54,
      "category": "Mobile Phones",
      "rating": 2.7,
      "stock": 43
    },
    {
      "id": 51,
      "name": "Product 51",
      "brand": "HP",
      "price": 1916.39,
      "category": "Laptops",
      "rating": 2.7,
      "stock": 98
    },
    {
      "id": 52,
      "name": "Product 52",
      "brand": "HP",
      "price": 1431.81,
      "category": "Mobile Phones",
      "rating": 3.0,
      "stock": 51
    },
    {
      "id": 53,
      "name": "Product 53",
      "brand": "Asus",
      "price": 1214.63,
      "category": "Mobile Phones",
      "rating": 2.9,
      "stock": 74
    },
    {
      "id": 54,
      "name": "Product 54",
      "brand": "Samsung",
      "price": 1755.49,
      "category": "Laptops",
      "rating": 4.4,
      "stock": 43
    },
    {
      "id": 55,
      "name": "Product 55",
      "brand": "HP",
      "price": 1590.53,
      "category": "Tablets",
      "rating": 3.7,
      "stock": 70
    },
    {
      "id": 56,
      "name": "Product 56",
      "brand": "Canon",
      "price": 240.53,
      "category": "Cameras",
      "rating": 4.3,
      "stock": 9
    },
    {
      "id": 57,
      "name": "Product 57",
      "brand": "Dell",
      "price": 1763.27,
      "category": "Mobile Phones",
      "rating": 3.1,
      "stock": 3
    },
    {
      "id": 58,
      "name": "Product 58",
      "brand": "Sony",
      "price": 1263.65,
      "category": "Laptops",
      "rating": 2.4,
      "stock": 13
    },
    {
      "id": 59,
      "name": "Product 59",
      "brand": "Lenovo",
      "price": 981.28,
      "category": "Tablets",
      "rating": 2.8,
      "stock": 27
    },
    {
      "id": 60,
      "name": "Product 60",
      "brand": "Samsung",
      "price": 1153.05,
      "category": "Televisions",
      "rating": 4.2,
      "stock": 45
    },
    {
      "id": 61,
      "name": "Product 61",
      "brand": "Samsung",
      "price": 485.79,
      "category": "Tablets",
      "rating": 2.1,
      "stock": 12
    },
    {
      "id": 62,
      "name": "Product 62",
      "brand": "Canon",
      "price": 134.09,
      "category": "Tablets",
      "rating": 4.2,
      "stock": 42
    },
    {
      "id": 63,
      "name": "Product 63",
      "brand": "Dell",
      "price": 232.62,
      "category": "Cameras",
      "rating": 0.6,
      "stock": 99
    },
    {
      "id": 64,
      "name": "Product 64",
      "brand": "Dell",
      "price": 795.73,
      "category": "Tablets",
      "rating": 2.9,
      "stock": 6
    },
    {
      "id": 65,
      "name": "Product 65",
      "brand": "Nikon",
      "price": 1504.48,
      "category": "Tablets",
      "rating": 2.9,
      "stock": 46
    },
    {
      "id": 66,
      "name": "Product 66",
      "brand": "HP",
      "price": 1653.94,
      "category": "Cameras",
      "rating": 0.2,
      "stock": 61
    },
    {
      "id": 67,
      "name": "Product 67",
      "brand": "Canon",
      "price": 633.15,
      "category": "Laptops",
      "rating": 1.5,
      "stock": 77
    },
    {
      "id": 68,
      "name": "Product 68",
      "brand": "Samsung",
      "price": 1561.95,
      "category": "Tablets",
      "rating": 3.0,
      "stock": 91
    },
    {
      "id": 69,
      "name": "Product 69",
      "brand": "Sony",
      "price": 1075.13,
      "category": "Tablets",
      "rating": 2.0,
      "stock": 65
    },
    {
      "id": 70,
      "name": "Product 70",
      "brand": "Dell",
      "price": 136.07,
      "category": "Televisions",
      "rating": 1.6,
      "stock": 60
    },
    {
      "id": 71,
      "name": "Product 71",
      "brand": "Apple",
      "price": 466.79,
      "category": "Tablets",
      "rating": 3.2,
      "stock": 61
    },
    {
      "id": 72,
      "name": "Product 72",
      "brand": "Nikon",
      "price": 847.05,
      "category": "Mobile Phones",
      "rating": 0.3,
      "stock": 79
    },
    {
      "id": 73,
      "name": "Product 73",
      "brand": "Nikon",
      "price": 1589.76,
      "category": "Tablets",
      "rating": 2.0,
      "stock": 5
    },
    {
      "id": 74,
      "name": "Product 74",
      "brand": "Lenovo",
      "price": 592.99,
      "category": "Cameras",
      "rating": 2.2,
      "stock": 35
    },
    {
      "id": 75,
      "name": "Product 75",
      "brand": "LG",
      "price": 1769.97,
      "category": "Mobile Phones",
      "rating": 3.1,
      "stock": 30
    },
    {
      "id": 76,
      "name": "Product 76",
      "brand": "Sony",
      "price": 307.3,
      "category": "Laptops",
      "rating": 1.7,
      "stock": 48
    },
    {
      "id": 77,
      "name": "Product 77",
      "brand": "Apple",
      "price": 1348.84,
      "category": "Cameras",
      "rating": 3.7,
      "stock": 90
    },
    {
      "id": 78,
      "name": "Product 78",
      "brand": "Canon",
      "price": 1996.48,
      "category": "Televisions",
      "rating": 1.7,
      "stock": 26
    },
    {
      "id": 79,
      "name": "Product 79",
      "brand": "Asus",
      "price": 1109.73,
      "category": "Mobile Phones",
      "rating": 0.9,
      "stock": 25
    },
    {
      "id": 80,
      "name": "Product 80",
      "brand": "Sony",
      "price": 2018.57,
      "category": "Cameras",
      "rating": 3.7,
      "stock": 94
    },
    {
      "id": 81,
      "name": "Product 81",
      "brand": "Nikon",
      "price": 1337.07,
      "category": "Televisions",
      "rating": 4.7,
      "stock": 78
    },
    {
      "id": 82,
      "name": "Product 82",
      "brand": "Sony",
      "price": 1093.81,
      "category": "Televisions",
      "rating": 4.3,
      "stock": 32
    },
    {
      "id": 83,
      "name": "Product 83",
      "brand": "Nikon",
      "price": 1934.67,
      "category": "Cameras",
      "rating": 1.6,
      "stock": 67
    },
    {
      "id": 84,
      "name": "Product 84",
      "brand": "Lenovo",
      "price": 581.44,
      "category": "Mobile Phones",
      "rating": 3.3,
      "stock": 59
    },
    {
      "id": 85,
      "name": "Product 85",
      "brand": "Nikon",
      "price": 1812.15,
      "category": "Tablets",
      "rating": 0.1,
      "stock": 31
    },
    {
      "id": 86,
      "name": "Product 86",
      "brand": "HP",
      "price": 2048.44,
      "category": "Televisions",
      "rating": 4.4,
      "stock": 56
    },
    {
      "id": 87,
      "name": "Product 87",
      "brand": "LG",
      "price": 1090.96,
      "category": "Cameras",
      "rating": 2.9,
      "stock": 35
    },
    {
      "id": 88,
      "name": "Product 88",
      "brand": "Samsung",
      "price": 1458.51,
      "category": "Mobile Phones",
      "rating": 0.6,
      "stock": 15
    },
    {
      "id": 89,
      "name": "Product 89",
      "brand": "Sony",
      "price": 807.12,
      "category": "Tablets",
      "rating": 1.2,
      "stock": 21
    },
    {
      "id": 90,
      "name": "Product 90",
      "brand": "Asus",
      "price": 940.6,
      "category": "Tablets",
      "rating": 0.8,
      "stock": 76
    },
    {
      "id": 91,
      "name": "Product 91",
      "brand": "Asus",
      "price": 406.44,
      "category": "Laptops",
      "rating": 0.6,
      "stock": 43
    },
    {
      "id": 92,
      "name": "Product 92",
      "brand": "Lenovo",
      "price": 2014.09,
      "category": "Tablets",
      "rating": 1.0,
      "stock": 20
    },
    {
      "id": 93,
      "name": "Product 93",
      "brand": "Canon",
      "price": 1783.23,
      "category": "Tablets",
      "rating": 2.7,
      "stock": 62
    },
    {
      "id": 94,
      "name": "Product 94",
      "brand": "Nikon",
      "price": 1260.14,
      "category": "Cameras",
      "rating": 1.3,
      "stock": 82
    },
    {
      "id": 95,
      "name": "Product 95",
      "brand": "Apple",
      "price": 1676.29,
      "category": "Tablets",
      "rating": 1.6,
      "stock": 65
    },
    {
      "id": 96,
      "name": "Product 96",
      "brand": "Sony",
      "price": 1119.05,
      "category": "Laptops",
      "rating": 2.0,
      "stock": 51
    },
    {
      "id": 97,
      "name": "Product 97",
      "brand": "Canon",
      "price": 1554.17,
      "category": "Laptops",
      "rating": 3.5,
      "stock": 48
    },
    {
      "id": 98,
      "name": "Product 98",
      "brand": "Asus",
      "price": 1299.43,
      "category": "Tablets",
      "rating": 2.1,
      "stock": 17
    },
    {
      "id": 99,
      "name": "Product 99",
      "brand": "Sony",
      "price": 572.63,
      "category": "Cameras",
      "rating": 3.8,
      "stock": 37
    },
    {
      "id": 100,
      "name": "Product 100",
      "brand": "Dell",
      "price": 467.41,
      "category": "Tablets",
      "rating": 2.9,
      "stock": 64
    }
  ]

  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);

    const result = data.filter(
      (item) =>
        item.id.toString().toLowerCase().includes(searchValue) ||
        item.name.toLowerCase().includes(searchValue) ||
        item.brand.toLowerCase().includes(searchValue) ||
        item.category.toLowerCase().includes(searchValue)||
        item.price.toString().toLowerCase().includes(searchValue) ||
        item.rating.toString().toLowerCase().includes(searchValue) ||
        item.stock.toString().toLowerCase().includes(searchValue)

    );
    setFilteredData(result);
  };

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: 'Name', selector: (row) => row.name, sortable: true },
    { name: 'Brand', selector: (row) => row.brand, sortable: true },
    { name: 'Price', selector: (row) => `$${row.price.toFixed(2)}`, sortable: true },
    { name: 'Category', selector: (row) => row.category, sortable: true },
    { name: 'Rating', selector: (row) => row.rating, sortable: true },
    { name: 'Stock', selector: (row) => row.stock, sortable: true },
  ];

  return (
    <div style={{ padding: '20px' }}>
        <h1> Product Table</h1>
      <input
        type="text"
        placeholder="Search by name, brand, or category...etc"
        value={search}
        onChange={handleSearch}
        style={{
          marginBottom: '20px',
          padding: '10px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />
      <DataTable
        columns={columns}
        data={filteredData}
        // pagination
        highlightOnHover
      />
    </div>
  );
};

export default ProductTable;