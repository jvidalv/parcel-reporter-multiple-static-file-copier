# parcel-reporter-multiple-static-file-copier
[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/parcel-reporter-multiple-static-file-copier)

This is a plugin for [Parcel v2](https://v2.parceljs.org) that **copies multiple specified files and folders into specified folders** once build finishes **successfully** (Event: buildSuccess).

Inspired by [this plugin](https://github.com/elwin013/parcel-plugin-static-files-copy).

## Install

Yarn
```bash
$ yarn add -D parcel-reporter-multiple-static-file-copier
```

NPM
```bash
$ npm install parcel-reporter-multiple-static-file-copier --save-dev
```

## Usage

Configuration is set under `multipleStaticFileCopier` in `package.json`. It must be an array of objects containing `origin` and `destination` props:

| Property  | Path |
| ------------- | ------------- |
| origin  | Example: _node_modules/@package/public_  |
| destination  | Example: _dist/public_  |



You **⚠️  must extend** Parcel configuration with the plugin name in `.parcelrc`:

```json
{
  "reporters": [
    "...",
    "parcel-reporter-multiple-static-file-copier"
  ]
}
```
_*Note that the "..." notation is used to keep the default report plugins loaded by Parcel._

## Example
This example will copy the contents of the folder _public_ into the folder _dist/public_.
_(Note that both are in the project root)_

`package.json`
```json
{
  "multipleStaticFileCopier": [
    {
      "origin": "public",
      "destination": "dist/public/"
    }
  ]
}
```

## Todo

- [ ] Add event type prop in configuration.
