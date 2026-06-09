// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  renderTopicNav();
  selectTopic(0);
});

// Render the sidebar navigation
function renderTopicNav() {
  const topicNav = document.getElementById('topicNav');
  
  revisionData.topics.forEach((topic, topicIndex) => {
    const topicItem = document.createElement('li');
    topicItem.className = 'topic-item';
    
    const topicBtn = document.createElement('button');
    topicBtn.className = 'topic-btn';
    if (topicIndex === 0) topicBtn.classList.add('active');
    topicBtn.textContent = `${topic.icon} ${topic.title}`;
    topicBtn.onclick = () => selectTopic(topicIndex);
    
    const sectionList = document.createElement('ul');
    sectionList.className = 'section-list';
    if (topicIndex === 0) sectionList.classList.add('show');
    
    topic.sections.forEach((section, sectionIndex) => {
      const sectionItem = document.createElement('li');
      const sectionBtn = document.createElement('button');
      sectionBtn.className = 'section-btn';
      if (topicIndex === 0 && sectionIndex === 0) sectionBtn.classList.add('active');
      sectionBtn.textContent = section.title;
      sectionBtn.onclick = () => selectSection(topicIndex, sectionIndex);
      sectionItem.appendChild(sectionBtn);
      sectionList.appendChild(sectionItem);
    });
    
    topicItem.appendChild(topicBtn);
    topicItem.appendChild(sectionList);
    topicNav.appendChild(topicItem);
  });
}

// Select a topic
function selectTopic(topicIndex) {
  // Update active topic button
  document.querySelectorAll('.topic-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === topicIndex);
  });
  
  // Show/hide section lists
  document.querySelectorAll('.section-list').forEach((list, idx) => {
    list.classList.toggle('show', idx === topicIndex);
  });
  
  // Select first section of the topic
  selectSection(topicIndex, 0);
}

// Select a section
function selectSection(topicIndex, sectionIndex) {
  const topic = revisionData.topics[topicIndex];
  const section = topic.sections[sectionIndex];
  
  // Update active section button
  document.querySelectorAll('.section-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.section-btn')[
    revisionData.topics.slice(0, topicIndex).reduce((sum, t) => sum + t.sections.length, 0) + sectionIndex
  ].classList.add('active');
  
  // Render content
  renderContent(topic, section);
}

// Render section content
function renderContent(topic, section) {
  const mainContent = document.getElementById('mainContent');
  
  let html = `
    <div class="content-header">
      <h2>${section.title}</h2>
      <span class="topic-label">${topic.icon} ${topic.title}</span>
    </div>
  `;
  
  section.content.forEach((item, index) => {
    html += renderContentItem(item, index);
  });
  
  mainContent.innerHTML = html;
  
  // Attach event listeners to Q&A cards
  document.querySelectorAll('.qa-question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const toggle = question.querySelector('.qa-toggle');
      answer.classList.toggle('show');
      toggle.classList.toggle('open');
    });
  });
}

// Render individual content items
function renderContentItem(item, index) {
  switch (item.type) {
    case 'paragraph':
      return `<p class="paragraph">${item.text}</p>`;
    
    case 'key-term':
      return `
        <div class="key-term">
          <strong>${item.term}</strong>
          ${item.definition}
        </div>
      `;
    
    case 'equation':
      return `<div class="equation">${item.text}</div>`;
    
    case 'exam-tip':
      return `<div class="exam-tip">${item.text}</div>`;
    
    case 'list':
      return `
        <ul class="list-items">
          ${item.items.map(li => `<li>${li}</li>`).join('')}
        </ul>
      `;
    
    case 'table':
      return `
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                ${item.headers.map(h => `<th>${h}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${item.rows.map(row => `
                <tr>
                  ${row.map(cell => `<td>${cell}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    
    case 'qa':
      const answerId = `answer-${index}`;
      const answerText = Array.isArray(item.answer) 
        ? `<ul>${item.answer.map(a => `<li>${a}</li>`).join('')}</ul>`
        : item.answer;
      return `
        <div class="qa-card">
          <div class="qa-question">
            <span>${item.question}</span>
            <span class="qa-toggle">▼</span>
          </div>
          <div class="qa-answer">
            ${answerText}
          </div>
        </div>
      `;
    
    case 'diagram':
      return `
        <div class="diagram">
          <h4>${item.title}</h4>
          <img src="${item.image}" alt="${item.title}">
          <p class="diagram-description">${item.description}</p>
        </div>
      `;
    
    case 'worked-example':
      const stepsHtml = item.steps.map((step, i) => `<li>${step}</li>`).join('');
      return `
        <div class="worked-example">
          <h4>${item.title}</h4>
          <ol>
            ${stepsHtml}
          </ol>
          <div class="answer-box">✓ Answer: ${item.answer}</div>
        </div>
      `;
    
    default:
      return '';
  }
}
