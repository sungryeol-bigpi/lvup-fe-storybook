export const setViewport = (viewport = "desktopLarge") => ({
  viewport: {
    defaultViewport: viewport,
  },
});


export const setBackgroundColor = (backgroundColor = "coach-grey") => ({
  backgrounds: { default: backgroundColor },
});

// 스토리북 기본 패딩 제거
export const setFullscreen = {
  layout: "fullscreen",
};

