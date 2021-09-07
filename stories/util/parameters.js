export const setViewport = (viewport = "desktopLarge") => ({
  viewport: {
    defaultViewport: viewport,
  },
});

export const setBackgroundColor = (backgroundColor = "coach-grey") => ({
  backgrounds: { default: backgroundColor },
});