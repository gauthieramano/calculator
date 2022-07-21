import "../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  options: {
    storySort: {
      order: [
        "Introduction",
        "App",
        ["Atoms", "Molecules", "Organisms", "Templates", "Pages"],
        "Example",
      ],
    },
  },

  viewport: {
    viewports: {
      smartphone: {
        name: "Smartphone (small)",
        styles: {
          width: "400px",
          height: "650px",
        },
      },
      medium: {
        name: "Small tablet (`sm` & `mid` breakpoints)",
        styles: {
          width: "700px",
          height: "750px",
        },
      },
      large: {
        name: "Tablet (`md` & `tall` breakpoints)",
        styles: {
          width: "900px",
          height: "900px",
        },
      },
      desktop: {
        name: "Desktop (`lg` & `tall` breakpoints)",
        styles: {
          width: "1200px",
          height: "1200px",
        },
      },
    },
  },
};
