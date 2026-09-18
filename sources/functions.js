function createSpan(text, className) {
  const s = document.createElement('span');
  s.className = className;
  s.textContent = text;
  return s;
}

function appendItem(containerId, dateLabel, htmlContent) {
  const item = document.createElement('div');
  item.className = 'news-item';

  const content = document.createElement('div');
  content.innerHTML = htmlContent;

  item.appendChild(dateLabel);
  item.appendChild(content);
  document.getElementById(containerId).appendChild(item);
}

// e.g. addNewsItem('news-container', 'Feb.', '2026', 'Paper accepted to <a href="...">CVPR 2026</a>.');
function addNewsItem(containerId, month, year, htmlContent) {
  const dateLabel = document.createElement('div');
  dateLabel.className = 'date-label';
  dateLabel.appendChild(createSpan(month, 'date-month'));
  dateLabel.appendChild(createSpan(year, 'date-year'));
  appendItem(containerId, dateLabel, htmlContent);
}

// e.g. addWorkItem('work-container', 'Mar.', '2024', 'Aug.', '2024', 'Company, Research Intern');
function addWorkItem(containerId, startMonth, startYear, endMonth, endYear, htmlContent) {
  const dateLabel = document.createElement('div');
  dateLabel.className = 'date-label';
  dateLabel.appendChild(createSpan(startMonth, 'date-month'));
  dateLabel.appendChild(createSpan(startYear, 'date-year'));
  dateLabel.appendChild(createSpan('–', 'date-separator'));
  dateLabel.appendChild(createSpan(endMonth, 'date-month'));
  dateLabel.appendChild(createSpan(endYear, 'date-year'));
  appendItem(containerId, dateLabel, htmlContent);
}
