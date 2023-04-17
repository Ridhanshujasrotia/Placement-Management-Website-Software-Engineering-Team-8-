try {
  const decodedParam = decodeURIComponent("/login/%PUBLIC_URL%/favicon.ico");
  console.log(decodedParam);
} catch (e) {
  console.error(e);
}
