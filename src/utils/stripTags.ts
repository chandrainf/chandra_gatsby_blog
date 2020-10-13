export const stripTags = (ipStr: string) => {
  let str = ipStr;
  if (str === null || str === '') {
    return false;
  }

  str = str.toString();

  return str.replace(/(<([^>]+)>)/gi, '');
};

export const domHtml = (str: string) => ({ __html: str });
