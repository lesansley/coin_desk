function formatRawGraphData(data) {
  const formattedDataArray = convertToArrayObjects(data);

  function convertToArrayObjects(data) {
    const arr = [];
    for (const property in data) {
      arr.push(createObjectArrayElements(data[property], property));
    }
    return arr;
  }

  function createObjectArrayElements(data, key) {
    return data.reduce((acc, item) => {
      const date = new Date(item[0]).toISOString();
      acc.push({ date: date, [key]: item[1] });
      return acc;
    }, []);
  }

  function mergeArrays(array1, array2) {
    for (let x in array1) {
      mergeArrayObjects(array1[x], array2[x]);
    }
    return array1;
  }

  function mergeArrayObjects(originalObject, objectToMerge) {
    const keys = Object.keys(objectToMerge);
    keys.forEach((key) => {
      if (!originalObject.hasOwnProperty(key)) {
        originalObject[key] = objectToMerge[key];
      }
    });
  }

  const formattedGraphData = () => {
    let arr = [];
    for (let i = 1; i < formattedDataArray.length; i++) {
      arr = mergeArrays(formattedDataArray[0], formattedDataArray[i]);
    }
    return arr;
  };

  return formattedGraphData();
}

export default formatRawGraphData;
