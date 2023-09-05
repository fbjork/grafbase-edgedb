# EdgeDB and Grafbase example

To run locally with a database called `edgedb`, set the following environment variable:

```
EDGEDB_URL=http://localhost:10701/db/edgedb/edgeql
```

EdgeDB schema:
```
using extension edgeql_http version '1.0';
module default {
    type Product {
        required property name: std::str;
        required property price: std::int32;
    };
};
```
