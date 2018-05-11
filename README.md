# DEPRECATED! No longer actively maintained

# &lt;pair-with-me&gt;

> A simple Vanilla JavaScript Web Component for pair programming contact information. Artwork is from Advi Grimm's pairprogramwith.me project where you can learn more about pair programming, pairing tools, and how to get started. 

## Demo

[Check it live!](http://Nevraeka.github.io/pair-with-me)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install pair-with-me --save
```

Or [download as ZIP](https://github.com/Nevraeka/pair-with-me/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/pair-with-me/src/pair-with-me.html">
    ```

3. Start using it!

    ```html
    <pair-with-me></pair-with-me>
    ```

## Options

Attribute     | Options     | Default                                          | Description
---           | ---         | ---                                              | ---
`image`       | *string*    | `http://www.pairprogramwith.me/assets/badge.svg` | This is the `src` attribute for the image displayed
`link`        | *string*    | `null`                                           | This is an optional `href` attribute for linking the image. If this is not provided a `click' event is added to the link that fires a custom event signal
`summary`     | *string*    | `pair programming badge link`                    | This is the `alt` attribute for the image displayed

## Events

Event             | Description
---               | ---
`on-pair-with-me` | Triggers when the link is 'clicked'. If a 'link' attribute is present, this will not get assigned.

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ grunt server
    ```

* To provide a live demo, send everything to `gh-pages` branch.

    ```sh
    $ grunt deploy
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/Nevraeka/pair-with-me/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
