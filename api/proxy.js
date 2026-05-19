export default async function handler(req, res) {
  const response = await fetch("https://ideal-otter-6ce0a.rehost.site");
  const html = await response.text();

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}