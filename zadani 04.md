# Prace s useEffect a FE filtrace dat

Vytvorte komponentu Search.

- V komponente pouzijte useEffect na dotazeni vsech uzivatelu a ty ulozte do state `users`.
  - https://jsonplaceholder.typicode.com/users
- Nasledne pridejte hotovou komponentu Input a udelat pro ni stav. V zavislosti na jejim stavu vyfiltrujte seznam uzivatelu dle `username` (pouzijte useMemo).
- Uzivatele zobrazte jako seznam <ul> a <li> a v li zobrazne pouze jejich `username`

```jsx
<Form>
  <Search />
  ...
</Form>

Search

<Input>
{users.map(...)}
```
