# Zakladni komponenty

Vytvorit komponenty `Form`, `Button` a `Input`.

- Form - prijima jen children a renderuje uvnitr <form> tagu
- Input - prijima name, onChange a renderuje <input onChange={onChange}/> a name
- Button - prijima name, onClick a renderuje <input type="button" onclick={onclick} /> a name

A vytvorte nasledujici strukturu

```jsx
<Form>
  <Input name="Nazev" onChange=(() => console.log('change')) />
  <Button name="Pridat" onClick=(() => console.log('click')) />
</Form>
```
