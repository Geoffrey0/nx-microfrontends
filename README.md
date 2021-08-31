

# NxMicrofrontends

Simple NX project that contains 2 apps "shell" and "mfe1". This is a microfrontend setup using webpack 5 module federation. They both use a shared lib called "shared". 

## Install dependencies
Run `npm install`

## How to run
Start the shell `npm run start -- --project=shell`

Start mfe1 `npm run start -- --project=mfe1`

## How to build
Build the shell `npm run build -- --project=shell`

Build mfe1 `npm run build -- --project=mfe1`
