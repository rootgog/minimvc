# MiniMVC

MiniMVC is a lightweightsolution to bind javascript objects to DOM elements

## Get Started

### 1. Include the module

```js
import MVC from "https://unpkg.com/minimvc";
```

### 2. Initialise MiniMVC

```js
let data = {
    header = "My first blog post"
}

let mvc = new MVC({data});
```

### 3. Edit the DOM

```html
<h1 data-bind="header"></h1>
<p data-bind="paragraph">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur rerum
  consectetur nemo accusantium, quos nisi fuga eius explicabo! Est qui commodi,
  doloribus fugiat in eveniet iste iure neque voluptatem vel.
</p>
```

## Parameters

MiniMVC can accept two parameters

| Parameter     | Description                                                                    | Default           |
| ------------- | ------------------------------------------------------------------------------ | ----------------- |
| data          | An Object that contains all of the data that is to be syncronised with the DOM | MiniMVC.data = {} |
| bindAttribute | The attribute that will be used in the HTML to isentify it's data equivelent   | data-             |

## TODO:

- Support Nested data object
