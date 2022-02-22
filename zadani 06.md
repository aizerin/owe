# Prace s useCallback

Zase zustaneme u komponenty search a upravime ji na obecnou komponentu.

- pridat dve nove propsy. obe funkce
- prvni bude handlovat definici url v useEffect (search) => `url${search}`
- druha bude renderovat obsah li elementu (item) => item.username

```jsx
<Form>
  <Search
    itemExtractor={(item) => item.username}
    urlQuery={(search) =>
      `https://jsonplaceholder.typicode.com/users?username_like=${search}`
    }
  />
  <Search
    itemExtractor={(item) => item.title}
    urlQuery={(search) =>
      `https://jsonplaceholder.typicode.com/posts?title_like=${search}`
    }
  />
  ...
</Form>
```
