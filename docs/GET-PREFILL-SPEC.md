# GET Prefill Spec

## Idea

URL query params can set form values directly by field key.

The form does not navigate branch-by-branch manually.
It just receives values in `state` and then automatically shows the steps that match that state.

## Format

- `ea_<key>=<value>`

## Examples

```txt
?ea_gebaeudetyp=WG
```

```txt
?ea_ausweisart=Bedarfsausweis&ea_gebaeudetyp=WG
```

```txt
?ea_keller_heizstatus=Ja&ea_kellerdecke_daemmung=Nein
```

## How It Works

1. Build form state from defaults.
2. Apply saved draft on top of defaults.
3. Read query params from URL.
4. For each param with prefix `ea_`, write its value into form `state` by key only if that field is still empty.
5. Recompute visible steps from the updated `state`.

## Rules

- Priority on initial load is: `draft > GET-for-empty > defaults`
- Query params may define full or partial form state.
- The form must show the deepest valid state possible from the provided values.
- Unknown params are ignored.
- Unsupported field types can be ignored in version 1.
- GET-prefill is applied only once during initial load.
- After initial load, the user can freely change any field value.

## Acceptance

1. `ea_<key>` writes a value into form state.
2. If that value affects visibility, the form updates visible steps automatically.
3. Unknown params do not break the form.
