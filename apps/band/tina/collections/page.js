/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    {
      type: "object",
      name: "hero",
      label: "Hero Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Hero Title",
          required: true,
        },
        {
          type: "string",
          name: "subtitle",
          label: "Hero Subtitle",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "logoImage",
          label: "Logo Image",
        },
        {
          type: "string",
          name: "backgroundVideo",
          label: "Background Video URL",
          description: "URL to background video (MP4 format)",
        },
        {
          type: "string",
          name: "ctaText",
          label: "Call to Action Text",
          required: true,
        },
        {
          type: "string",
          name: "ctaLink",
          label: "Call to Action Link",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "about",
      label: "About Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "About Title",
          required: true,
        },
        {
          type: "string",
          name: "content",
          label: "About Content",
          ui: {
            component: "textarea",
          },
          required: true,
        },
        {
          type: "image",
          name: "image",
          label: "About Image",
        },
      ],
    },
    {
      type: "object",
      name: "music",
      label: "Music Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Music Section Title",
          required: true,
        },
        {
          type: "object",
          name: "tracks",
          label: "Tracks",
          list: true,
          fields: [
            {
              type: "string",
              name: "title",
              label: "Track Title",
              required: true,
            },
            {
              type: "string",
              name: "description",
              label: "Track Description",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "image",
              name: "coverImage",
              label: "Cover Image",
            },
            {
              type: "string",
              name: "audioUrl",
              label: "Audio File URL",
              description: "URL to audio file (MP3 format)",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "tour",
      label: "Tour Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Tour Section Title",
          required: true,
        },
        {
          type: "object",
          name: "dates",
          label: "Tour Dates",
          list: true,
          fields: [
            {
              type: "string",
              name: "date",
              label: "Date",
              required: true,
            },
            {
              type: "string",
              name: "venue",
              label: "Venue",
              required: true,
            },
            {
              type: "string",
              name: "city",
              label: "City",
              required: true,
            },
            {
              type: "string",
              name: "ticketUrl",
              label: "Ticket URL",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "contact",
      label: "Contact Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Contact Section Title",
          required: true,
        },
        {
          type: "string",
          name: "email",
          label: "Contact Email",
          required: true,
        },
        {
          type: "object",
          name: "social",
          label: "Social Media",
          fields: [
            {
              type: "string",
              name: "instagram",
              label: "Instagram URL",
            },
            {
              type: "string",
              name: "spotify",
              label: "Spotify URL",
            },
            {
              type: "string",
              name: "youtube",
              label: "YouTube URL",
            },
            {
              type: "string",
              name: "facebook",
              label: "Facebook URL",
            },
          ],
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return undefined;
    },
  },
};
