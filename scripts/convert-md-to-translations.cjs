const fs = require('fs');
const path = require('path');

// Language mapping
const languages = {
  'EN': 'en',
  'RU': 'ru',
  'UK': 'uk',
  'FR': 'fr',
  'DE': 'de',
  'PL': 'pl',
  'ES': 'es'
};

// Parse FAQ markdown
function parseFAQ(content) {
  const lines = content.split('\n');
  const items = [];
  let currentQuestion = null;
  let currentAnswer = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if line is a question (starts with ###)
    if (line.startsWith('### ')) {
      // Save previous Q&A if exists
      if (currentQuestion && currentAnswer.length > 0) {
        items.push({
          question: currentQuestion,
          answer: currentAnswer.join('\n').trim()
        });
      }
      
      // Start new question
      currentQuestion = line.replace('### ', '').trim();
      currentAnswer = [];
    } else if (currentQuestion && line.trim() && !line.startsWith('##') && !line.startsWith('#')) {
      // Add to current answer if we have a question
      currentAnswer.push(line);
    }
  }
  
  // Save last Q&A
  if (currentQuestion && currentAnswer.length > 0) {
    items.push({
      question: currentQuestion,
      answer: currentAnswer.join('\n').trim()
    });
  }
  
  return items;
}

// Parse Privacy Policy or Terms of Service markdown
function parsePolicy(content) {
  const lines = content.split('\n');
  const items = [];
  let currentHeading = null;
  let currentText = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if line is a heading (starts with ##)
    if (line.startsWith('## ')) {
      // Save previous section if exists
      if (currentHeading && currentText.length > 0) {
        items.push({
          heading: currentHeading,
          text: currentText.join('\n').trim()
        });
      }
      
      // Start new section
      currentHeading = line.replace('## ', '').replace(/^\d+\.\s*/, '').trim();
      currentText = [];
    } else if (currentHeading && line.trim() && !line.startsWith('#') && !line.startsWith('**Effective Date:**') && !line.startsWith('**Last Updated:**')) {
      // Add to current text if we have a heading
      if (!line.startsWith('---')) {
        currentText.push(line);
      }
    }
  }
  
  // Save last section
  if (currentHeading && currentText.length > 0) {
    items.push({
      heading: currentHeading,
      text: currentText.join('\n').trim()
    });
  }
  
  return items;
}

// Process all MD files
function processAllFiles() {
  const mdDir = path.join(__dirname, '../src/md');
  const files = fs.readdirSync(mdDir);
  
  const result = {};
  
  // Initialize language structures
  Object.values(languages).forEach(lang => {
    result[lang] = {
      faq: { items: [] },
      privacy: { content: [] },
      terms: { content: [] }
    };
  });
  
  // Process each file
  files.forEach(file => {
    const match = file.match(/^(FAQ|PRIVACY_POLICY|TERMS_OF_SERVICE)_([A-Z]{2})\.md$/);
    if (!match) return;
    
    const [, type, langCode] = match;
    const lang = languages[langCode];
    if (!lang) return;
    
    const content = fs.readFileSync(path.join(mdDir, file), 'utf-8');
    
    if (type === 'FAQ') {
      result[lang].faq.items = parseFAQ(content);
    } else if (type === 'PRIVACY_POLICY') {
      result[lang].privacy.content = parsePolicy(content);
    } else if (type === 'TERMS_OF_SERVICE') {
      result[lang].terms.content = parsePolicy(content);
    }
  });
  
  return result;
}

// Main execution
const translationsData = processAllFiles();

// Output JSON
console.log('Translation data generated. Writing to file...');
fs.writeFileSync(
  path.join(__dirname, '../src/data/generated-translations.json'),
  JSON.stringify(translationsData, null, 2)
);

console.log('✅ Done! Check src/data/generated-translations.json');
console.log('\nLanguages processed:', Object.keys(translationsData));
console.log('\nSample FAQ items per language:');
Object.entries(translationsData).forEach(([lang, data]) => {
  console.log(`  ${lang}: ${data.faq.items.length} FAQ items`);
});
