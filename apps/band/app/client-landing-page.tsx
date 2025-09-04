// app/client-landing-page.tsx

'use client';

import { useState, useEffect } from 'react';
import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/react";
import LandingPage from "./components/LandingPage";

const query = `
  query {
    page(relativePath: "home.mdx") {
      hero {
        title
        subtitle
        logoImage
        backgroundVideo
        ctaText
        ctaLink
      }
      about {
        title
        content
        image
      }
      music {
        title
        tracks {
          title
          description
          coverImage
          audioUrl
        }
      }
      tour {
        title
        dates {
          date
          venue
          city
          ticketUrl
        }
      }
      contact {
        title
        email
        social {
          instagram
          spotify
          youtube
          facebook
        }
      }
    }
  }
`;

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

export default function ClientLandingPage() {
  const [tinaData, setTinaData] = useState(defaultData);
  const [loading, setLoading] = useState(true);

  // Always call useTina hook - this prevents the hook order issue
  const { data } = useTina({
    query,
    variables: {},
    data: tinaData,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await staticRequest({
          query,
          variables: {},
        });
        setTinaData((result as { data: typeof defaultData }).data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Keep default data if fetch fails
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Show loading state but still render LandingPage with default data
  if (loading) {
    return <LandingPage data={data} variables={{}} query={query} isLoading={true} />;
  }

  return <LandingPage data={data} variables={{}} query={query} isLoading={false} />;
}