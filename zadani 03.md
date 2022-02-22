# Dalsi prace se state

Pridejte do komponenty Form state dalsi state `inputHistory`

- inputHistory bude pole ktere drzi poslednich 10 zaznamu (slice)
- na onClick v buttonu pridejte aktualni hodnotu pole `nazev` do `inputHistory` a smazte aktualni hodnotu Inputu z `formState`
- vyrenderujte hodnoty

```jsx
<Form>
  <Button name="Pridat" onClick={...} />
  {inputHistory.map(...)}
</Form>
```
