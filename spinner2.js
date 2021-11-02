let spinner = ["|", "/", "-", "\\"];

for (let i = 0; i < 5; i++) {
  let spinPosition = i % spinner.length;
  setTimeout(() => {
    process.stdout.write('\r' + spinner[spinPosition] + '   ')
  }, 100 + 200 * i);
}