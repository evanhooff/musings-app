'use client';

import { useState } from 'react';
import { useTina } from "tinacms/dist/react";
import LandingPage from "./components/LandingPage";
import type { PageQuery } from "../tina/__generated__/types";

export interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: PageQuery["page"] };
}

export default function ClientLandingPage(props: ClientPageProps) {
  const [loading, setLoading] = useState(true);

  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <LandingPage
      query={props.query}
      variables={props.variables}
      data={data}
      isLoading={loading}
    />
  );
}