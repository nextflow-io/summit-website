export const formatLink = (buttonUrl: any): string | undefined => {
  if (!buttonUrl) return undefined;
  
  // Check isExternal flag first to determine which field to use
  if (buttonUrl.isExternal) {
    return buttonUrl.externalUrl || undefined;
  }
  
  // If not external, use internal link
  const internalLink = buttonUrl.internalLink;
  if (internalLink) {
    return internalLink.startsWith('/') ? internalLink : `/${internalLink}`;
  }

  return undefined;
};

export const getButtonUrl = (button: any): string | null => {
  if (!button?.buttonUrl) return null;
  
  return formatLink(button.buttonUrl) || null;
};

export const getHrefUrl = (href: any): string | null => {
  if (!href) return null;
  
  return formatLink(href) || null;
};