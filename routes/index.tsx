// Copyright 2022 the Deno authors. All rights reserved. MIT license.
/** @jsxImportSource https://esm.sh/react@18.2.0 */
import { Head } from "aleph/react";
import { Input } from "../components/Input.tsx";
import React from "react";

const getEndpoint = (area: string) =>
  "https://api.coronavirus.data.gov.uk/v1/data?" +
  `filters=areaType=ltla;areaName=${area}&` +
  'structure={"date":"date","newCases":"newCasesByPublishDate"}';

export default function Index() {
  const [area, setArea] = React.useState("");
  const [cases, setCases] = React.useState();

  const getArea = async (postcode: string) => {
    const response = await fetch(
      `https://api.postcodes.io/postcodes/${postcode}`
    );
    const text = await response.json();
    const msoa = text.result.msoa.split(" ")[0];
    setArea(msoa.toLowerCase());
  };

  const getCases = async (area: string) => {
    const endpoint = getEndpoint(area);
    const caseResponse = await fetch(endpoint);
    const covidCases = await caseResponse.json();
    if (covidCases) {
      setCases(covidCases.data[0].newCases);
    }
  };
  React.useEffect(() => {
    getCases(area);
  }, [area]);

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
      <Input onClick={(code) => getArea(code)} />
      {area && (
        <div>
          Yesterday there were {cases} new identified cases of covid in {area}.
        </div>
      )}
    </div>
  );
}
