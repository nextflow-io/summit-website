export const formatLink = (buttonUrl: any): string | undefined => {
  if (!buttonUrl) return undefined;
  
  const externalUrl = buttonUrl.externalUrl;
  const internalLink = buttonUrl.internalLink;

  if (externalUrl) return externalUrl;

  if (internalLink) {
    return internalLink.startsWith('/') ? internalLink : `/${internalLink}`;
  }

  return undefined;
};

export const getButtonUrl = (button: any): string | null => {
  if (!button?.buttonUrl) return null;
  
  const buttonLink = button.buttonUrl;
  return buttonLink.isExternal 
    ? buttonLink.externalUrl 
    : formatLink(buttonLink) || null;
};

export const getHrefUrl = (href: any): string | null => {
  if (!href) return null;
  
  return href.isExternal 
    ? href.externalUrl 
    : formatLink(href) || null;
};