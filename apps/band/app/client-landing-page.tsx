'use client';

import { useState, useEffect } from 'react';
import { staticRequest } from "tinacms";
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

// Default data to prevent hook issues
const defaultData = {
  page: {
    hero: {
      title: "MISSES MONDAY",
      subtitle: "Loading...",
      logoImage: "",
      backgroundVideo: "",
      ctaText: "Listen Now",
      ctaLink: "#",
    },
    about: {
      title: "About",
      content: "Loading...",
      image: "",
    },
    music: {
      title: "Music",
      tracks: [],
    },
    tour: {
      title: "Tour",
      dates: [],
    },
    contact: {
      title: "Contact",
      email: "contact@missesmonday.com",
      social: {
        instagram: "",
        spotify: "",
        youtube: "",
        facebook: "",
      },
    },
  },
};

export default function ClientLandingPage(props: ClientPageProps) {
  const [loading, setLoading] = useState(true);

  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return <LandingPage {...data} isLoading={loading} />;
}