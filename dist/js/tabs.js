/** *************************************
          Tabs for Portfolio
*************************************** */

// VARIABLES

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

// FUNCTIONS

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach((panel) => {
    panel.hidden = 'true';
  });

  // mark all tab buttons as unselected
  tabButtons.forEach((button) => {
    button.setAttribute('aria-selected', false);
  });

  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  // find the associated tabPanel and show it
  const { id } = event.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby = "${id}"]`);
  tabPanel.hidden = false;
}

// EVENT LISTENERS

tabButtons.forEach((button) => button.addEventListener('click', handleTabClick));
