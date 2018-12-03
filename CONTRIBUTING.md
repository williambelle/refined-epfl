Contributing
============

Welcome, so you are thinking about contributing ?

Awesome, this a great place to start.

Setup
-----

```bash
gem install sass
git clone git@github.com:williambelle/refined-epfl.git
cd refined-epfl
npm i
```

Test
----

```bash
npm t
```

Build
-----

```bash
npm run build
```

or

```bash
npm run serve
```

to update source continuously.

Run
---

Chrome:

  1. Open Tools -> Extensions
  2. Check the "Developer Mode" option (if not already)
  3. Select "Load unpacked extension"
  4. Navigate to the project `refined-epfl/dist/chrome` and click select

Firefox:

  1. Open Tools -> Add-ons
  2. Click "Debug Add-ons"
  3. Check the "Enable add-on debugging" option (if not already)
  4. Select "Load Temporary Add-on"
  5. Navigate to the project `refined-epfl/dist/firefox` and click open
  
Opera:

  1. View -> Show Extensions
  2. Click on "Developer Mode" button (if not already)
  3. Click on "Load Unpacked Extension..."
  4. Navigate to the project `refined-epfl/dist/chrome` and click select

Package
-------

```bash
npm run package
```

License
-------

The MIT License (MIT)
