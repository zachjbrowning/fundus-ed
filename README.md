# fundus-ed
SPA for fundus.education website

## Running the code
Inside the terminal, type the command `yarn start`. This will run the code, and you can find the website in your browser at `localhost:8080`. When you want to stop the server, type `ctrl + C` in the terminal. The website will hot reload every time you change a file.

## The files that matter

Where we'll be working:
 - `src/static/fundi` : this is where to put any new images
 - `src/constants/fundi/fundi.ts` : this is where we've defined *how* everything works. When we create a new config, we need to register it here.
 - `src/constants/fundi/configs.ts` : this is where we are going to define each of our configurations for our fundi. Essentially in this file are a bunch of configs.


## Nerd speak for a second

The website is built to run off a list of configurations for each fundus. To make sure the code can turn those configurations into a website, we've defined exactly what needs to be inside each configuration. We are giving our configurations a 'type'. So inside the the `fundi.ts` file, there are a whole bunch of things like `export type Blah`. What we are doing here is defining what our configurations must look like. For example, a `FundiConfig` must contain a name, a list of FundusImages, a sentence for management and a sentence for overview. 

Hopefully that makes sense. We define our configurations in some ugly way with all these `{}[]""` symbols and give our configurations types so that the code can interpret it. Hopefully the syntax doesn't take too long to get used to.

## Adding a fundus: Papilloedema

1. Inside the `config.ts` file, we want to define a new configuration. Lets do this by writing:
```
export const papConfig: FundiConfig = {

}
```
    We are defining a constant (const) that is visible by all the code (export), giving it some arbritary name (papConfig - it really doesn't matter what it is called though), and we have given it a type (FundiConfig). Giving it the type is really important, because now if we don't stick to the strict type rules we defined earlier, we'll get an error. 
2. Back inside the `fundi.ts` file, we now need to register that new configuration so that our website knows it exists. First off, we're going to give our configuration a nickname (again, name doesn't matter too much, its just the name the code uses to reference the configs). 
```
export enum FUNDI {
    ...
    pap = "PAP",
    ...
}
```
3. Still inside `fundi.ts`, we're going to assign that nickname to the configuration we just defined. This is the part that the code uses to match some new fundus ("PAP") with some new configuration. (papConfig). To do this, you'll need to import your new config you just defined in the `config.ts` file, and then map our nickname to our config:
```
import { ... papConfig, ... } from "./configs";
export const fundiConfigs: {
    [F in FUNDI] : FundiConfig
} = {
    ...
    PAP: papConfig,
    ...
}
```
4. We have now made a new config and registered with the code. Now we just actually need to fill out that configuration. Back to the `config.ts` file, there might be some red squiggly lines telling us that there are some errors. That is because our configuration doesn't match the 'type' that we have declared it must match. Looking in the `fundi.ts` file, we can see that the `FundiConfig` type needs a name, a list of FundusImages, a sentence for management and a sentence for overview. You will then see that a FundusImage has it's own type, it requires a src (reference to the image) an alt (quick description of the image incase it doesn't load), a description sentence and a list of marker. The markers have their own type defined as well! Down the rabbit hole we go, blah blah blah. Honestly, just copy from the preixisting samples, ask any questions when necessary and hopefully it starts to makes sense with practice. 