// Copyright 2022 the Deno authors. All rights reserved. MIT license.
/** @jsxImportSource https://esm.sh/react@18.2.0 */
import { Head } from "aleph/react";
import { Input } from "../components/Input.tsx";

export default function Index() {
  return (
    <div className="screen">
      <Head>
        <title>Covid cases</title>
        <meta
          name="description"
          content="Find how many covid cases are in your area."
        />
      </Head>
      <h1>Find how many covid cases there are in your area</h1>
      <p>Type your postcode in below and click the button</p>
      <Input onClick={(postcode) => console.log(postcode)} />
    </div>
  );
}
