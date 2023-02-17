# To-Do List App

To-Do list app implemented with SvelteKit and TypeScript. It uses a Writable store that allows both updating and reading the state by subscription, including `update` methods to `add`, `delete`, `toggle complete` and `edit` to-dos (see [`TodoStore.ts`](https://github.com/javigong/to-do-app-sveltekit/blob/main/src/lib/store/TodoStore.ts)).

🔗 [Open live Demo](https://to-do-app-sveltekit-javigong.vercel.app)

# Screen Captures

Add task and toggle complete

<img src="https://user-images.githubusercontent.com/42308135/219768353-1472fec9-68f1-48cf-9d02-e0c417766b84.gif" width="700" />

Toggle complete/in progress and delete task

<img src="https://user-images.githubusercontent.com/42308135/219768391-35f24e12-b598-48a2-a7e0-8dee44598afd.gif" width="700" />

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
