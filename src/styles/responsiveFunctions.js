export const sizes = {
  mobileXs: '320px',
  modileMd: '375px',
  mobileLg: '425px',
  tablet: '768px',
  desktopXs: '990px',
  desktopSm: '1024px',
  desktopMd: '1200px',
  desktopLg: '1440px',
  desktopXl: '2560px',
};

export const setMaxResponsiveStyle = (device, style) => `@media (max-width: ${sizes[device]}) { ${style} }`;

export const setMinResponsiveStyle = (device, style) => `@media (min-width: ${sizes[device]}) { ${style} }`;

export const setMinAndMaxResponsiveStyle = (deviceMin, deviceMax, style) => `
@media (min-width: ${sizes[deviceMin]}) and (max-width: ${
  sizes[deviceMax]
}) { ${style} }`;

export const setOrientationWithMaxStyle = (orientation, device, style) => `
  @media (orientation: ${orientation}) and (max-width: ${sizes[device]}) {
    ${style}
  }
`;

export const setOrientationWithMinStyle = (orientation, device, style) => `
  @media (orientation: ${orientation}) and (min-width: ${sizes[device]}) {
    ${style}
  }
`;
