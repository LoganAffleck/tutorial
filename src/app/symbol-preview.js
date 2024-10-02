// pages/edit-symbol.jsx
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function Page(props) {
    // const content = await builder
    //   // Get the page content from Builder with the specified options
    //   .get("symbol")
    //   // Convert the result to a promise
    //   .toPromise();
  
    return (
      <>
        {/* Render the Builder page */}
        <RenderBuilderContent model={symbol} />
      </>
    );
  }