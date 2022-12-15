export const send = ({ name, email, twitter, linkedin, message, webhook }) => {
  let twitterURL = "";
  let linkedinURL = "";

  if (twitter) {
    const twitterProfileURL = `https://twitter.com/${twitter.replace("@", "")}`;
    twitterURL = `<${twitterProfileURL}|${twitter}>`;
  }
  if (linkedin) {
    const linkedinProfileURL = `https://linkedin.com/${linkedin.replace(
      "@",
      ""
    )}`;
    linkedinURL = `<${linkedinProfileURL}|${linkedin}>`;
  }
  try {
    webhook.send({
      text: `\n*Name:* ${name}\n*Email:* ${email}\n*Twitter:* ${twitterURL}\n*LinkedIn:*${linkedinURL}\n*Message:* ${message}`,
    });
    return true;
  } catch (e) {
    return false;
  }
};
