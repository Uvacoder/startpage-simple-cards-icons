![](./assets/header.png)

### Root is a start-page aimed at simplicity and elegance

This project is blazing fast :zap:, it only contains html, css and javascript files.

## Customizing

Root was created to be lightweight, fast and easy to customize.

### Changing Colors

To change the colors used in the startpage edit `styles.css`.

```css
:root {
  --primary: #dd2e44;
  --text-light: #eeeeee;
  --background: #1e1c21;
  --background-light: #333138;
}
```

### Changin Name and Adding Custom Cards

> ~~This project uses [Remix Icons](https://remixicon.com/).~~ This project now uses Native Emoji's as icons.

To change the default name and edit the cards, edit `app.js`. It should look something like this:

```js
const NAME = "John Doe";

const CARDS = [
  {
    name: "Twitter",
    emoji: "🐦",
    link: "https://twitter.com",
  },
  {
    name: "Github",
    emoji: "🧑🏻‍💻",
    link: "https://github.com/",
  },
];
```

To add a new card, just append a new object to the `CARDS` constant. The object should look something like this:

```js
{
  name: "<Webpage Name>",
  emoji:"<Emoji>",
  link: "<Webpage Link>"
},
```

> ~~To get the icon class-name, just go to [Remix Icons](https://remixicon.com/), select the desired icon. You should see something like this: `<i class="this-is-the-class-name"></i>`.~~
