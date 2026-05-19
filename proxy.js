export default async function handler(req, res) {
  const url = "https://ideal-otter-6ce0a.rehost.site";

  const response = await fetch(url);

  const html = await response.text();

  res.setHeader("Content-Type", "text/html");

  res.status(200).send(html);
}