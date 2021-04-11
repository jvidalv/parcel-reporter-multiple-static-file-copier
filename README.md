#parcel-reporter-static-file-copier

This is a plugin for [Parcel v2](https://v2.parceljs.org) that **copies multiple specified files and folders into specified folders** once build finishes **successfully** (Event: buildSuccess).  

Inspired by [this plugin](https://github.com/elwin013/parcel-plugin-static-files-copy).

## Install

```bash
$ yarn add -D parcel-reporter-static-file-copier
```

## Usage

Configuration is set under `staticFilesCopy` in `package.json`.

`staticFilesCopy` must be an array of objects containing the following props:

| Property  | Path |
| ------------- | ------------- |
| origin  | Example: _node_modules/@package/public_  |
| destination  | Example: _dist/public_  |

You must extend `.parcelrc`
```json
{
  // .parcelrc
  "reporters": [
    "...",
    "parcel-reporter-static-files-copy"
  ]
}
```
_*Note that the "..." notation is used to keep the default report plugins loaded by Parcel._

## Example
This example will copy the contents of the folder `public` into the folder `dist/public`.
_(Note that both `public` and `dist` are in the project root)_

```json
{
  // package.json
  "staticFilesCopy": [
    {
      "origin": "public",
      "destination": "dist/public/"
    }
  ]
}
```

## Todo

- [ ] Add event type prop in configuration.
