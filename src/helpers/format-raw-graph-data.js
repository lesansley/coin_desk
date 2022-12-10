import { CHART_OPTION_ARRAY } from "../config";

function formatRawGraphData(data, duration) {
  const formattedDataArray = convertToArrayObjects(data);

  function convertToArrayObjects(data) {
    const arr = [];
    for (const property in data) {
      arr.push(createObjectArrayElements(data[property], property));
    }
    return arr;
  }

  function getDoubleDigit(int) {
    if (parseInt(int) > 9) return int;
    return `0${int}`;
  }

  function getDate(int, duration) {
    const dateObj = new Date(int);
    const year = dateObj.getFullYear();
    const month = getDoubleDigit(dateObj.getMonth() + 1);
    const day = getDoubleDigit(dateObj.getDate());
    const hours = getDoubleDigit(dateObj.getHours() + 1);
    const minutes = getDoubleDigit(dateObj.getMinutes() + 1);
    const seconds = getDoubleDigit(dateObj.getSeconds() + 1);
    const date = `${year}-${month}-${day}`;
    const time = `${hours}-${minutes}-${seconds}`;

    if (duration > 30) return date;
    return `${date}, ${time}`;
  }

  function createObjectArrayElements(data, key) {
    return data.reduce((acc, item) => {
      let newKey = null;
      for (const opt of CHART_OPTION_ARRAY) {
        if (opt.hasOwnProperty(key)) newKey = opt[key];
      }

      const date = getDate(item[0], duration);

      acc.push({ date, [newKey]: item[1] });
      return acc;
    }, []);
  }

  function mergeArrays(array1, array2) {
    for (const x in array1) {
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

  const formattedData = formattedGraphData();
  return formattedData;
}

export default formatRawGraphData;
