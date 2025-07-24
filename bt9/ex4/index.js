
const styleSheets = document.styleSheets;

// Duyệt qua từng phần tử
for (let i = 0; i < styleSheets.length; i++) {
  const sheet = styleSheets[i];

  // Kiểm tra stylesheet 
  if (sheet.cssRules) {
    const rules = sheet.cssRules;

    // Duyệt qua từng rule trong stylesheet
    for (let j = 0; j < rules.length; j++) {
      const rule = rules[j];

      // In ra kết quả
      if (rule.selectorText) {
        console.log(rule.selectorText);
      }
    }
  }
}