# Prace s useEffect a FE filtrace dat

Zustaneme u komponenty Search. Upravime ji z FE filtrovani na BE filtrovani

- Upravte useEffect tak aby pri prazdne hodnote search nic nedotahoval.
- Data se dotahnout az v pripade vyplneny hodnoty search a budou vyuzivat BE filtr pomoci url. ?username_like=${search}
- Pokud nebude vyplneny search, zobrazte neco na zpusob "Type to search"

// request napr.
// https://jsonplaceholder.typicode.com/users?username_like=bre
