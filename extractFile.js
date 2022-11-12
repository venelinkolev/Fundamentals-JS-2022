function extractFile(string) {
  let file = string.split('\\').pop();

  let lastIndex = file.lastIndexOf('.');
  let fileName = file.substring(0, lastIndex);
  let extension = file.substring(lastIndex + 1);

  console.log(`File name: ${fileName}\nFile extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
