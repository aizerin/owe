# Prace s useSearch

Posledni cast v komponente Search

- Pridejte loading state do useSearch nez se nactou data z BE
- Pouzijte useSearch misto toho co je ted v komponente search a zobrazte loading state

```js
const { searchData, loading } = useSearch({
  searchText,
  itemExtractor,
  urlQuery,
});
```
