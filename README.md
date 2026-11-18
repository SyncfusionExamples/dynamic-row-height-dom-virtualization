# Angular Grid with Dynamic Row Height

This Angular application demonstrates a Syncfusion Grid with DOM virtualization and dynamically measured row heights. The grid displays employee data with a custom employee cell template, status indicators, sorting, filtering, and paging.

## Dynamic row height

The grid enables both row virtualization and DOM virtualization. DOM virtualization is configured with `autoRowHeight: true`, allowing the grid to measure rendered rows and adjust their heights to fit their content. A 10-row buffer is used to keep scrolling smooth. The grid also sets `rowHeight` to `50` as its base row height.

These settings are configured in `src/app/app.component.ts` and applied by `src/app/app.component.html`.

## Data source

The grid retrieves data from the Syncfusion production service using `UrlAdaptor`. Its query requests a data count of 100,000 records. Filtering uses checkbox menus, and the page size defaults to 100 records, with options for 500 and 1,000.

## Requirements

- Node.js and npm

## Run locally

Install dependencies and start the Angular development server:

```bash
npm install
npm start
```

Open `http://localhost:4200/` in a browser. The grid's remote data source requires network access to the Syncfusion service.

## Build

```bash
npm run build
```

Build output is written to the `dist/` directory.

## Tests

```bash
npm test
```
