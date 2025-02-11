# spread

```ts
import { spread } from 'patronum';
// or
import { spread } from 'patronum/spread';
```

## `source = spread(targets)`

:::note since
patronum 2.1.0
Use `spread({ targets })` with patronum < 2.1.0
:::

### Motivation

This method allows to trigger many target at once, if they match the source structure.
It is useful when you need to destructure object and save values to different stores.

### Formulae

```ts
source = spread({ field: target, ... })
```

- When `source` is triggered with **object**, extract `field` from data, and trigger `target`
- `targets` can have multiple properties
- If the `source` was triggered with non-object, nothing would be happening
- If `source` is triggered with object but without propertpy `field`, target for this `field` will not be triggered

### Arguments

1. `targets` `(Record<string, Event<T> | Store<T> | Effect<T>>)` — Flat object which key is key in `source` payload, and value is unit to store value to.

### Returns

- `source` `(Event<T>)` — Source event, data passed to it should be an object with fields from `targets`

### Example

#### Conditionally save value to stores

```ts
import { createStore, createEvent, sample } from 'effector';
import { spread } from 'patronum';

const $first = createStore('');
const $last = createStore('');

const formReceived = createEvent();

sample({
  source: formReceived,
  filter: (form) => form.first.length > 0 && form.last.length > 0,
  target: spread({
    first: $first,
    last: $last,
  }),
});

$first.watch((first) => console.log('First name', first));
$last.watch((last) => console.log('Last name', last));

formReceived({ first: '', last: '' });
// Nothing, because filter returned true

formReceived({ first: 'Hello', last: 'World' });
// => First name Hello
// => Last name World
```

#### Nested spreading

```ts
const $targetA = createStore('');
const $targetB = createStore(0);
const $targetC = createStore(false);

const trigger = spread({
  first: $targetA,
  second: spread({
    foo: $targetB,
    bar: $targetC,
  }),
});

$targetA.watch((payload) => console.log('targetA', payload));
$targetB.watch((payload) => console.log('targetB', payload));
$targetC.watch((payload) => console.log('targetC', payload));

trigger({
  first: 'Hello',
  second: {
    foo: 200,
    bar: true,
  },
});
// => targetA Hello
// => targetB 200
// => targetC true
```

## `spread({ source, targets })`

### Motivation

This method allows to trigger many target at once, if they match the source structure.
It is useful when you need to destructure object and save values to different stores.

### Formulae

```ts
spread({ source, targets: { field: target, ... } })
```

- When `source` is triggered with **object**, extract `field` from data, and trigger `target`
- `targets` can have multiple properties
- If the `source` was triggered with non-object, nothing would be happening
- If `source` is triggered with object but without propertpy `field`, target for this `field` will not be triggered

### Arguments

1. `source` `(Event<T>` | `Store<T>` | `Effect<T>)` — Source unit, data passed to it should be an object with fields from `targets`
2. `targets` `(Record<string, Event<T> | Store<T> | Effect<T>>)` — Flat object which key is key in `source` payload, and value is unit to store value to.

### Example

#### Save fields of payload to different stores

```ts
import { createStore, createEvent } from 'effector';
import { spread } from 'patronum';

const $first = createStore('');
const $last = createStore('');

const formReceived = createEvent();

spread({
  source: formReceived,
  targets: {
    first: $first,
    last: $last,
  },
});

$first.watch((first) => console.log('First name', first));
$last.watch((last) => console.log('Last name', last));

formReceived({ first: 'Sergey', last: 'Sova' });
// => First name Sergey
// => Last name Sova

formReceived({ first: 'Patronum' });
// => First name Patronum
```

#### Call events on store changes

```ts
import { createStore, createEvent } from 'effector';
import { spread } from 'patronum/spread';

const save = createEvent();
const $form = createStore(null).on(save, (_, form) => form);

const firstNameChanged = createEvent();
const lastNameChanged = createEvent();

spread({
  source: $form,
  targets: {
    first: firstNameChanged,
    last: lastNameChanged,
  },
});

firstNameChanged.watch((first) => console.log('First name', first));
lastNameChanged.watch((last) => console.log('Last name', last));

save({ first: 'Sergey', last: 'Sova' });
// => First name Sergey
// => Last name Sova

save(null);
// Nothing, because store is null
```

## `source = spread({ targets })`

### Motivation

This overload recieves `targets` as an object. May be useful for additional clarity, but it's longer to write

### Formulae

```ts
source = spread({ targets: { field: target, ... } })
```

- When `source` is triggered with **object**, extract `field` from data, and trigger `target`
- `targets` can have multiple properties
- If the `source` was triggered with non-object, nothing would be happening
- If `source` is triggered with object but without propertpy `field`, target for this `field` will not be triggered

### Arguments

1. `targets` `(Record<string, Event<T> | Store<T> | Effect<T>>)` — Flat object which key is key in `source` payload, and value is unit to store value to.

### Returns

- `source` `(Event<T>)` — Source event, data passed to it should be an object with fields from `targets`
