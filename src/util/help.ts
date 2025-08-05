export const getSlug = (name: string) =>
  name.trim().toLowerCase().replace(/\s+/g, "-");

export const formatWithSpacesFromRight = (str: string, lang: string) => {
  const parts = [];
  for (let i = 0; i < str.length; i += 3) {
    parts.push(str.slice(i, i + 3));
  }
  console.log("parts", parts);
  return lang == "fa" ? parts.reverse().join(" ") : parts.join(" ");
};
