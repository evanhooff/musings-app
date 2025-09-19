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
      name: "musicPlayer",
      label: "Music Player Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Music Player Section Title",
          required: false,
        },
        {
          type: "string",
          name: "playlistUrl",
          label: "Playlist Share URL",
          required: false,
        },
      ],
    },
    {
      type: "object",
      name: "hero",
      label: "Header Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Header Title",
          required: false,
        },
        {
          type: "string",
          name: "subtitle",
          label: "Header Subtitle",
          ui: {
            component: "textarea",
          },
          required: false,
        },
        {
          type: "image",
          name: "logoImage",
          label: "Logo Image",
          required: false,
        },
        {
          type: "image",
          name: "headerImage",
          label: "Header Image",
          required: false,
        },
        {
          type: "string",
          name: "ctaText",
          label: "Button Text",
          required: false,
        },
        {
          type: "string",
          name: "ctaLink",
          label: "Button Link",
          required: false,
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
        {
          type: "string",
          name: "ctaText",
          label: "Call to Action Text",
          required: false,
        },
        {
          type: "string",
          name: "ctaLink",
          label: "Call to Action Link",
          required: false,
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
          required: false,
        },
        {
          type: "string",
          name: "content",
          label: "Music Content",
          ui: {
            component: "textarea",
          },
          required: false,
        },
        {
          type: "image",
          name: "image",
          label: "Music Image",
          required: false,
        },
      ],
    },
    {
      type: "object",
      name: "agenda",
      label: "Agenda Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Agenda Title",
          required: true,
        },
        {
          type: "object",
          name: "dates",
          label: "Agenda",
          list: true,
          fields: [
            {
              type: 'datetime',
              component: 'date',
              name: 'date',
              label: 'Datum',
              description: 'Datum van het event',
              dateFormat: 'MMMM DD YYYY',
              timeFormat: 'H mm',
            },
            {
              type: "string",
              name: "venue",
              label: "Event Naam",
              description: 'Event of Locatie Naam',
              required: true,
            },
            {
              type: "string",
              name: "city",
              label: "Stad",
              required: true,
            },
            {
              type: "string",
              name: "walkInTime",
              label: "Openings Tijd",
              required: false,
            },
            {
              type: "string",
              name: "showTime",
              label: "Start Tijd",
              description: 'Mag hetzelfde zijn als Openings Tijd',
              required: true,
            },
            {
              type: "string",
              name: "duration",
              label: "Speeltijd",
              required: true,
            },
            {
              type: "string",
              name: "eventUrl",
              label: "Event URL",
              required: false,
            },
            {
              type: "string",
              name: "adress",
              label: "Adres",
              description: 'Google maps link werkt het beste',
              required: false,
            },
            {
              type: "image",
              name: "image",
              label: "Event Image",
              required: false,
            },
            {
              type: "string",
              name: "photoLink",
              label: "Foto Album Link",
              required: false,
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
              name: "soundcloud",
              label: "Soundcloud URL",
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
