# Motai Panel

## Prerequisits

- Node.js 18 or more newer
- pnpm 8+ is recomendded

## Instalation

```bash
pnpm install
```

This will download all the dependecies that the proyect need.

## Runing on dev mode

```bash
pnpm dev
```

Open the browser on `http://localhost:3000` to see the aplicattion. Any change you save will be refreshed automaticaly.

## Build for produtcion

```bash
pnpm build
```

The optimized files are created inside `.next/`. To preview the build localy run:

```bash
pnpm start
```

## Tests

We use **Jest** & **Testing Library** for make tests.

```bash
pnpm test
```

## Linter

```bash
pnpm lint
```

## Enviroment variables

1. Copy `.env.example` as `.env`.
2. Fill the values that are necesary (api tokens, urls, ect.).

## Basic recomandations

- Always use **pnpm** to keep dependencys consistent.
- Enable ESLint and Prettier extencion on your editor to mantain code style.
- Follow Conventional Commits when writing commit messages.
- Create branchs with prefix `feat/`, `fix/` or `chore/` acording what are you doing.
- Before push, run `pnpm lint` and `pnpm test` to skip erros in CI.

## Proyect Arquiitecture 🏗️

Below is a (simplfyed) view of the main folders so you dont get lost:

```text
motai-panel/
├─ src/
│  ├─ actions/
│  ├─ app/
│  │  └─ (private)/
│  ├─ components/
│  ├─ hooks/
│  ├─ lib/
│  ├─ middleware.ts
│  └─ types/
├─ public/
├─ docs/
├─ package.json
└─ README.md
```

Each folder have it own responsability:

- `src/actions` 👉 small helpers to conect with API.
- `src/app` 👉 Next.js routes .
- `src/components` 👉 Reusable UI stuff.
- `src/hooks` 👉 Custom React hooks.
- `src/lib` 👉 Utils, shemas, constants, etc.
- `src/types` 👉 Shared TypeScript tipe defs.

Try to keep files short and clean; if something grows to big, splitt it in sub-folders.
