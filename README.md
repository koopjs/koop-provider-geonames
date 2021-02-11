# koop-provider-geonames

A simple Koop provider for the Geonames search api.

The provider's `:id` parameter should be give a value of the place name for the Geonames search.

Y

A minimal Koop project template from [Koop CLI](https://github.com/koopjs/koop-cli).

See the [specification](https://koopjs.github.io/docs/usage/koop-core) for more details.

## Configuration
You will need to set a configuration value for the Geonames API user. See `config/default.json`.


### Koop Configuration

The Koop project configuration `koop.json` is the configuration for the app/plugin code. It is part of the code and used to store internal properties of the app/plugin. It should not be changed with the deployment.

## Development

### Testing

### Dev Server

This project by default uses the [Koop CLI](https://github.com/koopjs/koop-cli) to set up the dev server. It can be invoked via

```
$ npm start
```

The server will be running at `http://localhost:8080` or at the port specified at the configuration.

For more details, check the [Koop CLI documentation](https://github.com/koopjs/koop-cli/blob/master/README.md).
