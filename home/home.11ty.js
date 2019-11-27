const html = String.raw;

exports.data = {
  permalink: "/",
};

exports.render = data => {
  console.log(data);
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </head>
      <body>
        <h1>${data.title}</h1>
        <p>${data.body}</p>
      </body>
    </html>
  `;
};
