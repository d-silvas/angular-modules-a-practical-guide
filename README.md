# Angular modules: a practical guide

This is a collection of examples used in Angular modules practical guide: https://cybertricks.blog/angular-modules-a-practical-guide/

- `./m00-modules-components`: shows the component hierarchy created by Angular modules.
- `./m01-modules-services-providedin-root`: shows that services which are provided in root are available application-wide
- `./m02-modules-services-providedin-eager-module`: shows that services provided in an eagerly-loaded module are available application wide, but if we import the module into other lazy-loaded modules, multiple instances of the service will be created.
- `./m03-modules-services-providedin-lazy-module`: shows that services provided in a lazy loaded module are available only within that module
- `./m04-modules-services-merged-providers`: shows that providers defined in any imported module are "merged" and there does not exist a hierarchy for providers.
- `./m05-modules-services-providedin-root-bundle`: shows that services which are provided in root are not necessarily part of the main bundle.
