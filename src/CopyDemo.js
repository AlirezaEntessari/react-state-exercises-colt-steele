import React, { Component } from "react";

class CopyDemo extends Component {
  handleCopy() {
    alert("STOP STEALING FROM ME!");
  }
  render() {
    return (
      <div>
        <h3>Try Copying Some of this Text: </h3>
        <section
          style={{ width: "300px", display: "inline-block" }}
          onCopy={this.handleCopy}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          doloremque dignissimos, in nesciunt deserunt, similique neque, totam
          numquam eligendi aliquid odio quae pariatur eius. Pariatur asperiores
          ipsa quos veritatis recusandae. Distinctio molestias deserunt optio at
          voluptates sequi sed aut voluptas quas exercitationem nam ad, corporis
          assumenda ducimus, nostrum natus, itaque laudantium ipsum vero minima
          aperiam! Ipsum eveniet sed vitae voluptas. Neque qui ullam explicabo
          minima! Ullam ipsa iusto fuga, eos omnis, sit quam quaerat, velit
          laudantium nostrum in deleniti suscipit porro natus aliquam! Velit
          ipsum quis qui, omnis quo ex! Fugit aperiam minus obcaecati libero
          recusandae modi ipsum mollitia voluptatem! Beatae inventore maxime
          debitis distinctio dicta officia nam modi aliquam optio veniam quo
          placeat non id vitae, excepturi mollitia possimus. Sit cumque fugit,
          nulla quia obcaecati, delectus minus quasi et, autem illo ea repellat
          debitis. Similique officia optio facere quis dolores dignissimos harum
          esse cupiditate! Modi fugit asperiores est facilis!
        </section>
      </div>
    );
  }
}

export default CopyDemo;
