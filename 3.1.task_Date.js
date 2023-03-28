function dayOfYear(string) {
    let date = new Date(string);
    let year = date.getFullYear();
    let lastDate = new Date(`01/01/${year}`);
    let d = (date - lastDate) / (1000 * 60 * 60 * 24) + 1;
    return d;
  }
  
  console.log(dayOfYear("12/13/2020"));
